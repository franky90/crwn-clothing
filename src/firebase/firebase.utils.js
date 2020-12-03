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

  export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log("Error creating user", error.message);
      }
    }
    return userRef;
  }



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;