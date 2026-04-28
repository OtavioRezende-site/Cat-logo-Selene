import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCseJ_K5M687Gu3ZWtT_J0UT0TnDEhIaQQ",
  authDomain: "project-741abe1b-88ad-4f1b-b30.firebaseapp.com",
  projectId: "project-741abe1b-88ad-4f1b-b30",
  storageBucket: "project-741abe1b-88ad-4f1b-b30.firebasestorage.app",
  messagingSenderId: "1052145645806",
  appId: "1:1052145645806:web:cb484d9e7f1f59f3475bff",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, "ai-studio-2cea4b2d-535b-4511-813c-a42939eb0ea4");
