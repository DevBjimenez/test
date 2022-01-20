import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider, GoogleAuthProvider,} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

const app = initializeApp({
    apiKey: "AIzaSyBYLjci5ABRMBoSzQ0TuK_ir8LGlotQUpA",
    authDomain: "waco-test-d16c1.firebaseapp.com",
    projectId: "waco-test-d16c1",
    storageBucket: "waco-test-d16c1.appspot.com",
    messagingSenderId: "245624744913",
    appId: "1:245624744913:web:1ae2eb59f61ddc5c794ef0",
    measurementId: "G-4QLPHCDRP0",
});
const auth = getAuth(app)
const googleAuth = new GoogleAuthProvider()
const facebookAuth = new FacebookAuthProvider()
const db = getFirestore(app);


export {auth, googleAuth, facebookAuth, db}
