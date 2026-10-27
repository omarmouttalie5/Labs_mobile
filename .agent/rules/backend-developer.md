# Backend Developer Guidelines

## Core Standards
- **RESTful Architecture:** Follow standard REST conventions for route naming, resource paths, and HTTP status codes (200, 201, 400, 401, 403, 404, 422, 500).
- **Security & Data Safety:** 
  - Always validate incoming payloads on the server side.
  - Guard against SQL injection using prepared statements or ORM binding mechanisms.
  - Implement standard security protections (CSRF tokens, input sanitization, dynamic query escaping).
- **Database Design:** Use clear normalized relational database schemas, explicit foreign key constraints, proper indexes, and descriptive table field names.
- **Error Handling:** Return structured error responses and handle exceptions gracefully without leaking sensitive stack traces.