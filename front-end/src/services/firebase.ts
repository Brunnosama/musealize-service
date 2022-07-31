import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3D9aJKCp93_Hfo6oBPEgDtvbchA8wG7U",
  authDomain: "musealize-f3255.firebaseapp.com",
  projectId: "musealize-f3255",
  storageBucket: "musealize-f3255.appspot.com",
  messagingSenderId: "1056358756744",
  appId: "1:1056358756744:web:99d84faf9baee69f100a3d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)