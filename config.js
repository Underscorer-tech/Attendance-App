 import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyCx9wVOofeE3BWVA-yNAAhztPJZwxA1LfM",
    authDomain: "attendance-app-1783d.firebaseapp.com",
    databaseURL: "https://attendance-app-1783d-default-rtdb.firebaseio.com",
    projectId: "attendance-app-1783d",
    storageBucket: "attendance-app-1783d.appspot.com",
    messagingSenderId: "153345946589",
    appId: "1:153345946589:web:0c52c75012b4d33a2bbc34"
  };
  // Initialize Firebase
  if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  