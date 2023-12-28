import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-yAxfgrcgLgrExLExffNYDvhSWf2Kou8",
  authDomain: "house-marketplace-app-35799.firebaseapp.com",
  projectId: "house-marketplace-app-35799",
  storageBucket: "house-marketplace-app-35799.appspot.com",
  messagingSenderId: "260929917297",
  appId: "1:260929917297:web:3e465a47bab36164c566d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()