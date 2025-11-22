{/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBf4yZ3gbx2McSHrK1Knq-GBObQiWLU4Qk",
    authDomain: "audix-dfbc4.firebaseapp.com",
    projectId: "audix-dfbc4",
    storageBucket: "audix-dfbc4.firebasestorage.app",
    messagingSenderId: "942997861581",
    appId: "1:942997861581:web:314319b456e30ff0ec6584",
    measurementId: "G-Z2PETPLD95"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script> */}


// // Import the functions you need from the SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// // 🔹 Replace this config with your actual Firebase project config
// const firebaseConfig = {
//   apiKey: "AIzaSyBf4yZ3gbx2McSHrK1Knq-GBObQiWLU4Qk",
//   authDomain: "audix-dfbc4.firebaseapp.com" ,
//   projectId: "audix-dfbc4",
//   storageBucket: "audix-dfbc4.firebasestorage.app",
//   messagingSenderId: "942997861581",
//   appId: "1:942997861581:web:314319b456e30ff0ec6584" ,
//    measurementId: "G-Z2PETPLD95"
// };

// // Initialize Firebase App
// const app = initializeApp(firebaseConfig);

// // Initialize Auth service (important)
// const auth = getAuth(app);

// export { app, auth };
// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);

// // export { auth };





// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// ⚠️ Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBf4yZ3gbx2McSHrK1Knq-GBObQiWLU4Qk",
  authDomain: "audix-dfbc4.firebaseapp.com" ,
  projectId: "audix-dfbc4",
  storageBucket: "audix-dfbc4.firebasestorage.app",
  messagingSenderId: "942997861581",
  appId: "1:942997861581:web:314319b456e30ff0ec6584" ,
   measurementId: "G-Z2PETPLD95"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
console.log("Firebase App initialized ✅", app);

// Initialize Auth service
const auth = getAuth(app);
console.log("Auth initialized ✅", auth);

export { app, auth };
