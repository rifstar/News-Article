// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lensa-news.firebaseapp.com",
  projectId: "lensa-news",
  storageBucket: "lensa-news.firebasestorage.app",
  messagingSenderId: "984955188574",
  appId: "1:984955188574:web:1c3930b191be33ebe50bcf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);