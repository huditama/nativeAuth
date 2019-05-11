import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "YOUR DETAILS HERE",
    authDomain: "YOUR DETAILS HERE",
    databaseURL: "YOUR DETAILS HERE",
    projectId: "YOUR DETAILS HERE",
    storageBucket: "YOUR DETAILS HERE",
    messagingSenderId: "YOUR DETAILS HERE",
    appId: "YOUR DETAILS HERE"
}

firebase.initializeApp(firebaseConfig)

export default firebase