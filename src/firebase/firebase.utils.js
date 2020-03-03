import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCldnwgsafxv5iyFT8STEl_Xp-gdQNyPfE",
  authDomain: "crwn-db-a.firebaseapp.com",
  databaseURL: "https://crwn-db-a.firebaseio.com",
  projectId: "crwn-db-a",
  storageBucket: "crwn-db-a.appspot.com",
  messagingSenderId: "207451249509",
  appId: "1:207451249509:web:cc0c2a5fc37a2f029f5f8c",
  measurementId: "G-QT7XNBD9E0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
