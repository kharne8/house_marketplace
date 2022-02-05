import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBezYGicrYZyH27yIYSoNDCb6YXO9dgzT0',
  authDomain: 'house-marketplace-73d5a.firebaseapp.com',
  projectId: 'house-marketplace-73d5a',
  storageBucket: 'house-marketplace-73d5a.appspot.com',
  messagingSenderId: '336874640695',
  appId: '1:336874640695:web:f8a15fb7a7d5e7b22976b2',
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
