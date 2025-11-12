<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> 7f1cf0126164e0fea8843145300788bbe24da668
