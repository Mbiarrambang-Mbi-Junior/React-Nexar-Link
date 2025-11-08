// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"; // 👈 Import Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7eIBlESYROiQhGT5kYhHZ2nq09jbhDkg",
  authDomain: "iot-firbase.firebaseapp.com",
  projectId: "iot-firbase",
  storageBucket: "iot-firbase.firebasestorage.app",
  messagingSenderId: "427381019354",
  appId: "1:427381019354:web:2b3d482a37f27a1329cbe3",
  measurementId: "G-K5CG4FXKZ9"
};

// Initialize Firebase https://script.google.com/macros/s/AKfycbzdiAmrY9aUOp6cjS-GwLqyZIkY2mT9zZ-K_bj-pclDJMCUCQkNvQlyd3ppOZFTM2bJ/exec
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);