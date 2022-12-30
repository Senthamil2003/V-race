import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyBap7GVO8ob4GT9zZ_iDVi6zfCKupF4A-I",
    authDomain: "imaginecup-da84b.firebaseapp.com",
    projectId: "imaginecup-da84b",
    storageBucket: "imaginecup-da84b.appspot.com",
    messagingSenderId: "367131592191",
    appId: "1:367131592191:web:b0ed5be6eaf22ed063d3ca",
    measurementId: "G-GQ6WMBZPNE"
};

const app = initializeApp(firebaseConfig);
export const db =getDatabase(app);