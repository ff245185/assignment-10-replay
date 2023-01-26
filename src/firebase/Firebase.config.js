
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWZvvGeBDQuWtOe3TCT3v6kF2M-CN4gAg",
  authDomain: "assignment-10-replay.firebaseapp.com",
  projectId: "assignment-10-replay",
  storageBucket: "assignment-10-replay.appspot.com",
  messagingSenderId: "1024046540949",
  appId: "1:1024046540949:web:5f029854ddda155046d39c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;