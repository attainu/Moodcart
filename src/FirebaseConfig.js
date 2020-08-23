import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPEZkwfmPiccM2gWXRNbr2rXhPmPJ_XKE",
  authDomain: "stey-upadated.firebaseapp.com",
  databaseURL: "https://stey-upadated.firebaseio.com",
  projectId: "stey-upadated",
  storageBucket: "stey-upadated.appspot.com",
  messagingSenderId: "589162593335",
  appId: "1:589162593335:web:20627ba422e39a820413b2",
  measurementId: "G-2CZHFRZ9W0",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// export default firebaseConfig;
export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
