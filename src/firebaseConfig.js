// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwXMHMxEGOUpOKdBxy4d5YqB_ZNPPasOY",
  authDomain: "audix-main-f5159.firebaseapp.com",
  projectId: "audix-main-f5159",
  storageBucket: "audix-main-f5159.firebasestorage.app",
  messagingSenderId: "90681771452",
  appId: "1:90681771452:web:9600214d9562be3b6b97b9",
  measurementId: "G-T7BC20EM20",
};

let analytics = null;
let app = null;

export const initFirebase = async () => {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }

  if (typeof window !== "undefined") {
    // Analytics sirf browser me chalega
    if (await isSupported()) {
      if (!analytics) analytics = getAnalytics(app);
    }
  }

  return analytics;
};
