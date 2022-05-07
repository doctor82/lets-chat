
//ADD YOUR FIREBASE LINKS HERE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1BUrMnLYg0FzZq9YSuTUO14a9D7Lgtos",
  authDomain: "lets-chat-1bb2b.firebaseapp.com",
  databaseURL: "https://lets-chat-1bb2b-default-rtdb.firebaseio.com",
  projectId: "lets-chat-1bb2b",
  storageBucket: "lets-chat-1bb2b.appspot.com",
  messagingSenderId: "1054119773149",
  appId: "1:1054119773149:web:2739421d22ff7fb910ac34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
