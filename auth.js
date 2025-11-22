// auth.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const app = initializeApp({
  apiKey: "AIzaSyBf4yZ3gbx2McSHrK1Knq-GBObQiWLU4Qk",
  authDomain: "audix-dfbc4.firebaseapp.com" ,
  projectId: "audix-dfbc4",
  storageBucket: "audix-dfbc4.firebasestorage.app",
  messagingSenderId: "942997861581",
  appId: "1:942997861581:web:314319b456e30ff0ec6584" ,
   measurementId: "G-Z2PETPLD95"
});

const auth = getAuth(app);


import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    alert("Login successful ✅");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Firebase Auth Error:", error);
    alert(error.message);
  }
});
