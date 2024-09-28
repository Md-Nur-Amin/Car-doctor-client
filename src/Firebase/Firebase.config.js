// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5qMJZGdPdJ7wNEp3B8Ok1u0soTi7Y2rA",
  authDomain: "cars-doctor-3d623.firebaseapp.com",
  projectId: "cars-doctor-3d623",
  storageBucket: "cars-doctor-3d623.appspot.com",
  messagingSenderId: "690199817876",
  appId: "1:690199817876:web:6b0d5764fc31046b108e81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;