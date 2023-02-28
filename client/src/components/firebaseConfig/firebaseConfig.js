// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc6G8vJHgFtqSjlvQbZ6oy3M5gVsGFWUM",
  authDomain: "chat-application-final-7304f.firebaseapp.com",
  projectId: "chat-application-final-7304f",
  storageBucket: "chat-application-final-7304f.appspot.com",
  messagingSenderId: "1078417457668",
  appId: "1:1078417457668:web:3cbfe90aaa8a53b501ab51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);