---
marp: true
theme: default
size: 16:9
paginate: true
style: |
  section {
    font-family: 'Trebuchet MS', 'Segoe UI', Arial, sans-serif;
    font-size: 25px;
    background: #ffffff;
    color: #12363a;
    padding: 50px 70px;
    justify-content: flex-start;
  }
  section::after {
    background: #38a3a5;
    color: #ffffff;
    font-size: 18px;
    border-radius: 20px;
    padding: 2px 14px;
    right: 34px;
    bottom: 24px;
  }
  h1 {
    margin: -50px -70px 30px -70px;
    padding: 30px 70px 22px 70px;
    background: #38a3a5;
    color: #ffffff;
    font-size: 44px;
    border-bottom: 10px solid #57cc99;
  }
  strong { color: #2a8486; }
  a { color: #2a8486; }
  ol, ul {
    padding: 0;
    margin: 0;
    list-style-position: inside;
  }
  li {
    background: #e6f7ef;
    border-left: 8px solid #57cc99;
    border-radius: 0 8px 8px 0;
    padding: 7px 16px;
    margin-bottom: 10px;
  }
  li::marker { color: #38a3a5; font-weight: bold; }
  code {
    background: #d4f1e3;
    color: #0f4547;
    border-radius: 4px;
    padding: 1px 6px;
  }
  pre {
    background: #0f3d3e;
    border-radius: 10px;
    border-top: 6px solid #57cc99;
    margin: 14px 0;
  }
  pre code { background: none; color: #d4f1e3; }
  table {
    font-size: 22px;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 8px;
  }
  th {
    background: #57cc99;
    color: #0b2a2c;
    text-align: left;
    padding: 10px 16px;
  }
  td {
    background: #e6f7ef;
    padding: 10px 16px;
    border-bottom: 3px solid #38a3a5;
  }
  blockquote {
    background: #38a3a5;
    color: #ffffff;
    border-radius: 10px;
    padding: 4px 22px;
    margin: 20px 0 0 0;
  }
  blockquote strong, blockquote code { color: #ffffff; }
  pre code, pre code span { color: #d4f1e3 !important; }
  section.compact { font-size: 22px; }
  section.compact h1 { margin-bottom: 20px; }
  section.compact p { margin: 0 0 10px 0; line-height: 1.4; }
  section.compact li { padding: 4px 16px; margin-bottom: 6px; }
  section.compact pre { margin: 8px 0; padding: 0; font-size: 18px; }
  section.compact pre code { padding: 8px 18px; }
  section.lead {
    background:
      radial-gradient(circle at 88% 18%, #57cc99 0 150px, transparent 151px),
      radial-gradient(circle at 96% 88%, #38a3a5 0 230px, transparent 231px),
      #0f3d3e;
    color: #d4f1e3;
    justify-content: center;
    padding-left: 90px;
  }
  section.lead::after { display: none; }
  section.lead h1 {
    margin: 0 0 18px 0;
    padding: 0 0 0 24px;
    background: none;
    border-bottom: none;
    border-left: 12px solid #57cc99;
    color: #ffffff;
    font-size: 84px;
  }
  section.lead strong { color: #57cc99; }
  section.divider {
    background: #57cc99;
    color: #0b2a2c;
    justify-content: center;
  }
  section.divider h1 {
    margin: 0 0 24px 0;
    padding: 0;
    background: none;
    border-bottom: 8px solid #0b2a2c;
    color: #0b2a2c;
    font-size: 56px;
    display: inline-block;
    align-self: flex-start;
  }
  section.divider li {
    background: #38a3a5;
    color: #ffffff;
    border-left-color: #0b2a2c;
  }
  section.divider li::marker { color: #ffffff; }
  section.divider strong, section.divider code { color: #ffffff; }
  section.divider code { background: rgba(255, 255, 255, 0.2); }
---

<!-- _class: lead -->

# Lab Starter

**Setting up your development environment**

Git · Windows · VS Code

---

# Agenda

1. The problems we ran into
2. The solutions
3. Step-by-step guides for each fix

---

# 1. The Problems

- **Git:** the project is not initialized, so changes are not tracked.
- **Hidden files:** `.gitignore` and `.env` do not show up in the file explorer.
- **Hidden extensions:** `README.md` is displayed as just `README`.
- **TODOs:** pending tasks are scattered across the code.
- **Web preview:** HTML pages have to be opened and refreshed by hand.

---

# 2. The Solutions

| Problem | Solution |
|---|---|
| Initialize Git | VS Code Source Control or `git init` |
| See hidden files | Windows Explorer: **Hidden items** |
| See `.md`, `.js`, `.php`… | Windows Explorer: **File name extensions** |
| Find TODOs in the code | **[Better Todo Tree](https://marketplace.visualstudio.com/items?itemName=FanaticPythoner.better-todo-tree)** extension |
| Live HTML preview | **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** extension |

---

<!-- _class: divider -->

# 3. Step-by-Step Guides

Five short walkthroughs, one per fix:

1. Initialize a **Git** repository
2. Show **hidden files**
3. Show **file name extensions**
4. Track tasks with **Better Todo Tree**
5. Preview pages with **Live Server**

---

# Initialize Git

1. Open the project folder in VS Code.
2. Open **Source Control** with `Ctrl + Shift + G`.
3. Click **Initialize Repository**.
4. Or use the terminal instead:

```bash
git init
```

---

# Show Hidden Files

To reveal files such as `.gitignore` or `.env`:

1. Open File Explorer with `Win + E`.
2. Click the **View** tab.
3. Choose **Show** → **Hidden items**.
4. Hidden files now appear in the folder.

---

# Show File Name Extensions

To tell `README.md` apart from `README.md.txt`:

1. Open File Explorer with `Win + E`.
2. Click **View** → **Show**.
3. Turn on **File name extensions**.
4. Check the real file name, for example `README.md`.

---

<!-- _class: compact -->

# Track Tasks with Better Todo Tree

**What it does:** scans your code for `TODO` and `FIXME` comments, groups them in a tree view, and jumps straight to the matching line.

1. Open **Extensions** with `Ctrl + Shift + X`.
2. Search for **Better Todo Tree** (publisher: FanaticPythoner) and install it.
3. Open your project folder in VS Code.
4. Add comments to your code:

```js
// TODO: add input validation
// FIXME: fix this bug
```

5. Click the **Better Todo Tree** icon in the sidebar.
6. Click any entry to open the file at that line.

---

# Preview Pages with Live Server

1. Open **Extensions** with `Ctrl + Shift + X`.
2. Search for **Live Server** (publisher: Ritwick Dey) and install it.
3. Open the project containing `index.html`.
4. Click **Go Live** in the VS Code status bar.
5. The page opens in your browser and refreshes whenever you save a change.

> Live Server only serves static HTML pages. It does not run PHP code.