// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq1TuDOX5miExuXYjgkm4h5tChaIUfFJs",
  authDomain: "auth-moha-milon-899ba.firebaseapp.com",
  projectId: "auth-moha-milon-899ba",
  storageBucket: "auth-moha-milon-899ba.appspot.com",
  messagingSenderId: "129609536192",
  appId: "1:129609536192:web:5b8b94854adc9e0f4a1325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth