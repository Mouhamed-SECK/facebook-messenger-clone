import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7QzZJ1m-nUMre6BwxGwyuC_bPLT3cHSs",
  authDomain: "facebook-messenger-cloone.firebaseapp.com",
  databaseURL: "https://facebook-messenger-cloone.firebaseio.com",
  projectId: "facebook-messenger-cloone",
  storageBucket: "facebook-messenger-cloone.appspot.com",
  messagingSenderId: "1090103125538",
  appId: "1:1090103125538:web:2c27fd84c2f25c4ae40c7b",
  measurementId: "G-DQPRJEH9W5",
});

const db = firebaseApp.firestore();

export default db;
