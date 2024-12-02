// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRvVjZqpqHa6ZZl-_z0pE2snnW2OFym8A",
  authDomain: "apresentacao10-73ef2.firebaseapp.com",
  projectId: "apresentacao10-73ef2",
  storageBucket: "apresentacao10-73ef2.firebasestorage.app",
  messagingSenderId: "659463617116",
  appId: "1:659463617116:web:2f3534d7d4ede62e538499",
  measurementId: "G-R057MPR0ZJ"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o módulo de autenticação
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail };
export default app;