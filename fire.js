import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgSeZdLkEoQKURAy1MRC376NlwREYwiyw",
  authDomain: "municipalidapp-bb5af.firebaseapp.com",
  projectId: "municipalidapp-bb5af",
  storageBucket: "municipalidapp-bb5af.appspot.com",
  messagingSenderId: "508242630562",
  appId: "1:508242630562:web:0622836286c3e1a38d84fb",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const cargarReclamoEnFirebase = async (
  tituloReclamo,
  categoriaReclamo,
  imagenReclamo,
  latitud,
  longitud
) => {
  await addDoc(collection(db, "tasks"), {
    tituloReclamo: tituloReclamo,
    categoriaReclamo: categoriaReclamo,
    imagenReclamo: imagenReclamo,
    latitud: latitud,
    longitud: longitud,
  }).then((res) => {
    console.log(res);
  });
};

export const cargarNuevoUsuario = async (usuario,pass) => {
  await addDoc(collection(db, "logins"),{
    usuario:usuario,
    pass:pass
  }).then(() =>{
    alert("usuario registrado correctamente")
  })
}

export const recuperarReclamosDeFirebase = async () => {
  const coleccionDeReclamos = collection(db, "tasks");
  const productSnapshot = await getDocs(coleccionDeReclamos);
  const listaReclamos = productSnapshot.docs.map((e) => {
    let producto = e.data();
    producto.id = e.id;
    return producto;
  });
  return listaReclamos;
};

export const recuperarUsuariosRegistrados = async () => {
  const coleccionUsuarios = collection(db,"logins");
  const usersSnapshot = await getDocs(coleccionUsuarios)
  const listaUsuarios = usersSnapshot.docs.map((e) => {
    let usuario = e.data()
    return usuario
  })
  return listaUsuarios
}