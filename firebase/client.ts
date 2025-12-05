
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  authDomain: "nextprep-be126.firebaseapp.com",
  projectId: "nextprep-be126",
  storageBucket: "nextprep-be126.firebasestorage.app",
  messagingSenderId: "1014180916980",
  appId: "1:1014180916980:web:d7b584f4b1dff90d12f8a1",
  measurementId: "G-CQEKHBH44F"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
