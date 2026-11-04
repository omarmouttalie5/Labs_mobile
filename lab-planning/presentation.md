---
marp: true
theme: default
paginate: true
size: 16:9
footer: 'Lab Planning'
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  /* ===== Palette: #e0aaff (primary) · #240046 (secondary) + light tints ===== */
  :root {
    --primary: #e0aaff;
    --secondary: #240046;
    --paper: #a182b8;
  }

  /* ---------- Base layout: dark title band on top + card content below ---------- */
  section {
    font-family: 'Inter', 'Segoe UI', Roboto, Arial, sans-serif;
    font-size: 24px;
    color: var(--secondary);
    background: var(--paper);
    padding: 185px 70px 70px 70px;
    justify-content: flex-start;
  }
  section::before {
    content: '';
    position: absolute;
    left: 0; right: 0; top: 0;
    height: 148px;
    box-sizing: border-box;
    background: var(--secondary);
    border-bottom: 8px solid var(--primary);
  }

  /* Slide title sits inside the band */
  section h1 {
    position: absolute;
    top: 0; left: 70px; right: 190px;
    height: 140px;
    margin: 0;
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 1.65em;
    font-weight: 800;
  }

  /* Page number badge inside the band */
  section::after {
    top: 46px; bottom: auto; right: 70px;
    width: 48px; height: 48px; line-height: 48px;
    padding: 0;
    border-radius: 50%;
    background: var(--primary);
    color: var(--secondary);
    text-align: center;
    font-size: 22px;
    font-weight: 800;
  }

  section footer {
    left: 70px; bottom: 26px;
    color: var(--secondary);
    opacity: 0.6;
    font-size: 0.55em;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  /* Sub-headings become small labels */
  section h2 {
    display: inline-block;
    margin: 0 0 12px 0;
    padding-bottom: 4px;
    border-bottom: 3px solid var(--primary);
    color: var(--secondary);
    font-size: 0.85em;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  /* ---------- Content styling ---------- */
  p { margin: 6px 0 14px 0; }
  strong { color: var(--secondary); font-weight: 800; }
  ul { padding-left: 1.1em; line-height: 1.45; }
  li { margin: 8px 0; }
  li::marker { color: var(--secondary); }

  /* Callout box */
  blockquote {
    background: var(--primary);
    border-left: 8px solid var(--secondary);
    border-radius: 0 14px 14px 0;
    margin: 20px 0 0 0;
    padding: 12px 24px;
    font-size: 0.95em;
  }
  blockquote p { margin: 4px 0; }
  code {
    background: var(--secondary);
    color: var(--primary);
    border-radius: 5px;
    padding: 1px 8px;
  }

  /* Card grid: turns a list into two columns of cards */
  section.grid ul,
  section.grid ol {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    padding: 0;
    margin: 0;
    list-style: none;
    counter-reset: n;
    line-height: 1.3;
  }
  section.grid li {
    margin: 0;
    background: #ffffff;
    border-left: 8px solid var(--primary);
    border-radius: 12px;
    padding: 12px 18px;
    font-size: 0.9em;
    box-shadow: 0 3px 0 rgba(36, 0, 70, 0.08);
  }
  section.grid li strong { font-size: 1.05em; }
  section.grid ol li {
    counter-increment: n;
    position: relative;
    padding-left: 72px;
  }
  section.grid ol li::before {
    content: counter(n, decimal-leading-zero);
    position: absolute;
    left: 14px; top: 50%;
    transform: translateY(-50%);
    width: 42px; height: 42px; line-height: 42px;
    text-align: center;
    background: var(--secondary);
    color: var(--primary);
    border-radius: 50%;
    font-size: 0.85em;
    font-weight: 800;
  }
  /* Compact grid (steps) */
  section.grid.steps li { padding-top: 9px; padding-bottom: 9px; }

  /* ---------- Cover slide: diagonal split ---------- */
  section.cover {
    background: linear-gradient(115deg, var(--secondary) 0 63%, var(--primary) 63% 100%);
    color: var(--paper);
    padding: 70px 80px 70px 90px;
    justify-content: center;
  }
  section.cover::before {
    top: 0; left: 0; right: 0; height: 100%;
    border: none;
    background:
      radial-gradient(circle at 87% 30%, rgba(36,0,70,0.92) 0 120px, transparent 121px),
      radial-gradient(circle at 93% 84%, rgba(36,0,70,0.14) 0 210px, transparent 211px);
  }
  section.cover h1 {
    position: static;
    display: block;
    height: auto;
    max-width: 640px;
    margin: 0 0 6px 0;
    color: #ffffff;
    font-size: 2.7em;
    line-height: 1.05;
  }
  section.cover h2 {
    display: block;
    max-width: 620px;
    margin: 0 0 14px 0;
    padding: 0;
    border: none;
    color: var(--primary);
    font-size: 1.4em;
    letter-spacing: 0;
    text-transform: none;
    font-weight: 700;
  }
  section.cover h3 {
    max-width: 560px;
    margin: 0 0 34px 0;
    color: #e9d5ff;
    font-size: 0.9em;
    font-weight: 400;
    line-height: 1.4;
  }
  section.cover p { max-width: 560px; margin: 0; font-size: 0.85em; line-height: 1.7; }
  section.cover strong { color: var(--primary); }

  /* ---------- Closing slide ---------- */
  section.closing {
    background: var(--secondary);
    color: var(--paper);
    padding: 70px 120px 70px 110px;
    justify-content: center;
  }
  section.closing::before {
    top: 0; left: 0; right: 0; height: 100%;
    border: none;
    background:
      radial-gradient(circle at 93% 84%, rgba(224,170,255,0.22) 0 220px, transparent 221px),
      radial-gradient(circle at 94% 20%, var(--primary) 0 60px, transparent 61px),
      linear-gradient(90deg, var(--primary) 0 16px, transparent 16px);
  }
  section.closing h1 {
    position: static;
    display: block;
    height: auto;
    margin: 0 0 24px 0;
    color: var(--primary);
    font-size: 2.6em;
  }
  section.closing p { max-width: 820px; font-size: 1.1em; line-height: 1.55; }
  section.closing strong { color: var(--primary); }
  section.closing footer { color: var(--primary); }
  section.closing::after { display: none; }
---

<!-- _class: cover -->
<!-- _paginate: false -->
<!-- _footer: '' -->

# Lab Planning

## Standardizing Labs

### A methodological guide to organizing and presenting Labs

**Prepared by:** Omar Mouttalie 
**Supervised by:** ES-Saraj Fouad  
**Center:** Solicode Tangier  
**Institution:** OFPPT

---

<!-- _class: grid -->

# Presentation Plan

1. **Introduction and context**  
   Presentation of the Lab Planning and its goal.
2. **Technical stack**  
   The technologies and tools used.
3. **Definitions**  
   Explanation of the important concepts.
4. **Problem and need**  
   The difficulties and the needs identified.
5. **Solution and implementation**  
   The method and how it is applied.
6. **Results and conclusion**  
   The results and what was learned.

---

# Technical Stack

Technologies and tools used in the Lab.

> **Technologies**  
> To be completed.

---

<!-- _class: grid -->

# Key Definitions

- **Lab**  
  Hands-on work to learn, experiment and apply knowledge.
- **Technical Lab**  
  Focused on installing, configuring and using a technology.
- **Methodological Lab**  
  Focused on organizing, planning and applying a method.
- **Quick Start**  
  A short guide to start and set up an environment.
- **Hello World**  
  A first simple example that checks the technology works.
- **Template**  
  A reusable model that guarantees a common structure.

---

# Problem and Need

## Problem

Lab presentations sometimes lack a common structure and consistency.

- Each learner uses a different structure.
- Some important concepts are not defined.
- The problem and the need of the Lab are not always explained.
- Some technical Labs have no Quick Start or Hello World.
- The difference between a technical and a methodological Lab is not always clear.

> **Need:** set up a **simple, common and adaptable plan** to improve the quality and understanding of Lab presentations.

---

<!-- _class: grid steps -->

# Solution and Implementation

## Proposed solution

Create a standard plan of **7 slides**, adaptable to every type of Lab.

## Work steps

1. Present the Lab and its objective.
2. Define the parts of the presentation.
3. Identify the technologies and tools used.
4. Explain the important concepts.
5. Present the problem and the need.
6. Describe the solution and the practical steps.
7. Present the results and the conclusion.

---

<!-- _class: grid -->

# Adapting to the Lab Type

- **Technical Lab**  
  Quick Start, installation, configuration and a working Hello World.
- **Methodological Lab**  
  Rules, processes, templates and concrete deliverables.

> **Key idea:** the 7-slide structure stays the same. Only the content changes with the type of Lab.

---

# Results and Conclusion

## Expected results

- A common plan for Lab presentations.
- A clear structure that is easy to reuse.
- A plan adapted to technical and methodological Labs.
- Better understanding and organization of presentations.

> **Expected deliverable:** `template-lab.md`  
> A standard template to use for future presentations.

---

<!-- _class: closing -->
<!-- _paginate: false -->
<!-- _footer: '' -->

# Conclusion

Standardization saves time, improves the quality of presentations and makes it easier for learners to share knowledge.

**Next step:** add the template to the project's GitHub repository.