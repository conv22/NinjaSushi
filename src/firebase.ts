import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

const auth = firebase.auth();
const db = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();

const FacebookProvider = new firebase.auth.FacebookAuthProvider();

export { auth, db, GoogleProvider, FacebookProvider };
