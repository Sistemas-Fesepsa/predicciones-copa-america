import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/+esm'
const formIngreso = document.getElementById("formIngreso")
const entrada = document.getElementById("dni")
let asociados =[
      '44426711',
'62649602',
'70108044',
'74315224',
'07795717',
'71419766',
'43050218',
'73615248',
'46074124',
'70598641',
'10028032',
'71701474',
'71996517',
'45473989',
'09886555',
'07221292',
'25794616',
'75841091',
'75212742',
'15714389',
'42193374',
'08055784',
'10811990',
'46459049',
'80282727',
'74624883',
'25663056',
'40987791',
'06669210',
'42721560',
'45619743',
'08319683',
'44374887',
'77388960',
'75499311',
'42445746',
'10141115',
'02861456',
'40273541',
'10874560',
'74708835',
'46114714',
'41622783',
'10231172',
'06035151',
'77026168',
'77351144',
'25507904',
'41635639',
'74610126',
'41719990',
'74291662',
'42855444',
'72713217',
'47879170',
'41985113',
'45711654',
'72724181',
'74918449',
'72656822',
'76871681',
'45141717',
'09623208',
'46740138',
'72215125'

]



let fechaActual = new Date();
let fechaLimite = new Date("2024-09-08T00:00:00");

        

formIngreso.addEventListener("submit",(e)=>{
        e.preventDefault()
        let abrir = false;
        for (let i=0;i<asociados.length;i++){
                if(asociados[i]==entrada.value){
                        abrir=true
                }
        }

       if(fechaActual>=fechaLimite){
                if(abrir==true){
                        localStorage.setItem("DNI",formIngreso["dni"].value)
                        window.location.href = "./src/views/paginaMarcador.html"
                }else{
                        Swal.fire({
                                icon: 'error',
                                title: 'DNI no válido',
                                text: 'No perteneces a la organización'
                        })   
                }
       }else{
        Swal.fire({
                icon: 'error',
                title: 'Sistema Inhabilitado',
                text: 'El sistema estará habilitado a partir del 22 desde las 12:00 horas'
        })   
       }

  
        
})

