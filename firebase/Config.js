// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, serverTimestamp} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Replace with your OWN API details if you want to test the app
const firebaseConfig = {
  apiKey: "---",
  authDomain: "---",
  projectId: "---",
  storageBucket: "---",
  messagingSenderId: "---",
  appId: "---"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const firestore = getFirestore();

const MESSAGES = 'messages'

export{
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    MESSAGES
}