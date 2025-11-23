"use client";

import { useEffect } from "react";
import { initFirebase } from "../firebaseConfig";

export default function FirebaseInit() {
  useEffect(() => {
    initFirebase();
  }, []);

  return null;
}
