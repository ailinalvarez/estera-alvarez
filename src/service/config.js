
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB-IZAYocOcpZSswIgeqzN6n3vFIqA361w",
    authDomain: "esteras-alvarez.firebaseapp.com",
    projectId: "esteras-alvarez",
    storageBucket: "esteras-alvarez.appspot.com",
    messagingSenderId: "59706498818",
    appId: "1:59706498818:web:1724cb38a1000d94852c1b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
