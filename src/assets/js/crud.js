import {
  crearPrediccion
} from '../../db/firebase.js'
import { 
  serverTimestamp
  }
from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js"
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/+esm'

// let fechaActual = new Date();
// //let anio = fechaActual.getFullYear();
// //let mes = fechaActual.getMonth() + 1; // Los meses se indexan desde 0 (enero) hasta 11 (diciembre)
// let dia = fechaActual.getDate();
// let hora = fechaActual.getHours();
// let minutos = fechaActual.getMinutes();

const btnRegistrarPrediccion = document.getElementById("btn-prediccion");
const btnSalir = document.getElementById("salir")

// PRIMERA RONDA 
const colombia_peru = document.getElementById("colombia-peru")
const peru_colombia = document.getElementById("peru-colombia")

//SEGUNDA RONDA
//const peru_brasil = document.getElementById("peru-brasil") 
//const brasil_peru = document.getElementById("brasil-peru") 

//TERCERA RONDA
const ecuador_peru = document.getElementById("ecuador-peru") 
const peru_ecuador = document.getElementById("peru-ecuador") 

//CUARTA RONDA
const peru_uruguay = document.getElementById("peru-uruguay")
const uruguay_peru = document.getElementById("uruguay-peru")

//QUINTA RONDA
//const bolivia_peru = document.getElementById("bolivia-peru")
//const peru_bolivia = document.getElementById("peru-bolivia")

//SEXTA RONDA
//const peru_venezuela = document.getElementById("peru-venezuela")
//const venezuela_peru = document.getElementById("venezuela-peru")


btnSalir.onclick = function(){
  localStorage.removeItem("DNI")
  location.href = "../../index.html"
}

let dni = localStorage.getItem("DNI");
if(!dni){
   location.href = "../../index.html"
}
 

// BLOQUEANDO ELEMENTOS 

//BLOQUEO SEGUNDA FECHA
uruguay_peru.disabled = "true"
uruguay_peru.style.background = "#ccc"

peru_uruguay.disabled = "true"
peru_uruguay.style.background = "#ccc"



//BLOQUEO PRIMERA FECHA
colombia_peru.disabled = "true"
colombia_peru.style.background = "#ccc"

peru_colombia.disabled = "true"
peru_colombia.style.background = "#ccc"


//BLOQUEO TERCERA FECHA
//ecuador_peru.disabled = "true"
//ecuador_peru.style.background = "#ccc"

//peru_ecuador.disabled = "true"
//peru_ecuador.style.background = "#ccc"

//BLOQUEO QUINTA FECHA
//bolivia_peru.disabled = "true"
//bolivia_peru.style.background = "#ccc"

//peru_bolivia.disabled = "true"
//peru_bolivia.style.background = "#ccc"

//BLOQUEO SEXTA FECHA
//peru_venezuela.disabled = "true"
//peru_venezuela.style.background = "#ccc"

//venezuela_peru.disabled = "true"
//venezuela_peru.style.background = "#ccc"


btnRegistrarPrediccion.onclick = async function(){
 
    let fechaActual = new Date();
    let fechaLimite = new Date("2024-09-10T15:30:00");
    
   
    
    if(fechaActual>=fechaLimite){
        Swal.fire({
            icon: 'error',
            title: 'Predicciones Cerradas',
            text: 'Mejor suerte para la próxima'
          })
        return;
    }


    
   const objetoPrediccion = {
         dni: localStorage.getItem("DNI"),
         fecha: serverTimestamp(),
        marcadorPeru: peru_ecuador.value,         
         marcadorEcuador: ecuador_peru.value
   }

    btnRegistrarPrediccion.disabled = "true"
    btnRegistrarPrediccion.style.opacity = "0.3" 
    
    await crearPrediccion(objetoPrediccion,"predicciones11")
    
    
    Swal.fire(
        'Predicción Registrada',
        ' ',
        'success'
      )

      btnRegistrarPrediccion.disabled = "true"
      btnRegistrarPrediccion.style.opacity = "1" 
      
}

// obtenerPredicciones(localStorage.getItem("DNI"))


// async function obtenerPredicciones(dni){
//       await leerDatos("predicciones",(predicciones)=>{
//             predicciones.docs.forEach(prediccion => {
//                 if(prediccion.data().dni == dni){
//                     console.log(prediccion.data());
//                 }
//             });;
//       })
// }

// let dataParaguayPeru =  obtenerResultados("paraguay-peru")

// console.log(dataParaguayPeru);

// async function obtenerResultados(partido){
//      await leerDatos("resultados",(resultados)=>{
//           resultados.docs.forEach(resultado=>{
//               if(resultado.data().Partido == partido){
//                  return resultado.data()
//               }
//           })
//      })
// }


