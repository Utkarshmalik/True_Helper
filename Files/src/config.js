import * as firebase from "firebase";
let config = {
    apiKey: "AIzaSyAMrfg-LQOkjgmimMpRxIMJqDBZxECZmDU",
    authDomain: "true-helper-242708.firebaseapp.com",
    databaseURL: "https://true-helper-242708.firebaseio.com",
    projectId: "true-helper-242708",
    storageBucket: "true-helper-242708.appspot.com",
    messagingSenderId: "473915811567",
    appId: "1:473915811567:web:224ab9cece139434"
};
firebase.initializeApp(config);
export const db = firebase.database();
