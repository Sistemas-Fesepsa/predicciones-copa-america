import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/+esm'
const formIngreso = document.getElementById("formIngreso")
const entrada = document.getElementById("dni")
let asociados =[
        '25621432',
'44426711',
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
'25474808',
'70363378',
'07221292',
'75212742',
'15714389',
'43092645',
'08055784',
'10811990',
'46459049',
'74624883',
'40269276',
'25663056',
'40987791',
'06669210',
'45619743',
'08319683',
'71594948',
'44405611',
'02861456',
'70505504',
'25603428',
'70306677',
'004313870',
'74708835',
'40078546',
'46114714',
'29724441',
'70674671',
'10231172',
'06035151',
'45435374',
'77351144',
'74905413',
'09880087',
'25507904',
'41635639',
'74610126',
'41987866',
'41719990',
'74291662',
'72713217',
'47879170',
'45711654',
'72709982',
'25756772',
'10319347',
'09623208',
'42338793'       
]



let fechaActual = new Date();
let fechaLimite = new Date("2024-06-20T00:00:00");

        

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

