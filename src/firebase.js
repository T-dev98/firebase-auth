import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKG31M8M2PAx1ouzJVAGX1fpSmHhzzJKI",
  authDomain: "fir-auth-493e6.firebaseapp.com",
  projectId: "fir-auth-493e6",
  storageBucket: "fir-auth-493e6.appspot.com",
  messagingSenderId: "320536777681",
  appId: "1:320536777681:web:6e6181349d9bda04a7c6f0",
  measurementId: "G-D0EG6VCLLP",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
