// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwOnZty9fFT7_y8y2EjtbEcMyVHDEnl4g",
  authDomain: "smart-attendance-f194b.firebaseapp.com",
  projectId: "smart-attendance-f194b",
  storageBucket: "smart-attendance-f194b.firebasestorage.app",
  messagingSenderId: "429108529840",
  appId: "1:429108529840:web:0b968dd16452b3f51ec975",
  measurementId: "G-GS1KRVJGD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export db so other components can use it
export { db };