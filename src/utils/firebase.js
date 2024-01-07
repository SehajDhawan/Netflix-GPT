 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2HrY11nQpjWcFYISz0Z7nf-1zG3FVukQ",
  authDomain: "netflixgpt-ac6c8.firebaseapp.com",
  projectId: "netflixgpt-ac6c8",
  storageBucket: "netflixgpt-ac6c8.appspot.com",
  messagingSenderId: "58888049919",
  appId: "1:58888049919:web:3360414c8d1c9408c2a8ca",
  measurementId: "G-G02GY9LC5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();