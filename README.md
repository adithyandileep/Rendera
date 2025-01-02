
---

# Rendera 🚀  
**Rendera** is an AI-powered image generation SaaS app developed as part of showcasing my skills in full-stack development. It allows users to generate stunning images using advanced AI technology, all within a simple and minimalistic design. The project demonstrates my proficiency in both frontend and backend development, including user authentication, payment integration, and real-time data handling.

---

## 🛠️ Tech Stack

- **Frontend:**  
  - **React.js** 🖥️ – A powerful library for building dynamic user interfaces.
  - **Vite** ⚡ – A modern build tool that significantly improves the development experience with fast hot-reloading and optimized build times.
  - **Tailwind CSS** 🌿 – A utility-first CSS framework to create responsive and customizable designs without writing custom CSS.
  - **React Router DOM** 🔄 – For handling dynamic routing in the frontend app.
  - **Axios** 📡 – For making HTTP requests to the backend API.
  - **React Toastify** 🥳 – To show success or error notifications in a simple and elegant way.

- **Backend:**  
  - **Node.js** 🌍 – A powerful runtime for building server-side applications in JavaScript.
  - **Express.js** 🚀 – A minimal and flexible Node.js web application framework to build APIs quickly.
  - **MongoDB** 🗄️ – A NoSQL database for storing user data and images, offering flexibility and scalability.
  - **Razorpay** 💳 – Payment gateway for managing transactions and buying credits in the app.
  - **JSON Web Token (JWT)** 🔐 – For secure user authentication.
  - **Bcrypt** 🔑 – For encrypting user passwords before storing them.
  - **CORS** 🌐 – For enabling cross-origin requests between the frontend and backend.

---

## 💡 Features

- **User Authentication:**  
  - User login, logout, and registration with secure password encryption.
  
- **Responsive Design:**  
  - Clean, minimalistic, and fully responsive UI, ensuring a seamless experience across devices.

- **AI Image Generation:**  
  - Users can generate unique images using AI technology integrated into the app.

- **Payment Integration:**  
  - Secure payment functionality for buying credits, powered by Razorpay.

---

## 🚀 Setup

### 1. Clone the Repository  
```bash
git clone https://github.com/adithyandileep/Rendera.git
```

### 2. Install Dependencies

For both Frontend & Backend:

- Navigate to the respective directories:
  - **Frontend:** `cd Client`
  - **Backend:** `cd Server`

- Install dependencies by running:

```bash
npm install
```

### 3. Environment Variables  
Create `.env` files in both the `Client` and `Server` directories.

- **Client (.env):**  
  Add the following environment variables in the `client/.env` file:

  ```
  VITE_BACKEND_URL='http://localhost:4000'
  RAZORPAY_KEY_ID='your-razorpay-key-id'
  ```

- **Server (.env):**  
  Add the following environment variables in the `server/.env` file:

  ```
  MONGODB_URI='your-mongodb-connection-string'
  JWT_SECRET='your-jwt-secret'
  CLIPDROP_API='your-clipdrop-api-key'
  RAZORPAY_KEY_ID='your-razorpay-key-id'
  RAZORPAY_KEY_SECRET='your-razorpay-secret-key'
  CURRENCY='INR'
  ```

### 4. Run the Project

- **Frontend (Client):**  
  ```bash
  npm run dev
  ```

- **Backend (Server):**  
  ```bash
  npm run server
  ```


---

## 🎨 Screenshots  

<div align="center">
  <img src="https://github.com/user-attachments/assets/479850fe-399e-42da-a6e4-1cc7283beb36" style="width: 50%">
</div>

<p align="center">
  <img width = "45%" src="https://github.com/user-attachments/assets/3e74e0cb-706f-437e-8379-a7dc13f5ca06"> 
  <img width = "45%" src="https://github.com/user-attachments/assets/09be3f02-e60e-466a-97e5-da249a02c7ea">
</p>

<p align="center">
  <img width = "45%" src="https://github.com/user-attachments/assets/84e274ee-efe3-4447-9614-c204aa400b10"> 
  <img width = "45%" src="https://github.com/user-attachments/assets/e0d28f72-4985-402d-8196-5bedaefe3e8d">
</p>

<p align="center">
  <img width = "45%" src="https://github.com/user-attachments/assets/00905f20-af1c-4391-995e-b24dbed99415"> 
  <img width = "45%" src="https://github.com/user-attachments/assets/767708e7-cbd9-4f48-b865-911a8b27b2db">
</p>

---


## 🏗️ Future Enhancements

- **User Profiles:** Allow users to create and manage personal profiles with saved images.
- **Image Gallery:** Create a gallery where users can view their previously generated images.
- **Advanced AI Features:** Integrate additional image manipulation tools powered by AI.

---

## 🧑‍💻 Author

This project was developed by **Adithyan Dileep**.  
You can connect with me on LinkedIn => [Adithyan Dileep](https://www.linkedin.com/in/Adithyan-Dileep).

---

## 📜 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---
