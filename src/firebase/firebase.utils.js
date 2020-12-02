import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyCGEA5kq1TSNwLY_ZLD-NI_YMqU2z7eJ2k",
    authDomain: "crwn-db-adb89.firebaseapp.com",
    databaseURL: "https://crwn-db-adb89.firebaseio.com",
    projectId: "crwn-db-adb89",
    storageBucket: "crwn-db-adb89.appspot.com",
    messagingSenderId: "804242710462",
    appId: "1:804242710462:web:826e04b95041b24a9ae3ef",
    measurementId: "G-03Q24J1MPP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;