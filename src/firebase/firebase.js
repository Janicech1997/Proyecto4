import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.DB_PASSWORD ,
  authDomain: "proyecto-4-rest.firebaseapp.com",
  projectId: "proyecto-4-rest",
  storageBucket: "proyecto-4-rest.appspot.com",
  messagingSenderId: "541997745685",
  appId: "1:541997745685:web:f9c8fc39dde1aa9325701c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export{db}