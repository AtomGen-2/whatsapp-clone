import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDgSXaGdSDX317KIKAy9IaPO_Zt2pyStbo",
    authDomain: "whatsapp-clone-450a3.firebaseapp.com",
    projectId: "whatsapp-clone-450a3",
    storageBucket: "whatsapp-clone-450a3.appspot.com",
    messagingSenderId: "260488281369",
    appId: "1:260488281369:web:01d55817afd50794639988",
    measurementId: "G-WTW2FLJFB0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;