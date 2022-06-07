import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "****************************",
    authDomain: "****************************",
    projectId: "****************************",
    storageBucket: "****************************",
    messagingSenderId: "****************************",
    appId: "****************************"
})

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export {db , auth}
