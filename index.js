import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/+esm'
const formIngreso = document.getElementById("formIngreso")
const entrada = document.getElementById("dni")
let asociados =[
        '25621432',
'44426711',
'70108044',
'74315224',
'25741815',
'07795717',
'07786355',
'46074124',
'21812015',
'70438689',
'10028032',
'71701474',
'45473989',
'71528821',
'25474808',
'07221292',
'25794616',
'75338823',
'75212742',
'15714389',
'42193374',
'43092645',
'08055784',
'10811990',
'46459049',
'25663056',
'40987791',
'06669210',
'42721560',
'45619743',
'08319683',
'71594948',
'44405611',
'02861456',
'25603428',
'40273541',
'77342237',
'74708835',
'40078546',
'46114714',
'29724441',
'70674671',
'10231172',
'06035151',
'45435374',
'77351144',
'09880087',
'25507904',
'41635639',
'74610126',
'41987866',
'41719990',
'74291662',
'47879170',
'45711654',
'74918449',
'25756772',
'76871681',
'09623208',
'42338793',
'70598641',
'71531179',
'72562657',
'75499311'
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

