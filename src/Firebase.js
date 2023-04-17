import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtNjU371r-pHpcAY5AHdgyVtv2Zo9PdOg",
    authDomain: "netflix-ba69e.firebaseapp.com",
    projectId: "netflix-ba69e",
    storageBucket: "netflix-ba69e.appspot.com",
    messagingSenderId: "976895829367",
    appId: "1:976895829367:web:635fb777846540315fad72"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)

  }

  export default firebase