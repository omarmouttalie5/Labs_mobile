# How to Create a Categories Table and Display Categories in Laravel

This guide provides a step-by-step tutorial on how to create a `categories` database table using migrations, set up a Eloquent Model, seed sample data, and display the categories list on a web page using Laravel.

---

## Prerequisites

* A working Laravel installation.
* A database configured in your `.env` file (`DB_CONNECTION`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`).

---

## Step 1: Create Model and Migration

Laravel provides an `artisan` command that generates both the Eloquent Model and the database migration at the same time.

Run the following command in your terminal:

```bash
php artisan make:model Category -m
```

* **Model Created:** `app/Models/Category.php`
* **Migration Created:** `database/migrations/YYYY_MM_DD_HHMMSS_create_categories_table.php`

---

## Step 2: Define the Database Schema

Open the generated migration file located in `database/migrations/` and define the columns for your `categories` table inside the `up()` method.

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique()->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
```

Run the migration to create the table in your database:

```bash
php artisan migrate
```

---

## Step 3: Configure Fillable Properties on the Model

Open `app/Models/Category.php` and specify which fields can be mass-assigned:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'slug',
        'description',
    ];
}
```

---

## Step 4: Seed Sample Data (Optional but Recommended)

To quickly populate your table with sample categories, create a database seeder or use tinker.

### Option A: Using Artisan Tinker (Quickest)

Open Tinker:
```bash
php artisan tinker
```

Execute these commands inside Tinker:
```php
\App\Models\Category::create(['name' => 'Technology', 'slug' => 'technology', 'description' => 'Gadgets and Tech news']);
\App\Models\Category::create(['name' => 'Health & Fitness', 'slug' => 'health-fitness', 'description' => 'Tips for healthy living']);
\App\Models\Category::create(['name' => 'Education', 'slug' => 'education', 'description' => 'Learning resources']);
exit
```

### Option B: Using a Seeder

Generate a seeder:
```bash
php artisan make:seeder CategorySeeder
```

Edit `database/seeders/CategorySeeder.php`:
```php
<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::create(['name' => 'Technology', 'slug' => 'technology', 'description' => 'Gadgets and Tech news']);
        Category::create(['name' => 'Health & Fitness', 'slug' => 'health-fitness', 'description' => 'Tips for healthy living']);
        Category::create(['name' => 'Education', 'slug' => 'education', 'description' => 'Learning resources']);
    }
}
```

Run the seeder:
```bash
php artisan db:seed --class=CategorySeeder
```

---

## Step 5: Define the Route

Open `routes/web.php` and create a route that fetches all categories using the `Category` model and passes them to a view.

```php
<?php

use App\Models\Category;
use Illuminate\Support\Facades\Route;

Route::get('/categories', function () {
    // Retrieve all categories from the database
    $categories = Category::all();

    // Return the view and pass the categories variable
    return view('categories.index', compact('categories'));
});
```

---

## Step 6: Create the Blade View

Create a new directory named `categories` inside `resources/views/`, and then create a file named `index.blade.php` inside it:

**File Path:** `resources/views/categories/index.blade.php`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categories List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f9;
            margin: 0;
            padding: 40px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
            padding: 20px 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
        }
        li:last-child {
            border-bottom: none;
        }
        .category-name {
            font-weight: bold;
            font-size: 1.1em;
            color: #2c3e50;
        }
        .category-desc {
            color: #666;
            font-size: 0.9em;
            margin-top: 4px;
        }
        .empty-message {
            color: #888;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>List of Categories</h1>

        <ul>
            @forelse($categories as $category)
                <li>
                    <div class="category-name">{{ $category->name }}</div>
                    @if($category->description)
                        <div class="category-desc">{{ $category->description }}</div>
                    @endif
                </li>
            @empty
                <li class="empty-message">No categories found.</li>
            @endforelse
        </ul>
    </div>
</body>
</html>
```

---

## Step 7: Test the Application

1. Start your Laravel development server:
   ```bash
   php artisan serve
   ```

2. Open your browser and navigate to:
   ```
   http://127.0.0.1:8000/categories
   ```

You should now see the styled list of categories retrieved directly from your database table!

---

## Summary Checklist

| Step | Output / File |
| --- | --- |
| Create Model & Migration | `app/Models/Category.php`<br>`database/migrations/..._create_categories_table.php` |
| Migrate Table | Run `php artisan migrate` |
| Seed Data | Use `php artisan tinker` or `CategorySeeder` |
| Add Route | `routes/web.php` |
| Create View | `resources/views/categories/index.blade.php` |