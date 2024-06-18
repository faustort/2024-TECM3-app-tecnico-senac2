// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjQAAzt40oCDtdF8RmAAsU0hYNyd95Fg8",
  authDomain: "tecm3-appbase.firebaseapp.com",
  projectId: "tecm3-appbase",
  storageBucket: "tecm3-appbase.appspot.com",
  messagingSenderId: "715929072546",
  appId: "1:715929072546:web:db5098175d61bb0762f8fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
