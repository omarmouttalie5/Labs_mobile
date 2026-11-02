---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #f8fafc
color: #0f172a
style: |
  section {
    font-family: 'Plus Jakarta Sans', sans-serif;
    padding: 40px;
  }
  h1 {
    color: #0284c7;
  }
  h2 {
    color: #0f172a;
    border-bottom: 2px solid #0284c7;
  }
  footer {
    font-size: 14px;
    color: #64748b;
  }
  .highlight {
    background-color: #e0f2fe;
    padding: 10px;
    border-radius: 8px;
  }
---

<!-- _class: lead -->
<!-- _paginate: false -->
# Fashion & Apparel Store SPA
### Technical Project Presentation

![h:60](https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/OFPPT_Logo.svg/1200px-OFPPT_Logo.svg.png) &nbsp;&nbsp;&nbsp;&nbsp; ![h:60](https://solicode.co/assets/img/logo.png)

**Student Name:** Omar Mouttalie
**Supervisor:** ES-SARRAJ Fouad
**Institution:** OFPPT / Solicode  

<!-- 
Presenter Note: Welcome everyone! Today I am presenting my technical project: an online Fashion & Apparel Store built as a Single Page Application.
-->

---

## 1. Introduction

### Project Overview
The **Fashion & Apparel Store** is a modern Single Page Application (SPA) designed to deliver a smooth and responsive e-commerce experience for clothing shoppers.


- **Project Type:** Web Application (SPA)
- **Domain:** E-Commerce / Fashion Catalog
- **Core Highlight:** Fast navigation without page reloads.


<!-- 
Presenter Note: Introduce the core subject of the store and why an SPA architecture was chosen for modern users.
-->

---

## 2. Requirements & Problem Statement

### Problem Statement
Traditional multi-page e-commerce sites often suffer from slow page reloads and heavy network requests, leading to high cart abandonment rates.

### Project Needs
- **Performance:** Instant UI rendering and lightweight assets.
- **Simplicity:** Clean user interface for browsing apparel items.
- **Efficiency:** Streamlined product catalog schema.

<!-- 
Presenter Note: Highlight user friction in typical shopping web apps and state our technical requirements.
-->

---

## 3. Analysis & Functionalities

### Functional Requirements
- **Dynamic Catalog Browsing:** View available clothing items seamlessly.
- **Interactive Filtering:** Filter products by season and style on the fly.
- **Product Details View:** Inspect prices and product specs instantly.

### Technical Requirements
- Dynamic DOM manipulation with Vanilla JavaScript.
- Asynchronous data fetching via PHP API endpoints.

<!-- 
Presenter Note: Explain the core features required for the user and administrative workflow.
-->

---

## 4. System Design & Data Schema

### Database Schema Entity Overview

Below is the structured data schema designed for managing catalog items:

| id | product name | price | season / style |
| :---: | :--- | :---: | :--- |
| `1` | Classic Denim Jacket | `$89.99` | Winter / Casual |
| `2` | Summer Floral Dress | `$49.99` | Summer / Streetwear |
| `3` | Tailored Wool Coat | `$129.99` | Winter / Formal |

<!-- 
Presenter Note: Explain the 4 core fields in the database schema: id, product name, price, and season/style.
-->

---

## 5. Implementation: Tech Stack & Prototype

### Technical Stack
- **Frontend:** HTML5, Vanilla JavaScript (ES6+), **Tailwind CSS**
- **Backend:** PHP (REST API endpoints)
- **Architecture:** Single Page Application (SPA)

### Asynchronous Data Fetching Sample

```javascript
// SPA API Fetch Logic
async function loadProducts() {
  const response = await fetch('api/get_products.php');
  const products = await response.json();
  renderCatalog(products);
}
```

<!-- 
Presenter Note: Walk through the JavaScript code snippet showing how frontend code interacts with PHP asynchronously.
-->

---

## 6. Implementation Preview

![bg right:45% 80%](https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80)

### Key Features Implemented:
- [x] Responsive layout using Tailwind CSS
- [x] Dynamic JavaScript component loading
- [x] Lightweight PHP endpoint integration
- [ ] *Upcoming:* Online payment gateway integration

<!-- 
Presenter Note: Point out the visual preview on the right and summarize completed development tasks.
-->

---

<!-- _class: lead -->
## 7. Conclusion & Results

### Project Achievements
1. **High Speed & Smooth UI:** Zero full-page refreshes during navigation.
2. **Clean Codebase:** Modular structure separating PHP endpoints and JS components.
3. **Responsive Design:** Fully adapted for mobile and desktop screens.
add this color palette:
c8b6ff
#000000
change only the colors and improve the layout it must be markdown marp