

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDMKUnBTbG0xuh80nSYrPnOdNjbnG1HRnk",
    authDomain: "disney-ec010.firebaseapp.com",
    projectId: "disney-ec010",
    storageBucket: "disney-ec010.appspot.com",
    messagingSenderId: "1047721691333",
    appId: "1:1047721691333:web:5e3b32cf53f970e50b88ac",
    measurementId: "G-KV9LMW1LB6"
  };

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider()

export const siginWithGoogle = ()=>{
    
        signInWithPopup(auth,provider).then((result)=>{
        
            const dp =result.user.photoURL;
           const name =result.user.displayName;

    console.log(name);

    
            localStorage.setItem("profilePic",dp);
            localStorage.setItem("name",name);
            console.log(name);
        }).catch((error)=>{
            console.log(error);
    
        })
    
    }
   



export default db;