import firebase from 'firebase'
import 'firebase/storage'  
import '@firebase/storage';
import "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyCgOeaeq8HkJ-vP4jITkXm4qKWNgBcUjGU",
  authDomain: "travelcrest2020.firebaseapp.com",
  databaseURL: "https://travelcrest2020.firebaseio.com",
  projectId: "travelcrest2020",
  storageBucket: "travelcrest2020.appspot.com",
  messagingSenderId: "863462935795",
  appId: "1:863462935795:web:973b17ec676e222e817b86",
  measurementId: "G-7W7FPDYKSL"
};
  // Initialize Firebase
  const initializedApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const storage = firebase.storage();
  const messaging = initializedApp.messaging();
  messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
      "BAklw-EFB64Tk3ItZPnkvm3xDbNE0a84p0Dferg44cRHRgbK9UWNxYiosyd90W4cN15YvEfDS9mm5rO50mhExiI"
      );
  export {
    storage, messaging,  firebase as default
  }