// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgqS8_weeGTIep0dTUSLg4sAib8hc0iEI",
  authDomain: "house-app-3b325.firebaseapp.com",
  projectId: "house-app-3b325",
  storageBucket: "house-app-3b325.appspot.com",
  messagingSenderId: "728762286812",
  appId: "1:728762286812:web:ac96f02fd16cb8fdbb2a19",
  measurementId: "G-GE6X4SS5X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();