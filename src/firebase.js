import fb from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATiOsiNpqRUps_9_OlTVOZ7Tb3LSEJPDM",
  authDomain: "login-example-login.firebaseapp.com",
  projectId: "login-example-login",
  storageBucket: "login-example-login.appspot.com",
  messagingSenderId: "55337010810",
  appId: "1:55337010810:web:e22811ec3164e4b736ddc3"
};
// Initialize Firebase
fb.initializeApp(firebaseConfig);

const db = fb.firestore()
const auth = fb.auth()

export { db, auth }