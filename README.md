# 🛍️ MERN Stack Full E-Commerce WebApp

## 📖 Overview
The MERN Stack Full E-Commerce WebApp is a full-featured shopping platform built with MongoDB, Express.js, React.js, and Node.js, enabling users to browse, manage carts, and track orders seamlessly.  
It provides secure authentication, dynamic product management, and a responsive interface for both users and admins.

---

## ⚙️ Tech Stack
- **Frontend:** React.js, Redux Toolkit, React Router, Axios, Tailwind CSS  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt  
- **Architecture:** RESTful APIs, MVC structure, Modular file organization  

---

## 💡 Features

### 👤 User
- Register and login securely using JWT authentication  
- Browse, filter, and search products by category or name  
- Add, update, or remove items from the cart  
- Track orders and view order history  
- Mobile-friendly and responsive interface  

### 🧑‍💼 Admin
- Manage product listings (add, edit, delete)  
- Manage categories and stock  
- View and manage user accounts and orders  
- Dashboard for monitoring product and order details  

---

## 🧱 Project Structure
MERN-Ecommerce/
│
├── backend/
│ ├── server.js
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── utils/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── redux/
│ │ └── utils/
│ ├── public/
│ └── package.json
│
└── README.md


---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/mern-ecommerce-webapp.git
cd mern-ecommerce-webapp

2️⃣ Install Dependencies
cd backend && npm install
cd ../frontend && npm install

3️⃣ Configure Environment Variables

Create a .env file in the backend/ folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4️⃣ Run the App
# Run backend
cd backend
npm run dev

# Run frontend
cd ../frontend
npm start
