import firebase from 'firebase';
require('@firebase/firestore')



var firebaseConfig = {
    apiKey: "AIzaSyDgrcyUfhBjpHCK7CL_qxB4N8hJy3mRyMg",
    authDomain: "booksanta-cf0e4.firebaseapp.com",
    databaseURL: "https://booksanta-cf0e4.firebaseio.com",
    projectId: "booksanta-cf0e4",
    storageBucket: "booksanta-cf0e4.appspot.com",
    messagingSenderId: "727428882350",
    appId: "1:727428882350:web:3dc423ddab0e6692de723f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();