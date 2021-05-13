import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCGUkjDD7fXCaUTM7uTwh4Fngrf7G3b2bk",
    authDomain: "udemy-vue-firebase-sites-7634a.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-7634a",
    storageBucket: "udemy-vue-firebase-sites-7634a.appspot.com",
    messagingSenderId: "411885645208",
    appId: "1:411885645208:web:246d078aeb1cca030a4fed"
  }

  firebase.initializeApp(firebaseConfig)


  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth,projectFirestore, timestamp }