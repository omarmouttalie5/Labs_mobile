---
marp: true
theme: default
paginate: true
footer: "Project Management"
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
  :root {
    --cyan: #22d3ee;
    --cyan-soft: #a5f3fc;
    --violet: #a78bfa;
    --violet-soft: #c4b5fd;
    --rose: #fb7185;
    --amber: #fbbf24;
    --text: #e2e8f0;
    --muted: #94a3b8;
    --glass: rgba(255, 255, 255, 0.06);
    --glass-strong: rgba(255, 255, 255, 0.10);
    --glass-border: rgba(255, 255, 255, 0.15);
  }

  /* ---------- Base ---------- */
  section {
    font-family: 'Inter', 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 26px;
    padding: 64px 80px 64px 92px;
    color: var(--text);
    background:
      radial-gradient(ellipse 55% 60% at 10% 8%, rgba(99, 102, 241, 0.38), transparent 70%),
      radial-gradient(ellipse 50% 55% at 92% 92%, rgba(20, 184, 166, 0.30), transparent 70%),
      radial-gradient(ellipse 40% 45% at 88% 6%, rgba(236, 72, 153, 0.18), transparent 70%),
      linear-gradient(135deg, #060a18 0%, #0b1130 55%, #07101f 100%);
  }
  section::before {
    content: "";
    position: absolute; left: 0; top: 0; bottom: 0; width: 10px;
    background: linear-gradient(180deg, var(--cyan), var(--violet));
    box-shadow: 0 0 24px rgba(34, 211, 238, 0.55);
  }

  h1 {
    color: #f8fafc; font-weight: 800; font-size: 1.7em; margin-bottom: 0.4em;
    text-shadow: 0 0 28px rgba(103, 232, 249, 0.35);
  }
  h2 {
    color: var(--cyan); font-weight: 600; font-size: 0.85em;
    letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.2em;
  }
  strong { color: var(--cyan-soft); }
  em { color: var(--muted); }
  footer, section::after { color: #64748b; font-size: 0.5em; background: none; }

  /* ---------- Lists as glass panels ---------- */
  ul, ol {
    line-height: 1.6;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 18px;
    padding: 22px 32px 22px 56px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.10);
  }
  li::marker { color: var(--cyan); font-weight: 700; }

  /* ---------- Tables as glass cards ---------- */
  section table {
    display: table;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 0.78em;
    margin-top: 0.5em;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 18px;
    overflow: hidden;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.10);
  }
  section table thead,
  section table tbody,
  section table tr {
    background: transparent !important;
    border: 0 !important;
  }
  section table th {
    background: linear-gradient(90deg, rgba(34, 211, 238, 0.38), rgba(167, 139, 250, 0.38)) !important;
    color: #ffffff !important;
    padding: 13px 16px;
    text-align: left;
    border: 0 !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25) !important;
    font-weight: 800;
    letter-spacing: 0.02em;
  }
  section table th strong { color: #ffffff !important; }
  section table td {
    background: transparent !important;
    color: var(--text) !important;
    padding: 11px 16px;
    border: 0 !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }
  section table tr:last-child td { border-bottom: 0 !important; }
  section table tr:nth-child(even) td { background: rgba(255, 255, 255, 0.05) !important; }
  section table td strong { color: #ffffff !important; }

  /* ---------- Quote as glass highlight ---------- */
  blockquote {
    margin: 1em 0;
    padding: 14px 26px;
    background: var(--glass-strong);
    border: 1px solid var(--glass-border);
    border-left: 5px solid var(--violet);
    border-radius: 14px;
    color: #f1f5f9;
    font-style: italic;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
  }
  blockquote p { margin: 0.2em 0; }

  /* ---------- Title & closing ---------- */
  section.lead {
    display: flex; flex-direction: column; justify-content: center;
    background:
      radial-gradient(ellipse 60% 70% at 15% 15%, rgba(124, 58, 237, 0.50), transparent 70%),
      radial-gradient(ellipse 55% 60% at 90% 85%, rgba(6, 182, 212, 0.40), transparent 70%),
      radial-gradient(ellipse 35% 40% at 80% 10%, rgba(236, 72, 153, 0.25), transparent 70%),
      linear-gradient(135deg, #050816 0%, #0a0f2c 55%, #060b1c 100%);
  }
  section.lead::before {
    background: linear-gradient(180deg, var(--violet), var(--cyan));
    box-shadow: 0 0 28px rgba(167, 139, 250, 0.6);
  }
  section.lead h1 { font-size: 2.3em; }
  section.lead h2 { color: var(--violet-soft); font-size: 1em; }
  section.lead strong { color: var(--violet-soft); }
  section.lead p { color: #cbd5e1; }
  section.lead p:last-of-type {
    align-self: flex-start;
    margin-top: 1.1em;
    padding: 16px 30px;
    font-size: 0.82em;
    line-height: 1.7;
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 18px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }
  section.lead footer, section.lead::after { color: #64748b; }

  /* ---------- Problem slides (warm accent) ---------- */
  section.problem::before {
    background: linear-gradient(180deg, var(--amber), var(--rose));
    box-shadow: 0 0 24px rgba(251, 113, 133, 0.55);
  }
  section.problem h2 { color: var(--amber); }
  section.problem li::marker { color: var(--amber); }
  section.problem blockquote { border-left-color: var(--amber); }
  section.problem table th {
    background: linear-gradient(90deg, rgba(251, 191, 36, 0.38), rgba(251, 113, 133, 0.38)) !important;
    color: #ffffff !important;
  }
  section.problem table th strong { color: #ffffff !important; }

  /* ---------- Two-column lists ---------- */
  section.cols ul { columns: 2; column-gap: 56px; }
  section.cols li { break-inside: avoid; }
---

<!-- _class: lead -->
<!-- _paginate: false -->
<!-- _footer: "" -->

## Management Series

# Project Management

From **challenges** to **solutions**: delivering projects that succeed



**Student Name:** Omar Mouttalie
**Supervisor:** ES-SARRAJ Fouad
**Institution:** OFPPT / Solicode  

---

## 01 · Introduction

<!-- notes:
 “Organizations run on projects, and without structure even strong ideas fail to reach the finish line.”
  -->

# Why Project Management Matters

- Organizations run on **projects**: products, systems, events, transformations
- Each one faces limited **time, budget, and resources**
- Without structure, even strong ideas fail to reach the finish line
- Project management turns **ambition into delivered results**

> Good projects don't happen by chance. They are managed.

---

## 02 · Plan

# Outline of the Presentation

<!-- notes:
 “We’ll go through the definition, the problems projects face, the solutions, and a conclusion.”
  -->

1. **Introduction** — why the topic matters
2. **Definition** — what project management is
3. **Problematic** — why projects struggle
4. **Solutions** — how to manage projects effectively
5. **Conclusion** — key takeaways

---

## 03 · Definition

# What Is Project Management?

<!-- notes:
 “Project management is the application of knowledge, skills, tools, and techniques to project activities to meet project requirements.”
  -->

The application of **knowledge, skills, tools, and techniques** to project activities in order to meet project requirements.

- A **project**: a temporary effort with a defined start, end, and unique result
- **Project management**: planning, organizing, and controlling that effort
- Goal: deliver within agreed **scope, time, and cost**

---

## 03 · Definition

# Core Elements

<!-- notes:
 “Scope, time, cost, quality, and stakeholders are linked, so a change in one affects the others.”
  -->


| Element | Description |
|---|---|
| **Scope** | What must be delivered |
| **Time** | The schedule and milestones |
| **Cost** | The budget and resources |
| **Quality** | The standard the result must meet |
| **Stakeholders** | People affected by or influencing the project |

Balancing these elements is the heart of the discipline.

---

<!-- _class: problem -->

## 04 · Problematic

# Why Do Projects Struggle?

<!-- notes:
 Why Do Projects Struggle?: “The question is how to deliver on time and on budget despite uncertainty and complexity.”
  -->

> **How can organizations deliver projects on time, on budget, and in line with expectations despite uncertainty and complexity?**

Many projects still end with **delays, overruns, or unmet needs**.

---

<!-- _class: problem -->

## 04 · Problematic

# Common Causes of Failure


<!-- notes:
 Common Causes of Failure: “Most failures come from predictable causes like unclear objectives, scope creep, and poor communication.”
  -->

| Challenge | Impact |
|---|---|
| **Unclear objectives** | Teams build the wrong thing |
| **Scope creep** | Uncontrolled growth in work and cost |
| **Poor communication** | Misalignment and rework |
| **Weak risk management** | Surprises derail the plan |
| **Unrealistic estimates** | Missed deadlines, budget overruns |
| **Low stakeholder engagement** | Resistance and lost support |

---

## 05 · Solutions

# A Structured Lifecycle

<!-- notes:
 A Structured Lifecycle: “Every project goes through five phases, initiate, plan, execute, monitor and control, and close.”
  -->

1. **Initiate** — define purpose, goals, and success criteria
2. **Plan** — scope, schedule, budget, resources, risks
3. **Execute** — build deliverables and lead the team
4. **Monitor & control** — track progress and manage change
5. **Close** — hand over, evaluate, and capture lessons learned

*Addresses: unclear objectives, unrealistic estimates, scope creep*

---

## 05 · Solutions

# Choose the Right Methodology

<!-- notes:
 Choose the Right Methodology: “Waterfall suits stable projects, Agile suits changing ones, and Hybrid combines both, so we choose according to uncertainty.”
  -->

| | **Waterfall** | **Agile** | **Hybrid** |
|---|---|---|---|
| **Approach** | Sequential phases | Iterative sprints | Planned + iterative |
| **Best for** | Stable, well-defined scope | Evolving requirements | Complex, mixed projects |
| **Change** | Formal control | Embraced | Managed |

Fit the method to the project's **level of uncertainty**.

---

<!-- _class: cols -->

## 05 · Solutions

# Practices & Tools

<!-- notes:
 Practices & Tools: “Tools like the Gantt chart, the RACI matrix, and the risk register help teams stay organized and in control.”
  -->

- **WBS** to break scope into manageable work
- **Gantt charts** to visualize schedules
- **Kanban boards** to track work in progress
- **RACI matrix** to clarify roles
- **Risk register** to anticipate threats
- **Regular reporting** to keep stakeholders informed
- **Change control** to contain scope creep
- **Retrospectives** to keep improving

---

## 05 · Solutions

# Mapping Problems to Solutions

<!-- notes:
 Mapping Problems to Solutions: “Each problem has a direct answer, for example scope creep is handled by formal change control.”
  -->

| Problem | Solution |
|---|---|
| Unclear objectives | Charter and success criteria |
| Scope creep | Formal change control |
| Poor communication | Communication plan, regular meetings |
| Weak risk management | Risk register and regular reviews |
| Unrealistic estimates | Bottom-up estimates with contingency |
| Low engagement | Stakeholder analysis and early involvement |

---

## 05 · Solutions

# Application: A Weekend Student Trip

<!-- notes:
 Application: A Weekend Student Trip: “Even a simple student trip follows the same phases: agree on the goal, plan the budget and tasks, follow the schedule, track spending, and review afterwards.”
  -->

| Phase | What the students do |
|---|---|
| **Initiate** | Agree on the destination, dates, group size, and a shared goal |
| **Plan** | Set a budget per person, book transport, make a gear and food checklist, assign tasks |
| **Execute** | Follow the schedule, check the weather, adjust the route if needed |
| **Monitor** | Track spending, keep the group informed in a chat, stop extra plans that break time or budget |
| **Close** | Split the final costs fairly and note what to improve next time |

---

<!-- _class: lead -->
<!-- _footer: "" -->

## 06 · Conclusion

# Plan Well. Communicate Openly. Adapt Quickly.

<!-- notes:
 Conclusion: “Plan well, communicate openly, and adapt quickly, thank you for listening.”
  -->

- Project management is a **discipline**, not an afterthought
- Most failures come from **predictable, preventable** causes
- A clear lifecycle, the right method, and strong communication make success repeatable

**Thank you. Questions?**