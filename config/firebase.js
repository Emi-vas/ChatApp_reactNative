// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO:  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNi6TF1S05Nh9ieXZbiC1GhcDzR5Jfygo",
  authDomain: "chatapp-d4cbb.firebaseapp.com",
  projectId: "chatapp-d4cbb",
  storageBucket: "chatapp-d4cbb.appspot.com",
  messagingSenderId: "394536719926",
  appId: "1:394536719926:web:ef82b3dd17e04357006a97",
  measurementId: "G-RV2R90CY6H"
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */
initializeApp(firebaseConfig)
export const auth = getAuth()
export const database = getFirestore()