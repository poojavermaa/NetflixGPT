// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClKy2ShZySzbEDtW65NCILgShYmHP25B8",
  authDomain: "netflixgpt-7fb23.firebaseapp.com",
  projectId: "netflixgpt-7fb23",
  storageBucket: "netflixgpt-7fb23.appspot.com",
  messagingSenderId: "936162340484",
  appId: "1:936162340484:web:8ddf2c4ab698953f42dcd1",
  measurementId: "G-XYDM8SEL5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);