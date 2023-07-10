import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGH_q2G_dFunJm-N7C3PinqY18dMdYpQU",
  authDomain: "e-kopi.firebaseapp.com",
  projectId: "e-kopi",
  storageBucket: "e-kopi.appspot.com",
  messagingSenderId: "1063584826753",
  appId: "1:1063584826753:web:1440d6c31e51c636ac9480"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);