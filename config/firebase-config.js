import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyC0tHkLfEB4VFJziXBqTOJumYBOaj9yA8A',
  authDomain: 'devmarket-f7200.firebaseapp.com',
  projectId: 'devmarket-f7200',
  storageBucket: 'devmarket-f7200.appspot.com',
  messagingSenderId: '849188210586',
  appId: '1:849188210586:web:2cb4a6f854ac180fdadc23',
  measurementId: 'G-9NKE63D21E',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
