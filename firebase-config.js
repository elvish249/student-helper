
// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3TgEyImPZQn_IJmkHMMRr-NnR5lBFLjI",
  authDomain: "student-helper-f9c1e.firebaseapp.com",
  projectId: "student-helper-f9c1e",
  storageBucket: "student-helper-f9c1e.firebasestorage.app",
  messagingSenderId: "470966761106",
  appId: "1:470966761106:web:32199e7b5f28e0cebb184b"
};

const app = initializeApp(firebaseConfig);
export { app };
