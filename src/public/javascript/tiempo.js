// function cargarSegundo() {
//     if (!(minutos == 0 && segundos == 0)) {
//         let txtSegundos

//         if(segundos < 0) {
//             segundos = 59

//         }
    
//         if(segundos < 10) {
//             txtSegundos = `0${segundos}` ;
          
           
//         } else {
            
//             txtSegundos = segundos
//         }
        
//         segHtml.innerHTML = txtSegundos
//         segundos--
//         cargarMinutos(segundos)
//     } else {

//             segHtml.innerHTML = "00"
//     }
// }

// function cargarMinutos(segundos){
//     let txtMinutos 

//     if (segundos == -1 && minutos != 0) {
//         setTimeout(()=> {
//             minutos-- 
//         }, 100) 
//     }

//     if(minutos < 10) {
//         txtMinutos = `0${minutos}`
//     } else {
//         txtMinutos = minutos
//     }
//     if(minutos==0){if( segundos == 0){document.getElementsByClassName("time")[0].style.backgroundColor = "red"}}
    
//     minHtml.innerHTML = txtMinutos
// }