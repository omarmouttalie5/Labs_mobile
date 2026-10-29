---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:wght@600;800&display=swap');

  section {
    background: #f3f1ea;
    color: #1f2a24;
    font-family: 'DM Sans', system-ui, sans-serif;
    font-size: 26px;
    padding: 56px 72px 56px 112px;
    position: relative;
  }
  /* vertical accent rail on the left */
  section::before {
    content: "";
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 36px;
    background: #0f5c4d;
  }
  section::after {
    color: #0f5c4d;
    font-weight: 700;
    font-size: 18px;
    right: 40px;
    bottom: 28px;
  }
  h1, h2, h3 {
    font-family: 'Fraunces', Georgia, serif;
    color: #0f5c4d;
    letter-spacing: -0.5px;
  }
  h2 {
    font-size: 1.7em;
    margin: 0 0 0.6em;
    padding-bottom: 0.25em;
    border-bottom: 4px solid #f2674a;
    display: inline-block;
  }
  h3 {
    font-size: 1.05em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #f2674a;
    margin-top: 0.4em;
  }
  a { color: #f2674a; font-weight: 700; }
  ul, ol { padding-left: 1.1em; }
  li { margin: 0.35em 0; }
  li::marker { color: #f2674a; }
  code {
    background: #dfe9e4;
    color: #0b3d33;
    border-radius: 4px;
    padding: 0 6px;
  }
  pre {
    background: #12332c;
    border-left: 8px solid #f2674a;
    border-radius: 0 8px 8px 0;
    padding: 14px 20px;
  }
  pre code { background: transparent; color: #e8f3ee; padding: 0; }

  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
  .card {
    background: #ffffff;
    border: 2px solid #0f5c4d;
    border-radius: 14px;
    padding: 8px 28px;
  }

  /* dark variant for opening and closing slides */
  section.dark {
    background: #0f2a25;
    color: #eef5f1;
  }
  section.dark::before { background: #f2674a; }
  section.dark::after { color: #f2674a; }
  section.dark h1, section.dark h2 { color: #ffffff; }
  section.dark h2 { border-color: #f2674a; }
  section.dark li::marker { color: #f2674a; }

  /* title slide */
  section.title { justify-content: center; }
  section.title h1 { font-size: 3.6em; margin: 0; }
  section.title p { font-size: 1.1em; color: #9fc4b8; margin-top: 0.2em; }
---

<!-- _class: dark title -->
<!-- _paginate: false -->

# Markdown

A hands-on lab in plain-text formatting

---

## Agenda

<div class="cols">
<div class="card">

1. Introduction
2. Challenges Encountered
3. Solutions Applied

</div>
<div>

### Then, the syntax tour

Headings, lists, links, images, and code blocks, followed by the key takeaways.

</div>
</div>

---

## Introduction

<div class="cols">
<div>

### What is Markdown?

Markdown is a lightweight markup language that lets you format text using a simple, readable syntax.

</div>
<div class="card">

### Lab Goals

- Organize a document with headings and paragraphs.
- Style text and build lists.
- Add links, images, and code.
- Produce a file that is easy to read and share.

</div>
</div>

---

## Challenges Encountered

This introductory exercise raised no major blockers, but a few common mistakes are worth watching for:

<div class="cols">
<div class="card">

- Forgetting the space after the `#` in a heading.
- Mixing indentation styles in a nested list.

</div>
<div class="card">

- Leaving out the fences around a code block.
- Using a wrong file path or weak alt text for an image.

</div>
</div>

---

## Solutions Applied

<div class="cols">
<div>

- Put a space after the heading symbols: `## My Heading`.
- Indent sub-lists consistently, ideally with two spaces.
- Wrap code in triple backticks and name the language.

</div>
<div>

- Double-check the image path and write a meaningful description.
- Preview the file to confirm the final result.

</div>
</div>

---

## Headings and Text

The number of `#` symbols sets the heading level. Use the levels in order to keep your structure clear.

<div class="cols">
<div>

````markdown
# Main Title
## Section
### Subsection
````

</div>
<div>

````markdown
**Bold text**
*Italic text*
***Bold and italic***
````

</div>
</div>

Markdown also handles basic text styling, as shown on the right.

---

## Lists

<div class="cols">
<div>

### Unordered

````markdown
- HTML
- CSS
- JavaScript
````

</div>
<div>

### Ordered and nested

````markdown
1. Prepare the document
2. Add the content

- Frontend
  - HTML
  - CSS
````

</div>
</div>

---

## Links and Images

A link pairs descriptive text with an address:

````markdown
[Markdown Guide](https://www.markdownguide.org/)
````

An image follows a similar syntax, with alternative text. The path can be relative to the Markdown file.

````markdown
![Description of the image](images/example.jpg)
````

---

## Code Blocks

Triple backticks mark off a code block. Naming the language turns on syntax highlighting in supporting tools.

<div class="cols">
<div>

### You write

````markdown
```javascript
console.log("Hello World");
```
````

</div>
<div>

### It renders

````javascript
console.log("Hello World");
````

</div>
</div>

---

<!-- _class: dark -->

## Key Takeaways

- Markdown keeps documents quick to write and easy to review.
- Consistent syntax improves readability and prevents rendering glitches.
- Headings, lists, links, images, and code blocks cover the essentials.
- Previewing your work lets you catch problems before sharing.