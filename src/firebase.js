import firebase from "firebase/app";
import "firebase/database";

// TODO to env variables
const firebaseConfig = {
  apiKey: "AIzaSyBz2C6AXcE8oHFFlfZx8_vS4T11xH7R4mc",
  authDomain: "buncolak-86f6f.firebaseapp.com",
  databaseURL: "https://buncolak-86f6f.firebaseio.com",
  projectId: "buncolak-86f6f",
  storageBucket: "buncolak-86f6f.appspot.com",
  messagingSenderId: "466740195592"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
