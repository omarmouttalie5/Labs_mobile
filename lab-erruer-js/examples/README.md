# Example code for the JavaScript errors lab

Author: [Your name]

Each folder contains a `broken` version that reproduces the error and a `fixed` version.

| Folder | Error | Needs PHP |
|---|---|---|
| 01-null-element | Cannot read properties of null (reading 'addEventListener') | No |
| 02-invalid-json | Unexpected token '<' ... is not valid JSON | Yes |
| 03-cors | Blocked by CORS policy | Yes (two servers) |
| 04-not-a-function | posts.map is not a function | Yes |
| 05-server-500 | 500 Internal Server Error | Yes (pdo_sqlite) |

## Run

Open a terminal in this `examples` folder and start the API and file server:

    php -S localhost:8000

Then open these pages in Chrome (press F12 for DevTools):

- http://localhost:8000/01-null-element/broken/index.html (and `fixed`)
- http://localhost:8000/02-invalid-json/broken/index.html (and `fixed`)
- http://localhost:8000/04-not-a-function/broken/index.html (and `fixed`)
- http://localhost:8000/05-server-500/broken/index.html (and `fixed`)

For Error 3, the page must come from a different origin than the API. Keep the first server running and start a second one in another terminal:

    cd 03-cors
    php -S localhost:5500

Then open http://localhost:5500/broken/index.html and http://localhost:5500/fixed/index.html.

## Debug in VS Code

Create `.vscode/launch.json` with a `chrome` configuration whose `url` is the page to debug, start the PHP server, and press F5. Set breakpoints in `app.js`. The file `04-not-a-function/broken/app.js` also contains a `debugger` statement.
