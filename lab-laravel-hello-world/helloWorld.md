# How to Create a "Hello World" Page in Laravel: Step-by-Step Guide

This guide will walk you through setting up a basic page that displays **"Hello World"** in a Laravel application.

---

## Prerequisites

Before starting, ensure you have the following installed on your system:
- **PHP** (v8.2 or higher recommended)
- **Composer** (PHP dependency manager)
- **Node.js & NPM** (optional, but recommended for frontend assets)

---

## Step 1: Create a New Laravel Project

If you don't already have a Laravel project set up, open your terminal or command prompt and run:

```bash
composer create-project laravel/laravel hello-world-app
```

Once the installation finishes, navigate into your project directory:

```bash
cd hello-world-app
```

---

## Step 2: Choose Your Approach

In Laravel, there are **two primary ways** to display a simple page:
1. **Direct Route Response** (Quickest for basic text)
2. **Route + View Template** (Standard approach using Blade templates)

---

### Option A: Direct Route Response (Quickest)

Open the file `routes/web.php` in your code editor. Add or modify a route to return the string directly:

```php
<?php

use Illuminate\Support\Facades\Route;

// Simple route returning "Hello World"
Route::get('/hello', function () {
    return 'Hello World';
});
```

---

### Option B: Route + Blade View (Recommended Approach)

Using a Blade view separates your routing logic from your HTML presentation layer.

#### 1. Create the View File
Create a new file named `hello.blade.php` inside the `resources/views/` directory:

```html
<!-- resources/views/hello.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World in Laravel</title>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f8fafc;
            color: #1e293b;
        }
        h1 {
            font-size: 3rem;
        }
    </style>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```

#### 2. Define the Route
Open `routes/web.php` and map a route to the newly created Blade view:

```php
<?php

use Illuminate\Support\Facades\Route;

// Route returning the 'hello' Blade view
Route::get('/hello', function () {
    return view('hello');
});
```

---

## Step 3: Run the Development Server

Start Laravel's built-in local development server by running:

```bash
php artisan serve
```

By default, the application will run at `http://127.0.0.1:8000`.

---

## Step 4: Test Your Page

Open your web browser and navigate to:

```text
http://127.0.0.1:8000/hello
```

You should now see **"Hello World!"** rendered on your screen.

---

## Summary

| Step | Action |
| :--- | :--- |
| **1** | Create/Navigate to project: `composer create-project laravel/laravel hello-world-app` |
| **2** | Add a route in `routes/web.php` pointing to a string or Blade view |
| **3** | Create `resources/views/hello.blade.php` (if using Blade) |
| **4** | Start server: `php artisan serve` |
| **5** | Visit `http://127.0.0.1:8000/hello` in your browser |