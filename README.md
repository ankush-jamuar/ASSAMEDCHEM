# AasaMedChem Inventory & Order Management System

## Project Overview

This project is a full-stack Inventory, Quotation, and Order Management System built as part of the AasaMedChem Hackathon Assignment.

The system enables sellers to browse products, search and filter inventory, perform unit-aware quantity calculations, generate quotations, and place orders. Administrators can manage inventory, view orders and quotations, and monitor product information through a dedicated dashboard.

The application is built using Next.js, Prisma ORM, Neon PostgreSQL, and deployed on Vercel.

---

# Live Demo

**Vercel URL:**
[Live](https://assamedchem.vercel.app/)

---

# GitHub Repository

**GitHub Repository:**
[GitHub](https://github.com/ankush-jamuar/ASSAMEDCHEM)

---

# Features

## Seller Features

* Login Authentication
* Role-based access
* Product Catalog
* Product Search
* Product Filtering
* Product Details Page
* Unit Conversion
* Real-time Price Calculation
* Place Orders
* Request Quotations
* View Product Inventory Information

## Admin Features

* Login Authentication
* Role-based access
* Dashboard Analytics
* View Orders
* View Quotations
* Inventory Management
* Create Products
* Product Inventory Tracking

---

# Technology Stack

## Frontend

* Next.js 16 (App Router)
* React
* TypeScript
* Tailwind CSS

## Backend

* Next.js Route Handlers (API Routes)
* Prisma ORM

## Database

* Neon PostgreSQL

## Deployment

* Vercel

---

# System Architecture

```text
Seller/Admin UI
        │
        ▼
Next.js App Router
        │
        ▼
API Route Handlers
        │
        ▼
Prisma ORM
        │
        ▼
Neon PostgreSQL
```

The frontend communicates with backend route handlers. Route handlers use Prisma ORM to perform database operations on Neon PostgreSQL.

---

# Authentication & Role-Based Access

The application implements role-based authentication with two roles:

## Admin

Credentials:

Email:
[admin@aasamedchem.com](mailto:admin@aasamedchem.com)

Password:
admin123

Access:

* Admin Dashboard
* Orders Management
* Quotations Management
* Inventory Management
* Product Creation

## Seller

Credentials:

Email:
[seller@aasamedchem.com](mailto:seller@aasamedchem.com)

Password:
seller123

Access:

* Product Catalog
* Search & Filter
* Order Placement
* Quotation Requests

Route protection is implemented using role validation and protected layouts.

---

# Database Schema

## Product

| Field            | Type           |
| ---------------- | -------------- |
| id               | String         |
| name             | String         |
| description      | String         |
| sku              | String         |
| dimension        | Enum           |
| baseUnit         | Enum           |
| inventory        | Decimal(30,10) |
| pricePerBaseUnit | Decimal(30,10) |

---

## Order

| Field        | Type           |
| ------------ | -------------- |
| id           | String         |
| customerName | String         |
| status       | Enum           |
| totalAmount  | Decimal(30,10) |
| createdAt    | DateTime       |

---

## OrderItem

| Field             | Type           |
| ----------------- | -------------- |
| id                | String         |
| orderId           | String         |
| productId         | String         |
| quantity          | Decimal(30,10) |
| enteredUnit       | Enum           |
| convertedQuantity | Decimal(30,10) |
| unitPrice         | Decimal(30,10) |
| totalPrice        | Decimal(30,10) |

---

## Quotation

| Field        | Type           |
| ------------ | -------------- |
| id           | String         |
| customerName | String         |
| totalAmount  | Decimal(30,10) |
| status       | Enum           |
| createdAt    | DateTime       |

---

## User

| Field | Type   |
| ----- | ------ |
| id    | String |
| name  | String |
| email | String |
| role  | Enum   |

---

# Unit Storage Strategy

To ensure consistency and simplify calculations, quantities are stored using standardized base units.

## Weight Products

Stored internally in:

```text
grams (g)
```

Examples:

```text
1 kg = 1000 g
0.5 kg = 500 g
```

---

## Volume Products

Stored internally in:

```text
milliliters (mL)
```

Examples:

```text
1 L = 1000 mL
2.5 L = 2500 mL
```

---

## Count Products

Stored internally in:

```text
items
```

Examples:

```text
1 item = 1 item
10 items = 10 items
```

---

# Unit Conversion Strategy

Supported Units:

* Gram (g)
* Kilogram (kg)
* Milliliter (mL)
* Liter (L)
* Item

Conversion Factors:

```text
1 kg = 1000 g
1 g = 1 g

1 L = 1000 mL
1 mL = 1 mL

1 item = 1 item
```

Conversions are performed before pricing calculations and before order storage.

---

# Pricing Strategy

Prices are stored as:

```text
pricePerBaseUnit
```

Examples:

```text
₹2 per mL
₹0.50 per g
₹150 per item
```

Order pricing is calculated as:

```text
Converted Quantity × Price Per Base Unit
```

Example:

```text
2 L Ethanol

2 L
→ 2000 mL

Price:
₹2 per mL

Total:
2000 × 2 = ₹4000
```

---

# Precision Handling

To support both very small and very large values, PostgreSQL DECIMAL(30,10) is used.

Examples of supported values:

```text
0.0000000001

99999999999999999999.9999999999
```

This avoids floating-point precision issues and ensures accurate pricing calculations.

---

# Order Flow

```text
Seller Login
        │
        ▼
Browse Products
        │
        ▼
Select Quantity
        │
        ▼
Choose Unit
        │
        ▼
Automatic Conversion
        │
        ▼
Live Price Calculation
        │
        ▼
Place Order
        │
        ▼
Admin Dashboard
```

---

# Quotation Flow

```text
Seller Login
        │
        ▼
Select Product
        │
        ▼
Enter Quantity
        │
        ▼
Request Quotation
        │
        ▼
Quotation Stored
        │
        ▼
Admin Reviews Quotation
```

---

# Local Setup

## Clone Repository

```bash
git clone <repository-url>
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create:

```env
.env
```

Add:

```env
DATABASE_URL=your_neon_connection_string
```

---

## Run Database Migration

```bash
npx prisma migrate dev
```

---

## Run Application

```bash
npm run dev
```

Application:

```text
http://localhost:3000
```

---

# Neon Database Setup

1. Create Neon Project
2. Create PostgreSQL Database
3. Copy Connection String
4. Add DATABASE_URL in .env
5. Run Prisma Migration

---

# Deployment

## Vercel

1. Push project to GitHub
2. Import repository into Vercel
3. Add DATABASE_URL environment variable
4. Deploy

---

# Assumptions Made

* Weight products are stored in grams.
* Volume products are stored in milliliters.
* Count products are stored as items.
* Prices are stored per base unit.
* Unit conversions are applied before storage and pricing calculations.
* Authentication is simplified for hackathon purposes.

---

# Future Improvements

* Full Clerk/NextAuth authentication
* User-specific quotation tracking
* Product Update/Delete functionality
* Inventory stock deduction after order approval
* Advanced analytics dashboard
* Pagination and caching
* Email notifications
* Audit logs
* Bulk inventory upload

---

# Evaluation Checklist

✅ Next.js Application

✅ Neon PostgreSQL

✅ Prisma ORM

✅ Vercel Deployment

✅ Authentication

✅ Role-Based Access

✅ Product Management

✅ Inventory Management

✅ Search & Filter

✅ Unit Conversion

✅ Precision Handling

✅ Order Workflow

✅ Quotation Workflow

✅ Admin Dashboard

✅ Documentation

---

# Author

Ankush Jamuar
