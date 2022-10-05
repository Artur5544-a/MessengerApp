import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDzwsAka0FRb7aJmbSfar3SPOp1X7vAyC4",
    authDomain: "messenger-app-f5abb.firebaseapp.com",
    projectId: "messenger-app-f5abb",
    storageBucket: "messenger-app-f5abb.appspot.com",
    messagingSenderId: "251234882933",
    appId: "1:251234882933:web:34fc4fb14f32f727dcef3c",
    measurementId: "G-X1KJ2LM58K"
})
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }