// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertysearchsite-ba085.firebaseapp.com",
  projectId: "propertysearchsite-ba085",
  storageBucket: "propertysearchsite-ba085.appspot.com",
  messagingSenderId: "206387799139",
  appId: "1:206387799139:web:b3ea40e0b1aa5673d50456",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
