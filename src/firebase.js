// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6xrfWVe3_rvYE3v9iWYLqFMgPfyBLm7s",
  authDomain: "portfolio-ae1d5.firebaseapp.com",
  projectId: "portfolio-ae1d5",
  storageBucket: "portfolio-ae1d5.appspot.com",
  messagingSenderId: "636322176036",
  appId: "1:636322176036:web:154839ec205151b0210cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export  {app, db}
