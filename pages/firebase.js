// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAzjiqZNLbzY02Ngyt-WcSyZcl2lzftjyI',
  authDomain: 'fir-react-tutorial-7b17f.firebaseapp.com',
  projectId: 'fir-react-tutorial-7b17f',
  storageBucket: 'fir-react-tutorial-7b17f.appspot.com',
  messagingSenderId: '343564608056',
  appId: '1:343564608056:web:4838fd6c706807cd96bccd',
  measurementId: 'G-BELMCEN73Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;