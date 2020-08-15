import firebase from 'firebase';
firebase.initializeApp({
    apiKey: "AIzaSyBuwjfeGYfL6be4BhpOGpmA4_LvNH_5p5k",
    authDomain: "clone-e0dd0.firebaseapp.com",
    databaseURL: "https://clone-e0dd0.firebaseio.com",
    projectId: "clone-e0dd0",
    storageBucket: "clone-e0dd0.appspot.com",
    messagingSenderId: "227104501150",
    appId: "1:227104501150:web:09145e2de4137164b8ba8f",
    measurementId: "G-PLG0WRECBL"
  })

//   const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};