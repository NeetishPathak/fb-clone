// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAAK1tQpS2bITjCMjbG1DAbg3iqooRFcWg',
  authDomain: 'facebook-clone-76aa2.firebaseapp.com',
  databaseURL: 'https://facebook-clone-76aa2.firebaseio.com',
  projectId: 'facebook-clone-76aa2',
  storageBucket: 'facebook-clone-76aa2.appspot.com',
  messagingSenderId: '547795553221',
  appId: '1:547795553221:web:601229827b3b0f2daa59ac',
  measurementId: 'G-SGEJZWS2DP',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
