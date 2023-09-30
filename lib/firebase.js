import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
import "firebase/database"
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const db_fb = firebase.firestore()

export const storage = firebase.storage()


