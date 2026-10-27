# Skill: Technical Lab Creator

## Goal
Facilitate the creation, breakdown, and structuring of targeted technical labs from application requirements.

## Trigger Phrase / Usage
"Use lab-creator skill to build a lab for [Feature/User Need]"

## Workflow Blueprint
1. **Define User Need & Core Problem:** Identify the specific feature requirement and technical barrier.
2. **Establish Execution Steps:** List logical, step-by-step implementation tasks.
3. **Select Minimal Tech Stack:** Choose strictly the technologies necessary for the lab.
4. **Draft Acceptance Criteria:** Define clear, testable verification conditions.

## Output Format Template
```markdown
### Technical Lab: [Lab Title]

#### 1. Context & Objective
- **User Need:** [Who needs what functionality?]
- **Core Problem:** [What exact technical friction needs to be solved?]

#### 2. Implementation Roadmap
1. [Step 1: Interface / Route Setup]
2. [Step 2: Validation & Business Logic]
3. [Step 3: Data Storage / Integration]
4. [Step 4: Response / Render Output]

#### 3. Technology Stack
- **Backend / DB:** [e.g., Laravel / MySQL]
- **Frontend / UI:** [e.g., Blade / Tailwind CSS]

#### 4. Deliverable & Acceptance Criteria
- **Deliverable:** [Target artifact or files]
- **Criteria:**
  - [ ] Valid inputs produce the expected persistent change or output.
  - [ ] Invalid data returns clear error handling messages.
  - [ ] Output correctly renders on the interface.