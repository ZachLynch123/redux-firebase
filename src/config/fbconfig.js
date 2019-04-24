import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAc9xRkVicM6rtHBmPdJXcV2p6kViRdVSI",
    authDomain: "testproject-e00a0.firebaseapp.com",
    databaseURL: "https://testproject-e00a0.firebaseio.com",
    projectId: "testproject-e00a0",
    storageBucket: "testproject-e00a0.appspot.com",
    messagingSenderId: "80746359528"
  };


  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;