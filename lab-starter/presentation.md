---
marp: true
theme: default
paginate: true
size: 16:9
footer: 'Starter Lab · Windows & VS Code'
style: |
  /* ===== Palette: navy #0b132b · panel #112245 · blue #3794ff · mint #5eead4 · text #e6efff ===== */
  :root {
    --bg: #0b132b;
    --bar: #0e1a35;
    --panel: #112245;
    --blue: #3794ff;
    --mint: #5eead4;
    --text: #e6efff;
    --muted: #8ea6d6;
  }

  /* ---------- Base: every slide looks like an editor window ---------- */
  section {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    font-size: 25px;
    color: var(--text);
    background:
      radial-gradient(circle at 88% 18%, rgba(55, 148, 255, 0.22), transparent 38%),
      radial-gradient(circle at 8% 95%, rgba(94, 234, 212, 0.14), transparent 40%),
      var(--bg);
    padding: 96px 70px 62px 70px;
    justify-content: center;
  }

  /* Window title bar with the three dots */
  section::before {
    content: '';
    position: absolute;
    left: 0; right: 0; top: 0;
    height: 56px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background:
      radial-gradient(circle at 32px 28px, #ff5f56 0 7px, transparent 8px),
      radial-gradient(circle at 58px 28px, #ffbd2e 0 7px, transparent 8px),
      radial-gradient(circle at 84px 28px, #27c93f 0 7px, transparent 8px),
      var(--bar);
  }

  /* Header = the editor tab (file name) */
  section header {
    left: 120px; right: auto; top: 0;
    height: 56px;
    padding: 0 22px;
    line-height: 54px;
    box-sizing: border-box;
    background: var(--bg);
    border-top: 2px solid var(--blue);
    color: var(--text);
    font-family: Consolas, 'Cascadia Code', 'Courier New', monospace;
    font-size: 0.55em;
  }

  section footer {
    left: 70px; bottom: 24px;
    color: #6b82b0;
    font-size: 0.5em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  section::after {
    right: 70px; bottom: 22px;
    color: var(--mint);
    font-family: Consolas, 'Cascadia Code', monospace;
    font-size: 0.6em;
    font-weight: 700;
  }

  /* ---------- Typography ---------- */
  h1 {
    color: #ffffff;
    font-size: 1.7em;
    font-weight: 800;
    margin: 0 0 22px 0;
  }
  h1::before { content: '# '; color: var(--mint); }
  h2 {
    margin: 0 0 10px 0;
    color: var(--mint);
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
  strong { color: var(--mint); font-weight: 700; }
  p { margin: 6px 0; }
  ul { padding-left: 1.1em; line-height: 1.5; }
  li { margin: 8px 0; }
  li::marker { color: var(--blue); }

  code {
    font-family: Consolas, 'Cascadia Code', 'Courier New', monospace;
    background: rgba(55, 148, 255, 0.2);
    color: #a9d2ff;
    border-radius: 5px;
    padding: 1px 7px;
    font-size: 0.9em;
  }

  /* ---------- Cards ---------- */
  /* Numbered steps */
  ol { list-style: none; counter-reset: n; padding: 0; margin: 0; }
  ol li {
    counter-increment: n;
    position: relative;
    margin: 10px 0;
    padding: 10px 18px 10px 64px;
    background: var(--panel);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 12px;
    font-size: 0.92em;
  }
  ol li::before {
    content: counter(n);
    position: absolute;
    left: 14px; top: 50%;
    transform: translateY(-50%);
    width: 34px; height: 34px; line-height: 34px;
    text-align: center;
    border-radius: 50%;
    background: var(--blue);
    color: #ffffff;
    font-weight: 800;
  }

  /* Two-column card grid */
  section.grid ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    padding: 0; margin: 0;
    list-style: none;
    line-height: 1.35;
  }
  section.grid li {
    margin: 0;
    padding: 14px 20px;
    background: var(--panel);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-top: 4px solid var(--blue);
    border-radius: 12px;
    font-size: 0.92em;
  }
  section.grid li strong { font-size: 1.05em; }

  /* Callout */
  blockquote {
    margin: 20px 0 0 0;
    padding: 12px 22px;
    background: rgba(94, 234, 212, 0.1);
    border-left: 6px solid var(--mint);
    border-radius: 0 12px 12px 0;
    font-size: 0.95em;
  }
  blockquote p { margin: 4px 0; }
  blockquote strong { color: var(--mint); }

  /* Table */
  table {
    width: 100%;
    font-size: 0.78em;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 12px;
    overflow: hidden;
  }
  th {
    background: #16315f;
    color: var(--mint);
    padding: 10px 16px;
    text-align: left;
    letter-spacing: 0.04em;
  }
  td {
    background: rgba(255, 255, 255, 0.04);
    color: black;
    padding: 9px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }
  td strong { color: black; }
  td code { background: rgba(55, 148, 255, 0.2); }

  /* Terminal-style code block */
  pre {
    margin: 14px 0 0 0;
    padding: 14px 20px;
    background: #070d1f;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-left: 5px solid var(--mint);
    border-radius: 10px;
    font-size: 0.62em;
    line-height: 1.5;
  }
  pre code { background: transparent; padding: 0; color: #d6e4ff; font-size: 1em; }
  section pre code span { color: inherit !important; }
  section pre code .hljs-comment { color: #6b82b0 !important; }
  section pre code .hljs-string  { color: #a7f3d0 !important; }
  section pre code .hljs-built_in,
  section pre code .hljs-keyword { color: #7cc4ff !important; }

  /* ---------- Cover slide ---------- */
  section.cover {
    padding-left: 90px;
    background:
      radial-gradient(circle at 86% 30%, rgba(55, 148, 255, 0.4), transparent 42%),
      radial-gradient(circle at 70% 100%, rgba(94, 234, 212, 0.22), transparent 45%),
      var(--bg);
  }
  section.cover h1 {
    font-size: 3.1em;
    line-height: 1.05;
    margin-bottom: 10px;
  }
  section.cover h1::before { content: none; }
  section.cover h2 {
    margin: 0 0 34px 0;
    color: var(--mint);
    font-size: 1.15em;
    letter-spacing: 0.02em;
    text-transform: none;
    max-width: 760px;
    line-height: 1.3;
  }
  section.cover p { font-size: 0.85em; color: #c7d7f5; line-height: 1.7; }
  section.cover code { font-size: 1em; }
---

<!-- _class: cover -->
<!-- _header: 'starter-lab.md' -->
<!-- _paginate: false -->
<!-- _footer: '' -->

# Starter Lab

## Setting up Windows and Visual Studio Code for web development

**Learner:** Omar Mouttalie  
**Supervisor:** ES-SARRAJ Fouad 
**Center:** Solicode Tangier  
**Institution:** OFPPT 
`> code .`

---

<!-- _header: 'outline.md' -->

# Outline

1. Technical stack
2. Definitions
3. Problem and need
4. Solution and implementation
5. Results and conclusion

---

<!-- _header: 'stack.md' -->

# Technical Stack

| Tool | Purpose |
| :--- | :--- |
| **Windows 10 / 11** | The operating system we configure |
| **Visual Studio Code** | Free code editor for web development |
| **Extensions** | Add features: formatting, live preview, error checks |
| **Chrome or Edge** | Browser used to test and inspect pages |
| **Terminal** | Runs the `code` command to install extensions |

---

<!-- _class: grid -->
<!-- _header: 'definitions.md' -->

# Definitions

- **Code editor**  
  A program to write and edit source code, with helpful tools.
- **Extension**  
  A small add-on that gives VS Code a new feature.
- **Settings**  
  Options (saved in `settings.json`) that customize the editor.
- **Live Server**  
  An extension that reloads the page in the browser on every save.

---

<!-- _class: grid -->
<!-- _header: 'problem.md' -->

# Problem and Need

- **The problem**  
  Beginners often start on an unprepared PC: missing tools, different setups and lost time.
- **The need**  
  A ready, standard environment, installed once and identical for everyone.

> **Why this Lab?** Every web project starts in the editor, so a good setup saves time in every later Lab.

---

<!-- _header: 'solution.md' -->

# Solution and Implementation

1. Update Windows and show file extensions in File Explorer
2. Install VS Code from `code.visualstudio.com`
3. Install the extensions (below, or in the Extensions panel)
4. **Test:** create `index.html`, then click **Go Live**

```powershell
code --version
code --install-extension ritwickdey.LiveServer
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
```

---

<!-- _class: grid -->
<!-- _header: 'results.md' -->

# Results and Conclusion

- **Results**  
  VS Code installed, three extensions added, and a test page opens in the browser.
- **What I learned**  
  A clean setup is done once, then makes every project faster and more consistent.

> **Next step:** configure Git and GitHub.