import firebase from 'firebase'
import 'firebase/storage'  
import '@firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBC4Eb3E-tQbl8qZ0g0yRo4b7-TR1jWK7c",
  authDomain: "vastramproject.firebaseapp.com",
  databaseURL: "https://vastramproject.firebaseio.com",
  projectId: "vastramproject",
  storageBucket: "vastramproject.appspot.com",
  messagingSenderId: "367603430346",
  appId: "1:367603430346:web:fa42d46633a4e5930e9533",
  measurementId: "G-S5TNEEPF8J"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const storage = firebase.storage();

  export {
    storage, firebase as default
  }