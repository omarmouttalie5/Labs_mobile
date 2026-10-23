---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&family=Sora:wght@600;800&display=swap');

  section {
    background: #fafaf9;
    color: #1c1917;
    font-family: 'Manrope', system-ui, sans-serif;
    font-size: 25px;
    padding: 60px 80px 60px 96px;
    border-left: 20px solid #be123c;
  }
  section::after {
    color: #be123c;
    font-weight: 700;
    font-size: 18px;
  }
  h1, h2, h3 {
    font-family: 'Sora', sans-serif;
    color: #0f172a;
  }
  h2 {
    font-size: 1.55em;
    margin: 0 0 0.7em;
  }
  h2::before {
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 14px;
    background: #be123c;
    border-radius: 50%;
  }
  h3 {
    color: #be123c;
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 0.3em;
  }
  strong { color: #be123c; }
  li { margin: 0.35em 0; }
  li::marker { color: #be123c; }
  code {
    background: #ffe4e6;
    color: #9f1239;
    border-radius: 4px;
    padding: 0 6px;
  }
  pre {
    background: #0f172a;
    border-radius: 12px;
    padding: 14px 22px;
    font-size: 0.8em;
  }
  pre code { background: transparent; color: #e2e8f0; padding: 0; }

  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; align-items: start; }
  .card {
    background: #ffffff;
    border: 2px solid #e7e5e4;
    border-top: 6px solid #be123c;
    border-radius: 12px;
    padding: 4px 24px 8px;
  }
  .card h3 { margin-top: 0.5em; }
  .bad { border-top-color: #78716c; }
  .bad h3 { color: #57534e; }

  /* dark slides */
  section.dark {
    background: #0f172a;
    color: #e2e8f0;
    border-left-color: #fb7185;
  }
  section.dark h1, section.dark h2 { color: #ffffff; }
  section.dark h2::before { background: #fb7185; }
  section.dark strong { color: #fda4af; }
  section.dark li::marker { color: #fb7185; }
  section.dark::after { color: #fb7185; }

  /* title slide */
  section.title { justify-content: center; }
  section.title h1 { font-size: 3.6em; margin: 0; line-height: 1.1; }
  section.title p { font-size: 1.1em; color: #fda4af; margin-top: 0.4em; }
---

<!-- _class: dark title -->
<!-- _paginate: false -->

# Writing a Clear Prompt

Ask an AI exactly what you need

---

## Agenda

<div class="cols">
<div class="card">

1. Why clarity matters
2. The four building blocks
3. Writing the prompt
4. Testing and refining

</div>
<div>

### Goal

Turn a vague request into a prompt an AI agent can act on in one try.

</div>
</div>

---

## Why Clarity Matters

An AI can only work with what you give it. Missing details get filled with guesses.

<div class="cols">
<div class="card bad">

### Vague

> Write something about our app launch.

Unclear audience, format, and length.

</div>
<div class="card">

### Precise

> Write a 100-word announcement of our app launch for existing customers, in a friendly tone.

One read, one result.

</div>
</div>

---

## The Four Building Blocks

<div class="cols">
<div class="card">

### 1. Context
Who you are and the situation.

### 2. Objective
The single task to accomplish.

</div>
<div class="card">

### 3. Instructions
The rules, steps, and constraints.

### 4. Expected outcome
The format and quality of the result.

</div>
</div>

---

## Context and Objective

<div class="cols">
<div class="card">

### Context

- Your role and audience
- Background the AI cannot guess
- Relevant data or constraints

*"I manage support for a small online bookstore."*

</div>
<div class="card">

### Objective

- **One** clear task
- Start with an action verb
- Say what success looks like

*"Draft a reply to a customer whose order arrived late."*

</div>
</div>

---

## Instructions and Expected Outcome

<div class="cols">
<div class="card">

### Instructions

- List rules as short points
- Say what to include **and** avoid
- Set tone, length, and language

*"Apologize once. Offer a 10% coupon. No jargon."*

</div>
<div class="card">

### Expected outcome

- Name the **format**
- Give the length or structure
- Add an example if useful

*"A 3-paragraph email with a subject line."*

</div>
</div>

---

## A Complete Prompt

```text
CONTEXT
I manage support for a small online bookstore.

OBJECTIVE
Draft a reply to a customer whose order arrived a week late.

INSTRUCTIONS
Apologize once, explain the delay briefly, offer a 10% coupon.
Keep a warm, professional tone. Avoid jargon.

EXPECTED OUTCOME
An email under 150 words, with a subject line.
```

---

## Test and Refine

<div class="cols">
<div>

1. **Write** the first version
2. **Run** it with an AI agent
3. **Compare** the result to your goal
4. **Adjust** one thing at a time
5. **Repeat** until it is reliable

</div>
<div class="card">

### Ask yourself

- Is anything missing or misread?
- Is the format what I wanted?
- Does it work on a second, different input?

</div>
</div>

---

## Common Mistakes

<div class="cols">
<div class="card bad">

- Asking for several tasks at once
- Leaving out the audience
- Using vague words like "good"

</div>
<div class="card">

### Fixes

- Split big tasks into steps
- State who the result is for
- Give measurable criteria

</div>
</div>

---

<!-- _class: dark -->

## Key Takeaways

- A good prompt is **clear, specific, and complete**.
- Use four blocks: **context, objective, instructions, expected outcome**.
- One prompt, **one task**.
- **Test and refine** with an AI agent, changing one thing at a time.