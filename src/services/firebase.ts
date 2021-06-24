import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDVhdXabZsU5azY6RsaBE-iRCMOPo58FVM",
  authDomain: "letmeask-andreolv.firebaseapp.com",
  databaseURL: "https://letmeask-andreolv-default-rtdb.firebaseio.com",
  projectId: "letmeask-andreolv",
  storageBucket: "letmeask-andreolv.appspot.com",
  messagingSenderId: "614004808427",
  appId: "1:614004808427:web:3f23dedfceb0f8edf0bcae"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };