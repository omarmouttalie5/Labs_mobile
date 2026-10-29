# Skill: Laravel CRUD Generator

## Goal
Structure and generate complete, production-ready Laravel CRUD components following clean architecture and security best practices.

## Trigger Phrase / Usage
"Use laravel-crud skill to generate CRUD for [Resource Name]"

## Workflow Steps
1. **Migration & Schema:** Create migration file definitions with explicit data types, nullable attributes, and foreign key constraints.
2. **Eloquent Model:** Define mass-assignable properties (`$fillable`), casts, and relationship methods (`hasMany`, `belongsTo`, etc.).
3. **Form Request Validation:** Build dedicated request validation classes (`StoreResourceRequest`, `UpdateResourceRequest`) with detailed validation rules.
4. **Resource Controller:** Implement standard controller methods (`index`, `create`, `store`, `show`, `edit`, `update`, `destroy`) utilizing Form Requests and Blade view renders or JSON API responses.
5. **Routes Definition:** Output RESTful resource routes (`Route::resource(...)` or explicit endpoint mappings).

## Output Structure Guidelines
- Keep controllers thin by offloading validation to Form Request classes.
- Wrap multi-table database operations inside `DB::transaction()`.
- Use named routes and route model binding (`Resource $resource`).