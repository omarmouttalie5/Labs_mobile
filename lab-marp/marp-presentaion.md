---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap');

  section {
    background: #f8fafc;
    color: #1e293b;
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 26px;
    padding: 64px 80px;
    border-top: 12px solid #4f46e5;
  }
  section::after {
    color: #4f46e5;
    font-weight: 700;
    font-size: 18px;
  }
  h1, h2, h3 {
    font-family: 'Space Grotesk', sans-serif;
    color: #312e81;
  }
  h2 {
    font-size: 1.6em;
    margin-bottom: 0.7em;
  }
  h2::after {
    content: "";
    display: block;
    width: 64px;
    height: 5px;
    margin-top: 10px;
    background: #06b6d4;
    border-radius: 3px;
  }
  h3 {
    color: #0891b2;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  a { color: #4f46e5; font-weight: 700; }
  li { margin: 0.35em 0; }
  li::marker { color: #06b6d4; }
  strong { color: #4f46e5; }
  code {
    background: #e0e7ff;
    color: #3730a3;
    border-radius: 4px;
    padding: 0 6px;
  }
  pre {
    background: #1e1b4b;
    border-radius: 12px;
    padding: 14px 22px;
  }
  pre code { background: transparent; color: #e0e7ff; padding: 0; }

  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
  .card {
    background: #ffffff;
    border: 2px solid #c7d2fe;
    border-left: 8px solid #4f46e5;
    border-radius: 12px;
    padding: 6px 26px;
  }

  /* dark slides */
  section.dark {
    background: #1e1b4b;
    color: #e0e7ff;
    border-top-color: #06b6d4;
  }
  section.dark h1, section.dark h2 { color: #ffffff; }
  section.dark strong { color: #67e8f9; }
  section.dark::after { color: #67e8f9; }
  section.dark li::marker { color: #67e8f9; }

  /* title slide */
  section.title { justify-content: center; }
  section.title h1 { font-size: 3.8em; margin: 0; }
  section.title h1::after { display: none; }
  section.title p { font-size: 1.1em; color: #a5b4fc; margin-top: 0.3em; }
---

<!-- _class: dark title -->
<!-- _paginate: false -->

# Discover Marp

Build presentations from plain Markdown

---

## Agenda

<div class="cols">
<div class="card">

1. What is Marp?
2. Slides, headings, lists
3. Images and themes
4. Exporting your deck

</div>
<div>

### Goal

Turn a single `.md` file into a structured, professional presentation.

</div>
</div>

---

## What is Marp?

**Marp** (Markdown Presentation Ecosystem) turns Markdown into slides.

<div class="cols">
<div class="card">

### Why use it

- Write content, not layouts
- Version-control friendly
- Fast and consistent

</div>
<div class="card">

### Tools

- VS Code extension
- Marp CLI
- Marp for web

</div>
</div>

---

## Slide Separators

Three dashes on their own line start a new slide. Settings go in the front matter at the top of the file.

<div class="cols">
<div>

```markdown
---
marp: true
theme: default
paginate: true
---

# Slide 1

---

# Slide 2
```

</div>
<div>

- `marp: true` activates Marp
- `theme` picks the look
- `paginate` shows slide numbers

</div>
</div>

---

## Headings and Lists

<div class="cols">
<div>

```markdown
# Title
## Section
### Label

- First point
- Second point
  - Sub-point

1. Step one
2. Step two
```

</div>
<div>

- Use **one idea per slide**
- Keep headings short
- Limit lists to **3 to 5 items**
- Nest only one level deep

</div>
</div>

---

## Images

<div class="cols">
<div>

```markdown
![Logo](images/logo.png)

![w:300](images/logo.png)

![bg right:40%](images/photo.jpg)
```

</div>
<div>

- Standard Markdown syntax
- `w:` and `h:` resize an image
- `bg` makes a background image
- `right:40%` splits the slide

</div>
</div>

---

## Themes

<div class="cols">
<div class="card">

### Built-in

`default`, `gaia`, and `uncover`

```markdown
theme: gaia
```

</div>
<div class="card">

### Custom

Add CSS in the front matter:

```markdown
style: |
  h1 { color: teal; }
```

</div>
</div>

Switch a single slide with `<!-- _class: dark -->`.

---

## Exporting

<div class="cols">
<div>

```bash
npx @marp-team/marp-cli \
  slides.md --pdf
```

</div>
<div>

- **PDF** for sharing
- **HTML** for the web
- **PPTX** for PowerPoint
- Or use the VS Code export command

</div>
</div>

---

## Best Practices

- **One message** per slide
- **Two colors** plus a neutral, no more
- **Large text**, with 6 lines at most
- **Alt text** on every image
- **Preview** often before exporting

---

<!-- _class: dark -->

## Key Takeaways

- Marp turns **Markdown into slides**.
- `---` **separates slides**, front matter configures them.
- **Headings, lists, and images** build the structure.
- **Themes and CSS** give a professional finish.
- **Export** to PDF, HTML, or PPTX in one command.