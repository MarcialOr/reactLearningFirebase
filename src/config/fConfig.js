import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAzBnNcLVWBAAI9ZHdf0O_kIRRDwBZPBWc",
    authDomain: "marcial-a3532.firebaseapp.com",
    databaseURL: "https://marcial-a3532.firebaseio.com",
    projectId: "marcial-a3532",
    storageBucket: "marcial-a3532.appspot.com",
    messagingSenderId: "175827153331",
    appId: "1:175827153331:web:9d6679853a9671723e1bc6",
    measurementId: "G-2NETFT7V31"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})
  firebase.analytics();

  export default firebase;