import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAxPMxk_rI7hS4UNH9oQgtrmL-x7gwU7ew",
    authDomain: "crud-f045c.firebaseapp.com",
    projectId: "crud-f045c",
    storageBucket: "crud-f045c.appspot.com",
    messagingSenderId: "663791334789",
    appId: "1:663791334789:web:3ab0a1c90e0bf267dc00ec"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)