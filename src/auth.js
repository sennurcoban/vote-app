// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFSZT5vVpODm2uWZsExSHJpKoj-Tv7IXs",
  authDomain: "fir-auth-4b72b.firebaseapp.com",
  projectId: "fir-auth-4b72b",
  storageBucket: "fir-auth-4b72b.appspot.com",
  messagingSenderId: "280381711622",
  appId: "1:280381711622:web:ea9c6d04ef64179b1bea87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth};