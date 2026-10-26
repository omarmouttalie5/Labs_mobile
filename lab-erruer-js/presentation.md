---
marp: true
theme: default
paginate: true
header: 'Debugging JavaScript Errors in a Blog'
footer: 'Author: [Your name]'
style: |
  section { font-size: 28px; }
  section.lead { text-align: center; justify-content: center; }
  h1 { color: #1f4e79; }
  h2 { color: #1f4e79; }
  code { font-size: 0.85em; }
  pre { font-size: 0.7em; }
  table { font-size: 0.8em; }
  .small { font-size: 0.75em; }
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Debugging JavaScript Errors in a Blog

Identify, understand, and resolve five real errors

Lab presentation
[Your name] - October 23, 2026

---

## Plan

1. Introduction and objectives
2. The blog project
3. Debugging method
4. Tools: VS Code, Chrome DevTools, PHP server
5. Five errors, each with:
   - the initial problem
   - interpreting the error
   - the resolution
   - the tools used
6. Summary and best practices
7. Running the example code

---

## 1. Introduction

- Errors are a normal part of development.
- A good developer does not guess: they **read the message, locate the source, and verify the fix**.
- This lab studies five errors met while building a blog:
  - HTML and JavaScript on the front end
  - PHP server exposing a JSON API
  - MySQL database behind the API

---

## Objectives

By the end of this lab, you can:

- read an error message and extract the useful information
- trace an error to its origin (front end, network, or server)
- use VS Code, Chrome DevTools, and the PHP server output to diagnose it
- apply a fix and **verify** that the problem is gone

---

## 2. The blog project

```
Browser (Chrome)                       PHP server
index.html + app.js   --- fetch --->   posts.php  ---> MySQL
http://localhost:5500                  http://localhost:8000
        <--- JSON response ---
```

| Part | Technology | Role |
|---|---|---|
| Front end | HTML, JavaScript | Display posts, send new posts |
| API | PHP | Return and store posts as JSON |
| Database | MySQL (PDO) | Persist the posts |

---

## 3. Debugging method

1. **Reproduce** the problem reliably
2. **Read** the full message: type, text, file, line
3. **Locate** the source: Console, Network, or debugger
4. **Fix** the cause, not the symptom
5. **Verify**: repeat the scenario, check Console and Network are clean

---

## 4. Tools: VS Code and Chrome

`.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [{
    "type": "chrome",
    "request": "launch",
    "name": "Debug blog in Chrome",
    "url": "http://localhost:8000/index.html",
    "webRoot": "${workspaceFolder}"
  }]
}
```

F5 = start or continue, F10 = step over, F11 = step into, Shift+F11 = step out
Panels: Variables, Watch, Call Stack

---

## 4. Tools: Chrome DevTools (F12)

| Tab | Use |
|---|---|
| Console | Error messages with file and line, run JavaScript live |
| Network | Every request: URL, method, status, headers, payload, response |
| Sources | Breakpoints, scope, call stack |
| Elements | Check that an element exists in the page |

Network filter **Fetch/XHR** isolates API calls.

---

## 4. Tools: the PHP server and the API

HTTP status code = first clue:

| Code | Meaning | Where to look |
|---|---|---|
| 2xx | Success | Check the data format |
| 4xx | Wrong request (bad URL, missing data) | URL, payload |
| 5xx | Server failure | Response tab, PHP terminal and log |

- The PHP built-in server (`php -S localhost:8000`) prints errors in its terminal.
- Network > Response shows what PHP actually returned.

---

## Error 1: the problem

```
Uncaught TypeError: Cannot read properties of null
(reading 'addEventListener')   at app.js:5
```

```html
<head><script src="app.js"></script></head>
<body><form id="comment-form"> ... </form></body>
```

```js
const form = document.querySelector('#comment-form');
form.addEventListener('submit', handleSubmit);
```

Situation: the comment form does nothing when submitted.

---

## Error 1: interpretation and resolution

**Interpretation**
- TypeError on `null`: `form` is `null`
- `querySelector` returns `null` when nothing matches
- The script runs before the form is parsed
- Breakpoint: Variables panel shows `form: null`

**Resolution**: `<script src="app.js" defer></script>`

**Verify**: no error, submit event fires.
**Tools**: Console, Elements panel, VS Code debugger.
**Code**: `examples/01-null-element`

---

## Error 2: the problem

```
Uncaught (in promise) SyntaxError: Unexpected token '<',
"<!DOCTYPE "... is not valid JSON
```

```js
const response = await fetch('/api/post.php');
const result = await response.json();
```

Situation: the post list stays empty on the home page.

---

## Error 2: interpretation and resolution

**Interpretation**
- `response.json()` received HTML, not JSON
- Network tab: status **404**, Response shows an HTML page
- The file is `posts.php`: typo in the URL

**Resolution**
```js
const response = await fetch('/api/posts.php');
if (!response.ok) throw new Error('HTTP ' + response.status);
```

**Verify**: status 200, `Content-Type: application/json`.
**Tools**: Network (Status, Response, Preview). **Code**: `examples/02-invalid-json`

---

## Error 3: the problem

```
Access to fetch at 'http://localhost:8000/api/posts_nocors.php'
from origin 'http://localhost:5500' has been blocked by CORS
policy: No 'Access-Control-Allow-Origin' header is present.
TypeError: Failed to fetch
```

Situation: the front end (port 5500) calls the API (port 8000).
Different port = different **origin**.

---

## Error 3: interpretation and resolution

**Interpretation**
- The browser blocks the response, the JavaScript is fine
- Network > Response Headers: no `Access-Control-Allow-Origin`
- POST with JSON triggers a preflight `OPTIONS` request

**Resolution** (PHP)
```php
header('Access-Control-Allow-Origin: http://localhost:5500');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
```
**Tools**: Console, Network headers. **Code**: `examples/03-cors`

---

## Error 4: the problem

```
Uncaught TypeError: posts.map is not a function
    at renderPosts (app.js:6)
```

```js
const posts = await response.json();
renderPosts(posts);   // posts.map(...) fails
```

Situation: the request succeeds (200) but nothing is displayed.

---

## Error 4: interpretation and resolution

**Interpretation**
- `map` exists only on arrays, so `posts` is not an array
- Breakpoint in VS Code, Variables panel:
  `posts: Object { data: Array(3), total: 3 }`
- The API wraps the rows in an object

**Resolution**
```js
const result = await response.json();
renderPosts(result.data);   // and check Array.isArray(posts)
```

**Verify**: `posts` is `Array(3)`, three articles displayed.
**Tools**: VS Code debugger, Network Preview. **Code**: `examples/04-not-a-function`

---

## Error 5: the problem

```
POST http://localhost:8000/api/posts_500.php 500 (Internal Server Error)
Uncaught (in promise) Error: Failed to create post
```

Situation: clicking Publish on the new post form does nothing.
The JavaScript message is too vague: the cause is on the server.

---

## Error 5: interpretation

Network tab, selected request:

- **Headers**: POST, status 500
- **Payload**: `{"title":"Hello","content":"First post"}` (valid data was sent)
- **Response**:

```
Fatal error: Uncaught PDOException: SQLSTATE[HY000]:
General error: 1 table posts has no column named body
```

The PHP terminal prints the same message with the line number.
The column is `content`, the query uses `body`.

---

## Error 5: resolution

```php
$stmt = $pdo->prepare(
  'INSERT INTO posts (title, content) VALUES (:title, :content)');
```

- Catch `PDOException`, log it, return JSON with a clean status code
- JavaScript shows `body.error` from the server

**Verify**: Network shows **201 Created**, new post visible after reload.
**Tools**: Network (Headers, Payload, Response), PHP terminal and log.
**Code**: `examples/05-server-500`

---

## Summary

| # | Error | Cause | Main tool |
|---|---|---|---|
| 1 | null (reading 'addEventListener') | Script before the DOM | Console, debugger |
| 2 | Unexpected token '<' | Wrong URL, HTML 404 | Network |
| 3 | Blocked by CORS | Missing server header | Console, Network |
| 4 | posts.map is not a function | Object instead of array | Debugger |
| 5 | 500 Internal Server Error | Wrong SQL column | Network, PHP log |

---

## Best practices

- Always check `response.ok` before `response.json()`
- Validate data shape (`Array.isArray`) before using array methods
- Use `defer` on scripts
- Return JSON errors with correct status codes from PHP
- Show detailed errors in development only; log them in production
- Reproduce, read, locate, fix, verify

---

## Running the example code

Folder `examples/`, one folder per error with `broken` and `fixed` versions.

```
cd examples
php -S localhost:8000
```

Error 3 needs a second server for the page:

```
cd examples/03-cors
php -S localhost:5500
```

Open the pages in Chrome, press F12, compare broken and fixed.

---

<!-- _class: lead -->

## Conclusion

A Console message is a starting point, not always the real location of the problem.

Use the right tool for each layer: **debugger** for JavaScript state, **Network tab** for HTTP, **server log** for PHP.

Thank you. Questions?