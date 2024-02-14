import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyA3VSdqgaaKoxq9j161EAdeZUr4XwhSJE0",
  
    authDomain: "eccommerce-a39ea.firebaseapp.com",
  
    projectId: "eccommerce-a39ea",
  
    storageBucket: "eccommerce-a39ea.appspot.com",
  
    messagingSenderId: "720446346650",
  
    appId: "1:720446346650:web:acdbcfbb033ea4386f5623",
  
    measurementId: "G-TM6VCS3273"
  
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };