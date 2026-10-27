---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    background-color: #0F172A;
    color: #F8FAFC;
    font-family: 'Inter', system-ui, sans-serif;
    padding: 3rem 4rem;
  }
  
  h1 {
    font-size: 2.8rem;
    color: #38BDF8;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    color: #38BDF8;
    border-bottom: 2px solid #334155;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
  }

  p, li {
    font-size: 1.15rem;
    line-height: 1.6;
    color: #CBD5E1;
  }

  strong {
    color: #F43F5E;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    background: #1E293B;
    border-radius: 8px;
    overflow: hidden;
  }

  th {
    background-color: #334155;
    color: #38BDF8;
    padding: 0.75rem 1rem;
    text-align: left;
    font-size: 1.1rem;
  }

  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #334155;
    color: black;
    font-size: 1.05rem;
  }

  tr:last-child td {
    border-bottom: none;
  }
---

# Lab Planning

---

<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

<!-- _class: light -->

## Introduction

A need identified while building a blog can become a technical lab.

Each lab allows studying a part of the stack, testing a technique, or evaluating a library.

**Goal:** Start from a need and write a practical plan that the learner can execute and verify.

---

<!-- _class: light -->

## Problems Encountered

- A requirement that is too broad leads to a lab that is difficult to complete.
- Mixing the problem and the solution prevents understanding what actually needs to be solved.
- Using every technology in every exercise adds unnecessary complexity.
- Without a deliverable or criteria, it is difficult to verify success.

---

<!-- _class: light -->

## Solutions Implemented

To prepare a lab, define:

1. **The problem:** What needs to be solved for the blog?
2. **The solution:** What tasks must the learner perform and what steps should they follow?
3. **The technology:** What needs to be used, tested, or evaluated, and why?
4. **The validation:** What deliverable and criteria will demonstrate that the problem is solved?

---

## Problem or Solution?

**Problem:** Describes the need or difficulty without dictating how to solve it.

**Solution / Tasks to do:** Describes the concrete steps that will meet the need.

**Example:**

- Problem: Readers cannot comment on an article.
- Tasks: Add a form, validate the data, and save the comment.

---

## Blog Stack — Server and Data

| Technology | Example Lab |
| :--- | :--- |
| Laravel | Process a form |
| Native PHP | Study a PHP concept |
| MySQL | Save articles |
| JSON | Define an API response |

Choose only the technologies necessary for the lab.

---

## Blog Stack — Interfaces

| Technology | Example Lab |
| :--- | :--- |
| JavaScript | Call an API |
| Alpine.js | Add light interaction |
| Tailwind CSS | Style a page |
| Preline UI | Integrate a UI component |
| Kotlin | Consume the API from Android |

Preline UI provides UI components based on Tailwind CSS.

---

## Useful Definitions

- **Need:** Expected feature by a user of the blog.
- **Problem:** Precise difficulty preventing the need from being met.
- **Technical Lab:** Focused exercise that enables learning by completing a task.
- **Validation Criteria:** Observable result confirming that the work is finished.

---

## Example: Publish a Comment

**Need:** Readers must be able to react to an article.

**Problem:** A reader cannot publish a comment under an article.

**Tasks to do:**

1. Add a form to the article page.
2. Validate the data.
3. Save the comment using Laravel and MySQL.
4. Display the comment after submission.

---

## Technology and Expected Result

**Technologies:** Laravel and MySQL for server and storage; Blade, Tailwind CSS, and Preline UI to build the form and its components.

Add JavaScript or Alpine.js only if browser-side interaction is requested.

**Validation Criteria:**

- A valid comment is saved for the correct article;
- An empty field is rejected with a clear message;
- The published comment appears on the page.

---

## Your Turn to Practice

Choose a real need from the blog, such as searching articles or adding an image.

Complete this plan:

1. **Need:** Who needs what?
2. **Problem:** What is missing or not working?
3. **Tasks to do:** What steps will the learner follow?
4. **Technology:** Which one to use or evaluate, and why?
5. **Deliverable:** What must the learner produce?
6. **Validation:** How to check that the problem is resolved?

Keep a focused objective. Do not add a technology if it is not useful to the problem.

---

## Key Points to Remember

**Blog need → Clear problem → Solution steps → Adapted technology → Verifiable result**

A lab focuses on a limited objective: do not add the entire stack if it is not necessary.