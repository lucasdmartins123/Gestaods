//configurações do firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_VERCEL_API_KEY,
  authDomain: import.meta.env.VITE_VERCEL_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_VERCEL_PROJECT_ID,
  storageBucket: import.meta.env.VITE_VERCEL_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_VERCEL_MESSAGE_SENDER,
  appId: import.meta.env.VITE_VERCEL_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
