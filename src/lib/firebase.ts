import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA5Loga4NkrqufUSU9HQWCau06iwrwRL2M",
  authDomain: "day2day-658da.firebaseapp.com",
  projectId: "day2day-658da",
  storageBucket: "day2day-658da.firebasestorage.app",
  messagingSenderId: "797341848711",
  appId: "1:797341848711:web:22f17e25b41c36dd0a9422",
  measurementId: "G-22VNSJE7H8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
