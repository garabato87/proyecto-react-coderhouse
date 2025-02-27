import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_API_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_API_projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_API_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_API_messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_API_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
