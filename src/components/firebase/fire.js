import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDix5-18drC1I0n4XZqIvVvPXuOrDjQ-bc',
  authDomain: 'fireauth-7d48c.firebaseapp.com',
  databaseURL: 'https://fireauth-7d48c.firebaseio.com',
  projectId: 'fireauth-7d48c',
  storageBucket: 'fireauth-7d48c.appspot.com',
  messagingSenderId: '687087172494',
  appId: '1:687087172494:web:1cec6bc5bd9096c9dd42df',
  measurementId: 'G-L83M7QQQ6X'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
