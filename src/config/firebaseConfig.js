import firebase from "firebase/app";
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0mQhtxn6FveD_8J2V5EMSgCw-Va_ljMU",
    authDomain: "evernote-clone-76f25.firebaseapp.com",
    projectId: "evernote-clone-76f25",
    storageBucket: "evernote-clone-76f25.appspot.com",
    messagingSenderId: "361203178145",
    appId: "1:361203178145:web:d541090b0bd49c02522ee0"
  };


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
  