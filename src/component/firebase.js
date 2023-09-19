import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_FIREBASE_MESS_SENDER_ID,
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);