// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import {firebase} from 'firebase'
// const firebase = require('firebase-admin');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfZVzO4LpXK2ek1u7FOYmzT478NQQalPc",
    authDomain: "funstf-65ef7.firebaseapp.com",
    projectId: "funstf-65ef7",
    storageBucket: "funstf-65ef7.appspot.com",
    messagingSenderId: "315739132134",
    appId: "1:315739132134:web:6a2f64d688f126f4136b27",
    measurementId: "G-Z9VH6EBYMF"
};

// Initialize Firebase
// const app = !firebase ? firebase.initializeApp(firebaseConfig) : firebase.app();

// const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()


// const analytics = getAnalytics(app);
//
// let app
// if (!firebase.apps.length) {
//     try {
//         firebase.initializeApp(
//             app=firebaseConfig
//         );
//     } catch (error) {
//         console.log('Firebase admin initialization error', error.stack);
//     }
// }
// const db = firebase.firestore();
const app=initializeApp(firebaseConfig)
const db = getFirestore(app);
export {app,db}


