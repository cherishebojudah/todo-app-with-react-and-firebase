import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDW4V_DHBWQURH68b41L0d0m8reAB2tO8A",
    authDomain: "react-todo-app-by-cherish.firebaseapp.com",
    projectId: "react-todo-app-by-cherish",
    storageBucket: "react-todo-app-by-cherish.appspot.com",
    messagingSenderId: "174326026696",
    appId: "1:174326026696:web:4cf3b066637e96dbeab0fd",
    measurementId: "G-E21M1K0X31"
});

const db = firebaseApp.firestore();

export default db;