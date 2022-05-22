import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,

    apiKey: "AIzaSyCDlXOcaBUFQ_9cK9L7X5tW_k6m46Q6KRY",
    authDomain: "parts-manufacturer.firebaseapp.com",
    projectId: "parts-manufacturer",
    storageBucket: "parts-manufacturer.appspot.com",
    messagingSenderId: "796737479018",
    appId: "1:796737479018:web:8eb5c91f20c7b8bb660513"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;