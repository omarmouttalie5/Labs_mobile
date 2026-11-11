# Create a Marp presentation (a single .md file with `marp: true` in the front matter) for a PHP lab.

LAB TASK
In this lab, I explore PHP concepts not yet covered in class. I must research, understand, and test the following concepts:
1. Error and exception handling: detecting and processing errors
2. Namespaces: organizing classes and avoiding name conflicts
3. Traits: sharing code across multiple classes
For each concept, explain its purpose and provide a practical example relevant to the technical project.

TECHNICAL PROJECT (for the examples)
A simple PHP web application with users and orders. Use classes such as User, Order, and Mailer, and a PDO database connection. [Replace with your own project if different.]

STRUCTURE (follow this order exactly)
1. Title slide (title, subtitle, student name, institution)
2. Introduction
3. Definition (a table defining the three concepts)
4. Plan (outline of the presentation)
5. Main body, in three parts:
   - Error and exception handling: errors vs exceptions (table), throwing a custom exception, try/catch/finally, global handlers (set_error_handler and set_exception_handler)
   - Namespaces: purpose, declaring them, using them with `use` and an alias, Composer PSR-4 autoloading
   - Traits: purpose, and a Loggable trait shared by User and Order
   - A final comparison table of the three concepts
6. Conclusion with three takeaways and "Thank you. Questions?"

CONTENT RULES
- One idea per slide, with short bullets.
- Code examples must be short (about 15 lines at most per slide), correct, and use PHP 8 syntax.
- Add a one-line explanation under each code block.
- Put a small uppercase label above each slide title (for example "04 · Main Body · Namespaces").

STYLE: dark, sharp, simple
- Background: near-black (#0a0c10) with a faint 40px grid pattern.
- Sharp look: square corners, no blur, no glass effects, thin 1px borders.
- A solid accent bar on the left edge of every slide (8px; 16px on the title and closing slides).
- Default accent: violet (#8b7cff). Give each concept its own accent color using slide classes: errors and exceptions in rose (#ff5d73), namespaces in teal (#2dd4bf), traits in amber (#fbbf24).
- Fonts: Inter for text and JetBrains Mono for labels and code (imported from Google Fonts, with Segoe UI and Consolas fallbacks).
- Tables: dark panel rows, a header row in a slightly lighter dark with accent-colored bold text and a 2px accent underline. Use `!important` on table, row, and cell backgrounds so the default theme's white rows cannot override them.
- Code blocks: dark panel (#0f131a), accent-colored left border, with syntax highlighting overridden for dark backgrounds (keywords light violet, strings green, comments grey italic, numbers amber, functions light blue).
- Title and closing slides: left-aligned, large title, with a subtle diagonal shape in the background, and a bordered info box for the student details.
- Pagination and a footer on all slides except the title and conclusion.

TECHNICAL CONSTRAINTS
- Plain Marp markdown with no raw HTML, so it works in the VS Code Marp extension, Marp CLI, and Marp for web.
- All CSS goes in the `style:` block, and slide variants use `<!-- _class: ... -->` directives (lead, err, ns, tr).
- Return the result as a downloadable .md file.