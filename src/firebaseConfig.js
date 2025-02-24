import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEKwpsQXuUYDP6-Vgy25zpoRltSxIXJ3A",
  authDomain: "ecommerce-react-245f8.firebaseapp.com",
  projectId: "ecommerce-react-245f8",
  storageBucket: "ecommerce-react-245f8.firebasestorage.app",
  messagingSenderId: "409106335864",
  appId: "1:409106335864:web:27cdd12d4bcbaf13c2458d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
