---
marp: true
theme: default
paginate: true
footer: "PHP Lab · Errors & Exceptions, Namespaces, Traits"
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@400;600&display=swap');

  /* ---------- Base ---------- */
  section {
    --accent: #8b7cff;
    --text: #e6e8ee;
    --muted: #8a93a6;
    --panel: #11141b;
    --line: #232834;
    font-family: 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 26px;
    padding: 52px 70px 56px 86px;
    color: var(--text);
    background-color: #0a0c10;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  section::before {
    content: "";
    position: absolute; left: 0; top: 0; bottom: 0; width: 8px;
    background: var(--accent);
  }
  /* One accent color per concept */
  section.err   { --accent: #ff5d73; }
  section.ns    { --accent: #2dd4bf; }
  section.tr    { --accent: #fbbf24; }

  h1 {
    color: #ffffff; font-weight: 800; font-size: 1.55em;
    letter-spacing: -0.01em; margin: 0 0 0.45em 0;
  }
  h2 {
    color: var(--accent); font-family: 'JetBrains Mono', Consolas, monospace;
    font-weight: 600; font-size: 0.62em; letter-spacing: 0.14em;
    text-transform: uppercase; margin: 0 0 0.3em 0;
  }
  strong { color: #ffffff; }
  em { color: var(--muted); }
  p { line-height: 1.5; }
  footer, section::after {
    color: #5b6478; font-size: 0.42em; background: none;
    font-family: 'JetBrains Mono', Consolas, monospace;
  }

  /* ---------- Lists ---------- */
  ul, ol { line-height: 1.55; padding-left: 1.2em; }
  li { margin: 0.35em 0; }
  li::marker { color: var(--accent); font-weight: 700; }

  /* ---------- Inline code ---------- */
  code {
    font-family: 'JetBrains Mono', Consolas, monospace;
    background: #1a1f2b; color: var(--accent);
    padding: 0.05em 0.35em; border-radius: 0; font-size: 0.85em;
  }

  /* ---------- Code blocks ---------- */
  section pre {
    background: #0f131a !important;
    border: 1px solid var(--line);
    border-left: 4px solid var(--accent);
    border-radius: 0;
    padding: 16px 22px;
    margin: 0.5em 0;
    font-size: 0.6em;
    line-height: 1.55;
  }
  section pre code {
    background: transparent !important; color: #e6e8ee !important;
    padding: 0; font-size: 1em;
  }
  section pre code .hljs-keyword,
  section pre code .hljs-literal,
  section pre code .hljs-selector-tag { color: #c4b5fd !important; }
  section pre code .hljs-string,
  section pre code .hljs-attr { color: #86efac !important; }
  section pre code .hljs-comment,
  section pre code .hljs-quote { color: #6b7488 !important; font-style: italic; }
  section pre code .hljs-number { color: #fbbf24 !important; }
  section pre code .hljs-title,
  section pre code .hljs-function { color: #7dd3fc !important; }
  section pre code .hljs-built_in,
  section pre code .hljs-type { color: #67e8f9 !important; }
  section pre code .hljs-variable,
  section pre code .hljs-params { color: #e6e8ee !important; }

  /* ---------- Tables ---------- */
  section table {
    display: table; width: 100%;
    border-collapse: collapse; border-spacing: 0;
    font-size: 0.78em; margin-top: 0.4em;
    border: 1px solid var(--line);
    border-radius: 0;
  }
  section table thead, section table tbody, section table tr {
    background: transparent !important; border: 0 !important;
  }
  section table th {
    background: #1a1f2b !important;
    color: var(--accent) !important;
    padding: 12px 16px; text-align: left;
    border: 0 !important;
    border-bottom: 2px solid var(--accent) !important;
    font-weight: 800;
  }
  section table th strong { color: var(--accent) !important; }
  section table td {
    background: #11141b !important;
    color: var(--text) !important;
    padding: 11px 16px;
    border: 0 !important;
    border-bottom: 1px solid var(--line) !important;
  }
  section table tr:nth-child(even) td { background: #0e1117 !important; }
  section table td strong { color: #ffffff !important; }
  section table td:first-child { font-weight: 600; color: #ffffff !important; }

  /* ---------- Title & closing ---------- */
  section.lead {
    display: flex; flex-direction: column; justify-content: center;
    background-image:
      linear-gradient(135deg, transparent 0 74%, rgba(139,124,255,0.10) 74% 100%),
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: auto, 40px 40px, 40px 40px;
  }
  section.lead::before { width: 16px; }
  section.lead h1 { font-size: 2.2em; line-height: 1.12; }
  section.lead h2 { font-size: 0.75em; }
  section.lead p { color: #b4bccc; }
  section.lead p:last-of-type {
    align-self: flex-start; margin-top: 1.2em;
    padding: 10px 22px; font-size: 0.8em; line-height: 1.7;
    border-left: 3px solid var(--accent); background: var(--panel);
  }
---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _footer: "" -->

## PHP · Lab Report

# Error Handling, Namespaces & Traits

Exploring PHP concepts beyond the classroom



**Student Name:** Omar Mouttalie
**Supervisor:** ES-SARRAJ Fouad
**Institution:** OFPPT / Solicode

---

## 01 · Introduction

# About This Lab

- This lab explores **three PHP concepts** not yet covered in class
- For each one: its **purpose** and a **practical example**
- Examples come from a simple web application with **users and orders**
- Goal: write PHP that is **safer, better organized, and easier to maintain**

---

## 02 · Definition

# The Three Concepts

| Concept | Definition |
|---|---|
| **Error & exception handling** | Mechanisms to detect, report, and recover from problems at runtime |
| **Namespaces** | Containers that group classes, functions, and constants under a unique name to avoid conflicts |
| **Traits** | Reusable sets of methods and properties that can be included in several classes |

---

## 03 · Plan

# Outline of the Presentation

1. **Error & exception handling**: detecting and processing errors
2. **Namespaces**: organizing classes and avoiding name conflicts
3. **Traits**: sharing code across multiple classes
4. **Comparison and conclusion**

---

<!-- _class: err -->

## 04 · Main Body · Error & Exception Handling

# Errors vs Exceptions

- **Purpose:** detect problems early, recover gracefully, and never expose internals to users

| | Error | Exception |
|---|---|---|
| **Raised by** | The PHP engine | Our code (`throw`) or libraries |
| **Examples** | Warnings, notices, `TypeError` | `PDOException`, custom exceptions |
| **Handled with** | `set_error_handler`, `catch (Error)` | `try / catch / finally` |

Both implement the `Throwable` interface.

---

<!-- _class: err -->

## 04 · Main Body · Error & Exception Handling

# Throwing an Exception

```php
<?php
class UserNotFoundException extends RuntimeException {}

function findUser(PDO $db, int $id): array {
    $stmt = $db->prepare('SELECT * FROM users WHERE id = ?');
    $stmt->execute([$id]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        throw new UserNotFoundException("User $id not found");
    }
    return $user;
}
```

A custom exception gives the problem a **clear, meaningful name**.

---

<!-- _class: err -->

## 04 · Main Body · Error & Exception Handling

# Catching: try / catch / finally

```php
try {
    $user = findUser($db, 42);
} catch (UserNotFoundException $e) {
    echo 'User not found';
} catch (PDOException $e) {
    error_log($e->getMessage());
    echo 'Database error, try again later';
} finally {
    $db = null; // always executed
}
```

*Tip: set `PDO::ATTR_ERRMODE` to `PDO::ERRMODE_EXCEPTION` so database errors are thrown.*

---

<!-- _class: err -->

## 04 · Main Body · Error & Exception Handling

# Global Handlers

```php
// Turn PHP warnings and notices into exceptions
set_error_handler(function ($no, $str, $file, $line) {
    throw new ErrorException($str, 0, $no, $file, $line);
});

// Last line of defense for anything not caught
set_exception_handler(function (Throwable $e) {
    error_log($e->getMessage());
    echo 'Something went wrong.';
});
```

Errors are **logged for developers** and **hidden from users**.

---

<!-- _class: ns -->

## 04 · Main Body · Namespaces

# Purpose of Namespaces

- **Group related code**: `App\Models`, `App\Services`
- **Avoid collisions** between our classes and third-party libraries
- **Mirror the folder structure** for clean autoloading (PSR-4)
- Key syntax: `namespace`, `use`, and `as` (alias)

---

<!-- _class: ns -->

## 04 · Main Body · Namespaces

# Declaring Namespaces

```php
<?php
// src/Models/User.php
namespace App\Models;

class User {
    public function __construct(public string $name) {}
}

// src/Services/Mailer.php
namespace App\Services;

class Mailer {
    public function send(string $to): void { /* ... */ }
}
```

---

<!-- _class: ns -->

## 04 · Main Body · Namespaces

# Using Namespaces

```php
<?php
// index.php
require 'vendor/autoload.php';

use App\Models\User;
use App\Services\Mailer;
use Vendor\Lib\Mailer as ExternalMailer; // alias avoids the clash

$user   = new User('Sara');
$mailer = new Mailer();          // App\Services\Mailer
$other  = new ExternalMailer();  // Vendor\Lib\Mailer
```

Two classes named `Mailer` can **coexist** without any conflict.

---

<!-- _class: ns -->

## 04 · Main Body · Namespaces

# Autoloading with Composer (PSR-4)

```json
{
  "autoload": {
    "psr-4": { "App\\": "src/" }
  }
}
```

- `App\Models\User` is loaded from `src/Models/User.php`
- Run `composer dump-autoload` after changing the mapping
- No more manual `require` for every class

---

<!-- _class: tr -->

## 04 · Main Body · Traits

# Purpose of Traits

- PHP allows only **single inheritance**; traits fill the gap
- A trait bundles **methods and properties**, added with `use` inside a class
- A trait cannot be instantiated on its own
- Name conflicts are resolved with `insteadof` and `as`
- Example: a `Loggable` trait shared by `User` and `Order`

---

<!-- _class: tr -->

## 04 · Main Body · Traits

# Sharing Code with a Trait

```php
<?php
trait Loggable {
    public function log(string $message): void {
        error_log('[' . static::class . '] ' . $message);
    }
}

class User  { use Loggable; }
class Order { use Loggable; }

(new User())->log('User created');
(new Order())->log('Order placed');
```

One piece of code, **reused by unrelated classes**, with no duplication.

---

## 04 · Main Body · Comparison

# The Concepts at a Glance

| Concept | Purpose | Key syntax | Project example |
|---|---|---|---|
| **Error handling** | Detect and recover from problems | `try / catch / finally`, `throw` | User not found in database |
| **Namespaces** | Organize code, avoid conflicts | `namespace`, `use`, `as` | `App\Models\User` |
| **Traits** | Share code across classes | `trait`, `use` | `Loggable` for User and Order |

---

<!-- _class: lead -->
<!-- _footer: "" -->

## 05 · Conclusion

# Safer, Cleaner, Reusable PHP

- **Error handling** makes applications reliable and user-friendly
- **Namespaces** keep large projects organized and conflict-free
- **Traits** let us reuse code without deep inheritance

**Thank you. Questions?**