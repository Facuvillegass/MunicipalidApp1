// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  collection,
  getFirestore,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgSeZdLkEoQKURAy1MRC376NlwREYwiyw",
  authDomain: "municipalidapp-bb5af.firebaseapp.com",
  projectId: "municipalidapp-bb5af",
  storageBucket: "municipalidapp-bb5af.appspot.com",
  messagingSenderId: "508242630562",
  appId: "1:508242630562:web:0622836286c3e1a38d84fb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// export const saveTask = (titulo, descripcion) => {
//     addDoc(collection(db, "tasks"),{titulo:titulo, descripcion:descripcion})
// }
