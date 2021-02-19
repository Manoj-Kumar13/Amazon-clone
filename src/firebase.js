import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5V6KPBjT2KCdpf8jv1XmdchO-GbZU6do",
  authDomain: "challenge-af234.firebaseapp.com",
  projectId: "challenge-af234",
  storageBucket: "challenge-af234.appspot.com",
  messagingSenderId: "347771757853",
  appId: "1:347771757853:web:59fda9020197ead8f26df4",
  measurementId: "G-0Q9GDNKCK7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
