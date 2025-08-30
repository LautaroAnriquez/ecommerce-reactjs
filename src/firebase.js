import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBLpvmA9NEqlelOo_BpL_9IwV1okFz9RqQ",
  authDomain: "proyecto-reactjs-7ba1c.firebaseapp.com",
  projectId: "proyecto-reactjs-7ba1c",
  storageBucket: "proyecto-reactjs-7ba1c.firebasestorage.app",
  messagingSenderId: "915026002746",
  appId: "1:915026002746:web:ba070bf0bc9b1239eec603"
};


const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);