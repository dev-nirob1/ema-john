// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbJEbTqivhC5QC4ApwIWwbRxJUP56Q-v8",
  authDomain: "ema-john-firebase-auth-7b522.firebaseapp.com",
  projectId: "ema-john-firebase-auth-7b522",
  storageBucket: "ema-john-firebase-auth-7b522.appspot.com",
  messagingSenderId: "805139707250",
  appId: "1:805139707250:web:32e07b1c7cf90bdf8299eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;