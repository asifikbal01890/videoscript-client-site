// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkL4gIjIAQyEkeETZJ7MgU3YIFrKEPOBk",
  authDomain: "videoscript-d1cf1.firebaseapp.com",
  projectId: "videoscript-d1cf1",
  storageBucket: "videoscript-d1cf1.appspot.com",
  messagingSenderId: "584667331418",
  appId: "1:584667331418:web:e1342b2eb6ad2b1ef11163",
  measurementId: "G-JHY009LB6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;