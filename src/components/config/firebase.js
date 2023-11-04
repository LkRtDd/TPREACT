import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7_39gc4So3ydKduzmbsjLM8Dkpo1EVl0",
  authDomain: "faierbeis-7b020.firebaseapp.com",
  projectId: "faierbeis-7b020",
  storageBucket: "faierbeis-7b020.appspot.com",
  messagingSenderId: "898546939503",
  appId: "1:898546939503:web:d1a13fba04a2c345f57f9a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };