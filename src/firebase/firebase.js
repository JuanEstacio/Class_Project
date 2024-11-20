// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq-5-eN5HGBgLrfzl4hg61fG6cZkP_oKk",
  authDomain: "jeea-react-project.firebaseapp.com",
  projectId: "jeea-react-project",
  storageBucket: "jeea-react-project.firebasestorage.app",
  messagingSenderId: "388605818106",
  appId: "1:388605818106:web:247c729dc26eb2c3c20543"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
