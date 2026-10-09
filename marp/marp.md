---
marp: true
theme: gaia
paginate: true
---

<!-- _class: lead -->

# Marp

- Presentations from Markdown
- Write once • export anywhere

---

## What is Marp?

- Markdown-based presentation ecosystem
- Turns Markdown files into slide decks
- **Philosophy:** content first, presentation as code
- Plain-text source • readable • version-controllable

---

## Features

- **Markdown formatting**
  - Headings • lists • links • images • code
- **Built-in themes**
  - Default • Gaia • Uncover
- **Multi-format export**
  - HTML • PDF • PowerPoint • PNG • JPEG

---

## Marp vs. PowerPoint / Keynote

| | Marp | PowerPoint / Keynote |
|:--|:--|:--|
| Authoring | Markdown text | Visual editor |
| Content structure | Headings • lists • code | Text boxes • shapes |
| Styling | Themes • CSS | Templates • visual controls |
| Collaboration | Git • text diffs | App collaboration tools |
| Export | HTML • PDF • PPTX • images | PDF • PPTX • images |

---

## Front matter: minimal setup

```markdown
---
marp: true
theme: gaia
paginate: true
---

# My presentation

- First key point
- Second key point
```

---

## Core directives

- **Global** — YAML front matter
  - `theme: gaia` • `paginate: true`
  - `header: 'Course notes'` • `footer: 'Marp basics'`
- **Slide-local** — HTML comment • `_` prefix
  - `<!-- _theme: uncover -->` • `<!-- _paginate: false -->`
  - `<!-- _header: 'Section 1' -->` • `<!-- _footer: 'Draft' -->`

---

## Quick start

- **VS Code**
  - Install *Marp for VS Code*
  - Open `.md` • enable Marp preview
- **CLI**
  - Install `@marp-team/marp-cli`
  - Run `marp slides.md --pdf`
- **Web**
  - Open [vscode.dev](https://vscode.dev/)
  - Install *Marp for VS Code*
  - Open Markdown • preview • export