Create a well-structured Marp presentation (a single .md file with `marp: true` in the front matter) on the subject of project management, with a professional layout and visually appealing colors.

STRUCTURE (follow this order exactly):
1. Title slide
2. Introduction
3. Plan (outline of the contents)
4. Definition
5. Problematic
6. Solutions
7. Conclusion

CONTENT GUIDELINES:
- Definition: define "project" and "project management", then present the core elements (scope, time, cost, quality, stakeholders).
- Problematic: state the central question, then list the common causes of project failure (unclear objectives, scope creep, poor communication, weak risk management, unrealistic estimates, low stakeholder engagement) and their impact.
- Solutions: cover the project lifecycle, a comparison of Waterfall / Agile / Hybrid, practices and tools (WBS, Gantt, Kanban, RACI, risk register, change control), and a final table mapping each problem to its solution.
- Conclusion: three key takeaways and a closing line.
- Use short bullet points, tables, and one blockquote for emphasis. Do not use statistics you cannot verify.

DESIGN REQUIREMENTS:
- Color palette: navy (#0f1f3d, #1b3358) as the main color, teal (#14b8a6) as the primary accent, and amber (#f59e0b) as a secondary accent.
- Font: Inter (imported from Google Fonts) with Segoe UI/Helvetica/Arial fallbacks.
- Title and conclusion slides: dark navy gradient background, white text, amber left border.
- Content slides: light background (#f8fafc), teal left border, navy headings, a small uppercase teal section label above each title (for example "03 · Definition").
- Problematic slides: use an amber accent instead of teal so the problem stands out.
- Tables: navy header row, white text, zebra-striped rows.
- Blockquotes: amber left border with a light amber background.
- Enable page numbers (paginate: true) and a footer, but hide them on the title and conclusion slides.
- Use two-column bullet layouts for slides with long lists.

TECHNICAL CONSTRAINTS:
- Use plain Marp markdown only, with no raw HTML, so it works in the VS Code Marp extension, Marp CLI, and Marp for web.
- Put all CSS in the `style:` block of the front matter, and use `<!-- _class: ... -->` directives for slide variants (lead, problem, cols).
- Keep it to about 12 slides, with one idea per slide and no overloaded slides.
- Return the result as a downloadable .md file.