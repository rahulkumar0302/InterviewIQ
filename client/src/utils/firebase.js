
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiagent-f05ca.firebaseapp.com",
  projectId: "aiagent-f05ca",
  storageBucket: "aiagent-f05ca.firebasestorage.app",
  messagingSenderId: "949889085040",
  appId: "1:949889085040:web:da31003aedef8889524eb5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}