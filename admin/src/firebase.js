import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "ecom-676e2.firebaseapp.com",
  projectId: "ecom-676e2",
  storageBucket: "ecom-676e2.appspot.com",
  messagingSenderId: "944856592310",
  appId: "1:944856592310:web:ed17dbd22f53522c23db17",
};

export const app = initializeApp(firebaseConfig);
