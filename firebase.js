// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCedpszHQ9r2zblHjU-F81EGF3z1Pttkbw",
  authDomain: "starlingbank-landing-page.firebaseapp.com",
  projectId: "starlingbank-landing-page",
  storageBucket: "starlingbank-landing-page.appspot.com",
  messagingSenderId: "30435212248",
  appId: "1:30435212248:web:3e059ae6743e1b5d3650ad",
  measurementId: "G-QB4H26MCGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);