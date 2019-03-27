import firebase from 'firebase'
import 'firebase/database' 

const config = {
    apiKey: "AIzaSyDwnnDUtmIqqrI-4z8P1LSEzAhQ_Fpd4no",
    authDomain: "eventbrite000.firebaseapp.com",
    databaseURL: "https://eventbrite000.firebaseio.com",
    projectId: "eventbrite000",
    storageBucket: "",
    messagingSenderId: "535925099091"
  };

const firebasedb = firebase.initializeApp(config); 
export default firebasedb; 