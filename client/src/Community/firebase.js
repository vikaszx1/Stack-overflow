import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBTt_JbdFhncN3-Cfv7kkbvOMlMxBbGowc",
  authDomain: "facebook-clone-bf391.firebaseapp.com",
  projectId: "facebook-clone-bf391",
  storageBucket: "facebook-clone-bf391.appspot.com",
  messagingSenderId: "950036696257",
  appId: "1:950036696257:web:13d4deff8944c835831840"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();

export const db = getFirestore(app);