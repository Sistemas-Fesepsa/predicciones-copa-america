 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 import { 
    getFirestore ,
    collection, 
    onSnapshot,
    addDoc,
    doc,
    updateDoc,
    deleteDoc
    }
from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js"
 // Your web app's Firebase configuration
 const firebaseConfig = {
  /*
  apiKey: "AIzaSyDnF12J-DEpIsSpqqoJdOMygYlrdTnWikE",
  authDomain: "predicciones-copa-americ-a6e02.firebaseapp.com",
  databaseURL: "https://predicciones-copa-americ-a6e02-default-rtdb.firebaseio.com",
  projectId: "predicciones-copa-americ-a6e02",
  storageBucket: "predicciones-copa-americ-a6e02.appspot.com",
  messagingSenderId: "1017496012098",
  appId: "1:1017496012098:web:3eb730c0b8741184f8f4db",
  measurementId: "G-59TFKYKLPD"
  */
  //antigua xd
   apiKey: "AIzaSyB2NvxYcVC0maI1SoweqdqOKlRoEgtYpBs",
   authDomain: "predictorpartidos.firebaseapp.com",
   projectId: "predictorpartidos",
   storageBucket: "predictorpartidos.appspot.com",
   messagingSenderId: "675358672788",
   appId: "1:675358672788:web:be8107e408b79c2aa43181"
  
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 

//Inicializar BASE DE DATOS
const db = getFirestore(app)


//CRUD 
export const  crearPrediccion = (prediccion,coleccion) => addDoc(collection(db,coleccion),prediccion) 

export const  leerDatos = (coleccion,fcFlecha)  => onSnapshot(collection(db,coleccion),fcFlecha)

export const cambiarEstadoPrediccion = (coleccion,referencia,estadoActualizado) => updateDoc(doc(db,coleccion,referencia),estadoActualizado)

export const eliminarPrediccion = (referencia) => deleteDoc(doc(db,"prediccions",referencia))

