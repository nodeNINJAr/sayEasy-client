

# **SayEasy** 🎓 – *Online Tutor Booking Platform*  

🌐 **Live Website:**  
- [Live Link 1](https://sayeasy-95352.web.app)  
- [Live Link 2](https://sayeasy.netlify.app)  

## 🚀 Introduction  

**SayEasy** is an innovative **online tutor booking platform** designed to connect **language learners** with **skilled tutors** worldwide. Whether you're a **learner looking for a tutor** or a **tutor wanting to teach**, SayEasy makes the process seamless and efficient.  

With **live virtual classrooms**, **secure booking & payment systems**, and **customized learning plans**, SayEasy empowers individuals to **break language barriers, promote cultural exchange**, and make learning accessible to everyone.  

---

## 📑 Table of Contents  

- [**SayEasy** 🎓 – *Online Tutor Booking Platform*](#sayeasy---online-tutor-booking-platform)
  - [🚀 Introduction](#-introduction)
  - [📑 Table of Contents](#-table-of-contents)
  - [🌟 Features](#-features)
    - [🔹 **User Roles**](#-user-roles)
    - [🔹 **Tutor Search \& Booking System**](#-tutor-search--booking-system)
    - [🔹 **Tutorial Management**](#-tutorial-management)
    - [🔹 **Seamless Mobile \& Desktop Experience**](#-seamless-mobile--desktop-experience)
    - [🔹 **Security \& Authentication**](#-security--authentication)
  - [🛠 Tech Stack](#-tech-stack)
  - [📥 Installation](#-installation)
    - [**Prerequisites**](#prerequisites)
    - [**Steps**](#steps)
  - [▶️ Usage](#️-usage)
  - [📜 Available Scripts](#-available-scripts)
  - [⚙️ Environment Variables](#️-environment-variables)
  - [🛠 Troubleshooting](#-troubleshooting)
  - [🤝 Contributing](#-contributing)

---

## 🌟 Features  

### 🔹 **User Roles**  
✅ **Learn or Teach** – Users can register as **language learners** or **tutors**, and can switch roles anytime.  

### 🔹 **Tutor Search & Booking System**  
✅ **Advanced search filters** to find tutors based on language, availability, and expertise.  
✅ **One-time tutor booking per language category** to maintain structured learning.  
✅ **Student reviews** – Learners can review their tutors after booking.  

### 🔹 **Tutorial Management**  
✅ **Add Tutorials** – Users can **create & upload** tutorials to share knowledge.  
✅ **Update Tutorials** – Modify or enhance existing tutorials to keep content up to date.  
✅ **Delete Tutorials** – Remove outdated or unnecessary tutorials.  

### 🔹 **Seamless Mobile & Desktop Experience**  
✅ Fully **responsive design** for all devices (mobile, tablet, desktop).  

### 🔹 **Security & Authentication**  
✅ **JWT (JSON Web Token)** authentication for secure user data.  

---

## 🛠 Tech Stack  

| Technology  | Purpose |
|-------------|---------|
| **React.js** | Frontend Framework |
| **Vite** | Development & Build Tool |
| **Firebase** | Authentication & Database |
| **Axios** | API Requests |
| **React Query** | State Management |
| **Tailwind CSS & DaisyUI** | Styling |
| **Swiper.js** | Interactive Carousel |
| **Framer Motion & Lottie React** | Animations |
| **React Router** | Navigation |

---

## 📥 Installation  

### **Prerequisites**  

- **Git** (for cloning the repository)  
- **Node.js (>=16.0.0)**  
- **npm or yarn package manager**  

### **Steps**  

1. Clone the repository:  
   ```sh
   git clone https://github.com/nodeNINJAr/sayEasy-client
   cd sayeasy-client
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Create a `.env` file and configure the required environment variables (see [Environment Variables](#-environment-variables)).  
4. Start the development server:  
   ```sh
   npm run dev
   ```  

---

## ▶️ Usage  

- **Start the development server:**  
  ```sh
  npm run dev
  ```  
- **Build for production:**  
  ```sh
  npm run build
  ```  
- **Preview production build:**  
  ```sh
  npm run preview
  ```  
- **Run ESLint for code linting:**  
  ```sh
  npm run lint
  ```  

---

## 📜 Available Scripts  

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint for code quality |

---

## ⚙️ Environment Variables  

Create a `.env` file in the root directory and configure the following:  

```env
VITE_base_url=your-backend-api-url
VITE_LOCAL_BASE_URL=your-local-api-url

# Firebase Configuration
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id
```

For detailed Firebase setup, refer to [Firebase Docs](https://firebase.google.com/docs).

---

## 🛠 Troubleshooting  

- **Port Conflicts?**  
  Change the port by running:  
  ```sh
  vite --port 3001
  ```  
- **Dependency Issues?**  
  Delete `node_modules` and reinstall:  
  ```sh
  rm -rf node_modules package-lock.json && npm install
  ```  
- **Environment Variables Not Loading?**  
  Ensure that your `.env` file is correctly formatted and included in `.gitignore`.  

---

## 🤝 Contributing  

We welcome contributions! Follow these steps:  

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature-branch`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push to the branch (`git push origin feature-branch`)  
5. Open a Pull Request  

