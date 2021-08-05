// variables del tiempo - obtenidas desde el Html
let minutosParticularHtml = document.getElementById('minutosParticularHtml')
let segundosParticularHtml = document.getElementById('segundosParticularHtml')
let minutosGeneralHtml = document.getElementById('minutosGeneralHtml')
let segundosGeneralHtml = document.getElementById('segundosGeneralHtml')
let espacioParaTiempoParticular = document.getElementById('espacioParaTiempoParticular')

// funciones del tiempo
function correrTiempo(grado) {
 
    if(grado=="particular"){
     clearInterval(idTiempoParticular)
     
     idTiempoParticular = setInterval(cargarSegundo, 1000);
     
     }
 if (grado=="general"){
     
     idTiempoGeneral = setInterval(function(){cargarSegundo("general");},1000)}
 }
 
 function cargarSegundo(grado="particular") {
    let minutos,segundos
     if(grado=="general"){minutos=minutosGeneral,segundos=segundosGeneral}//si se llama desde general
    else{minutos=minutosParticular,segundos=segundosParticular}
     if (!(minutos == 0 && segundos == 0)) { //minutos y segundos no son 0000
         let txtSegundos
        
         if(segundos < 0) {  //pasar al siguiente minuto
             segundos = 59
             
         }
     
         if(segundos < 10) {  //tiempo menor a 10
             txtSegundos = `0${segundos}` ;
          
            
         } else {
             
             txtSegundos = segundos
         }
         if(grado=="general"){
             segundosGeneralHtml.innerHTML = txtSegundos  //establecer los seg en el contador
             segundos-- ;segundosGeneral--;if(segundosGeneral<0 && minutosGeneral!=0){segundosGeneral=59};
             cargarMinutos(segundos,minutos,"general");//
             
         }else{
             
         segundosParticularHtml.innerHTML = txtSegundos
         segundos--;segundosParticular--;if(segundosParticular<0 && minutosParticular!=0){segundosParticular=59};
        
         cargarMinutos(segundos,minutos)}
     } else {
            document.getElementsByClassName("time")[0].style.backgroundColor = "red";
            segundosParticularHtml.innerHTML = "00"
            
     }
 }
 
 function cargarMinutos(segundos,minutos,grado="particular"){
     let txtMinutos 
     
     if (segundos == -1 && minutos != 0) {  
         setTimeout(()=> {
             minutos-- ;if(grado=="general"){minutosGeneral--;}else{minutosParticular--}
         }, 100) 
     }
 
     if(minutos < 10) {
         txtMinutos = `0${minutos}`
     } else {
         txtMinutos = minutos
     }
     if (grado =="general"){minutosGeneralHtml.innerHTML = txtMinutos}
    else{minutosParticularHtml.innerHTML = txtMinutos;}
    
 }
