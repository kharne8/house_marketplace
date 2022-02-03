import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestorm";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBezYGicrYZyH27yIYSoNDCb6YXO9dgzT0",
  authDomain: "house-marketplace-73d5a.firebaseapp.com",
  projectId: "house-marketplace-73d5a",
  storageBucket: "house-marketplace-73d5a.appspot.com",
  messagingSenderId: "336874640695",
  appId: "1:336874640695:web:f8a15fb7a7d5e7b22976b2",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
