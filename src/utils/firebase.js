// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAHWd0UBB-86X455grsRbPmrQkXTXKw2I",
  authDomain: "mark1-14a1e.firebaseapp.com",
  projectId: "mark1-14a1e",
  storageBucket: "mark1-14a1e.appspot.com",
  messagingSenderId: "1037766194794",
  appId: "1:1037766194794:web:37d71177e5da04e4fbfc13",
  measurementId: "G-CT6HFQ0Q1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();