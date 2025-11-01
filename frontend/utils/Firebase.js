import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginshopgenie.firebaseapp.com",
  projectId: "loginshopgenie",
  storageBucket: "loginshopgenie.firebasestorage.app",
  messagingSenderId: "883224928339",
  appId: "1:883224928339:web:2fd5b0fa6d5a17971f26a6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export{auth,provider}