# Store Invoice & Product Management System

## Overview

This project is a **React-based web application** that allows store owners to manage invoices and product details efficiently. The application provides functionalities for generating invoices, managing product inventory, and implementing filtering and searching features.

## Features

### Invoice Management

- View a list of invoices with order details.
- Display detailed information for individual invoices.
- Calculate total amounts with and without tax.

### Product Management

- View and manage product details for different stores.
- Add, update, and delete products.
- Filter products by store.
- Search for products by name.

### Additional Functionalities

- Fetch data from a local JSON file (or API).
- Responsive design for accessibility across devices.
- Interactive UI with React state management.

---

## Tech Stack

- **React** - For building the UI components.
- **React Router** - For navigation (if required in the future).
- **Axios / Fetch API** - For data fetching.
- **CSS / Styled Components** - For styling the application.

---

## Local Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/tsingha97/product-invoice-management.git
cd product-invoice-management
```

### 2. Install Dependencies

Make sure you have **Node.js** installed. Then, run:

```sh
npm install
```

### 3. Start the Development Server

```sh
npm run dev
```

This will start the development server. The app will be available at:

```
http://localhost:5173/
```

### 4. Building for Production

To create an optimized production build, run:

```sh
npm run build
```

This will generate a `dist/` folder with optimized assets.

---
