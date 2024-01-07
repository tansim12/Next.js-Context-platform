import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VITE_APIKEY,
  authDomain: process.env.VITE_AUTHDOMAIN,
  projectId: process.env.VITE_PROJECTID,
  storageBucket: process.env.VITE_STORAGEBUCKET,
  messagingSenderId: process.env.VITE_MESSAGINGSENDERID,
  appId: process.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
