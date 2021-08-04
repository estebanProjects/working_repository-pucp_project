
let empezar = document.getElementById('empezar')
let cont_inp_comp = document.getElementById('cont-inp-comp')
let comprobar = document.getElementById('comprobar')
let space = document.getElementById('spaceForProblems')
let input = document.getElementById('input')
let spaceResolution = document.getElementById('spaceForResolution')
let correccion = document.getElementById('correcion')
let minHtml = document.getElementById('minutos')
let segHtml = document.getElementById('segundos')
let minHtmlGeneral = document.getElementById('minutos2')
let segHtmlGeneral = document.getElementById('segundos2')
let time = document.getElementById('time')
let siguiente = document.getElementById('siguiente')
let retroceder = document.getElementById('retroceder')

let number

let minutosParcial 
let segundosParcial 

let minutosGeneral
let segundosGeneral

let idTiempo
let idTiempoGeneral

let apretComprobar = false
let apretSolucion = false
let once = false

let showResolution1
let godOrBad

let rpta

let problemasElegidos

let numeroDeProblema = 0

let soloUnaVez = true
let minutoDeGracia = 1

if(materia == 'aritmetica' || materia == 'algebra' || materia == 'geometria') {
    problemasElegidos = arrayProblemasPucp.filter(problema => problema.curso == materia)
    mezclarArray(problemasElegidos)

    // VARIABLES POR CURSO***
    minutosParcial = 2
    segundosParcial = 0
    minutosGeneral = problemasElegidos.length*2 + minutoDeGracia 
    segundosGeneral = 0
} else if(materia == 'matematica'){
    problemasElegidos = arrayProblemasPucp
    mezclarArray(problemasElegidos)

    minutosParcial = 2
    segundosparcial = 0
    minutosGeneral = problemasElegidos.length*2 + minutoDeGracia 
    segundosGeneral = 0
} else if(materia == 'redaccion') {
    problemasElegidos = arrayProblemasPucp_redaccion
    mezclarArray(problemasElegidos)

    // variables por curso
    minutosParcial = 0
    segundosParcial = 30
    minutosGeneral = 0 
    segundosGeneral = problemasElegidos.length*30  
    regularizarTiempo()

} else if(materia == 'lectura') {

    mezclarArray(problemas_lectura)

    for(let i=0; i < problemas_lectura.length; i++) { // pone todos los problemas de lectura en un array
        for(let j=0; j < problemas_lectura[i].length; j++) {
            arrayProblemasPucp_lectura.push(problemas_lectura[i][j])
        }
    }

    problemasElegidos = arrayProblemasPucp_lectura

    // variables por curso
    minutosParcial = 0
    segundosParcial = 30
    minutosGeneral = 0 
    segundosGeneral = problemasElegidos.length*30  
    regularizarTiempo()
}

console.log(problemasElegidos)

let lenghtInicial = problemasElegidos.length

empezar.addEventListener('click', empezarF)
siguiente.addEventListener('click', siguienteF)
comprobar.addEventListener('click', comprobarF)
retroceder.addEventListener('click', retrocederF)

// boton empezar
function empezarF() {
    empezar.style.display = 'none'
    cont_inp_comp.style.display = 'flex'
    siguiente.style.display = 'inline'
    retroceder.style.display = 'inline'

    siguienteF()
}

let cont = 0

let buenas = 0
let malas = 0
let blanco = 0


function siguienteF() {
    if((problemasElegidos.length != numeroDeProblema+1) || ((numeroDeProblema == problemasElegidos.length - 1) && (apretSolucion == true)))  {    
        console.log('caray')
        comprobar.style.display = 'inline'
        

        if((apretComprobar == false || apretSolucion == false) && once == true) {
            rpta = input.value.toLowerCase().trim()
            determinarEstadoDeLosProblemas()
            problemasElegidos[numeroDeProblema].alternativaDelUsuario = rpta
            numeroDeProblema++
            console.log('pase por aqui')
        } else {
            once = true
        }
    
        apretComprobar = false
        apretSolucion = false
        if(numeroDeProblema != problemasElegidos.length) {
            input.disabled = problemasElegidos[numeroDeProblema].inputDeshabilitado
        }

        if(problemasElegidos.length != numeroDeProblema) {
            let imgProblema = problemasElegidos[numeroDeProblema].imgProblema;
            if(tipo=='ciencias'){
            space.innerHTML = "<div class='contenedorciencias'><img class='imgsize' src='" + imgProblema + "></div>"  
            minutos = 2
            segundos = 0
            }if(tipo=='letras'){
               space.innerHTML = "<div class='contenedorletras'><img class='imgsize' src='" + imgProblema + "></div>"  
               minutos = 0
               segundos = 30
            }

            correrTiempo("normal");


            input.value = problemasElegidos[numeroDeProblema].alternativaDelUsuario
        } else {
            console.log("PAPA")
            // capturando los datos del ultimo problema
            rpta = input.value.toLowerCase().trim()
            numeroDeProblema--
            determinarEstadoDeLosProblemas()
            problemasElegidos[numeroDeProblema].alternativaDelUsuario = rpta
            
            time.innerHTML = "¡Terminaste!"
            input.disabled = true
            // comprobar.style.display = 'none'
            comprobar.disabled = true

            if (soloUnaVez == true) {
                contadorDeCorrectasIncorrectas()
                soloUnaVez = false
            }
            space.innerHTML = "<p>Tuviste <strong>" + buenas + "</strong> correctas <i class='fas fa-check-circle'></i></p>" + "<p>Tuviste <strong>" + malas + "</strong> incorrectas <i class='fas fa-times-circle'></i></p>" + "<p>Dejaste <strong>" + blanco + "</strong> en blanco <i class='fas fa-circle'></i></p>"
            numeroDeProblema++
            clearInterval(idTiempo)

            for(let i=0; i<problemasElegidos.length; i++) {
                problemasElegidos[i].inputDeshabilitado = true
            }
        }
        
        
        correccion.innerHTML = "Corrección"
        spaceResolution.innerHTML = "Solución"

    
    } else {
        console.log("Cebolla")
        // capturando los datos del ultimo problema
        rpta = input.value.toLowerCase().trim()
        determinarEstadoDeLosProblemas()
        problemasElegidos[numeroDeProblema].alternativaDelUsuario = rpta

        time.innerHTML = "¡Terminaste!"
        input.disabled = true
        // comprobar.style.display = 'none'
        comprobar.disabled = true

        if (soloUnaVez == true) {
            contadorDeCorrectasIncorrectas()
            soloUnaVez = false
        }
        space.innerHTML = "<p>Tuviste <strong>" + buenas + "</strong> correctas <i class='fas fa-check-circle'></i></p>" + "<p>Tuviste <strong>" + malas + "</strong> incorrectas <i class='fas fa-times-circle'></i></p>" + "<p>Dejaste <strong>" + blanco + "</strong> en blanco <i class='fas fa-circle'></i></p>"
        numeroDeProblema++
        clearInterval(idTiempo)

        for(let i=0; i<problemasElegidos.length; i++) {
            problemasElegidos[i].inputDeshabilitado = true
        }

        correccion.innerHTML = "Corrección"
        spaceResolution.innerHTML = "Solución"
    };
    document.getElementsByClassName("time")[0].style.backgroundColor = "yellow"; /*ESTO HARA QUE EL BACKGROUND COLOR VUELVA A YELLOW*/
    comprobar.disabled = false
}

function retrocederF() {
    console.log('sd')
    if(numeroDeProblema != 0){
        numeroDeProblema--
        input.value = problemasElegidos[numeroDeProblema].alternativaDelUsuario
        input.disabled = problemasElegidos[numeroDeProblema].inputDeshabilitado
        comprobar.style.display = 'inline'
        comprobar.disabled = false

        let imgProblema = problemasElegidos[numeroDeProblema].imgProblema;
        if(tipo=='ciencias'){
        space.innerHTML = "<img class='imgsize' src='" + imgProblema + "' style='max-width: 395px;min-height: 355px; '>"  
        minutosParcial = 2
        segundosParcial = 0
        }if(tipo=='letras'){
           space.innerHTML = "<div class='contenedorletras'><img class='imgsize' src='" + imgProblema + "' style='max-width: 28em;min-height: 355px;width:28em;'></div>"  
           minutosParcial = 0
           segundosParcial = 30
        }

        correrTiempo("normal");
    }
    
}



function comprobarF() {
    comprobar.style.display = 'none'
    rpta = input.value.toLowerCase().trim()
    problemasElegidos[numeroDeProblema].alternativaDelUsuario = rpta

    if(problemasElegidos[numeroDeProblema].respuesta == rpta) {
        correccion.innerHTML = "<p class='god' id='god'>¡Correcto!</p>" + "<a class='showResolution' id='showResolution'> Ver solución </a>"
        showResolution1 = document.getElementById('showResolution')
        godOrBad = document.getElementById('god')
        showResolution1.addEventListener('click', mostrarSolucion)
    } else {
        correccion.innerHTML ="<p class='bad' id='bad'>¡Incorrecto!<p>" + "<a class='showResolution' id='showResolution'> Ver resolución </a> "
        showResolution1 = document.getElementById('showResolution')
        godOrBad = document.getElementById('bad')
        showResolution1.addEventListener('click', mostrarSolucion)
    }

    apretComprobar = true
    input.disabled = true
    problemasElegidos[numeroDeProblema].inputDeshabilitado = true

    clearInterval(idTiempo)
}

function mostrarSolucion() {

    
    let imgResolucion = problemasElegidos[numeroDeProblema].imgResolucion
    spaceResolution.innerHTML = "<img class='imgResolutionSize' src='" + imgResolucion + "'>"


    determinarEstadoDeLosProblemas()
    numeroDeProblema++
    console.log('Yuju')
    
    apretSolucion = true

    showResolution1.style.display = 'none'
    godOrBad.style.marginBottom = "0"
}

function determinarEstadoDeLosProblemas() {
    if(problemasElegidos[numeroDeProblema].respuesta == rpta) {
        problemasElegidos[numeroDeProblema].estado = "correcto"

    } else if(rpta == "") {
        problemasElegidos[numeroDeProblema].estado = "blanco"

    } else if(problemasElegidos[numeroDeProblema].respuesta != rpta) {
        problemasElegidos[numeroDeProblema].estado = "incorrecto"
    }
}
            //SECCION TIEMPO***
correrTiempo("general");

function correrTiempo(grado) {
 
   if(grado=="normal"){
    clearInterval(idTiempo)
    
    idTiempo = setInterval(cargarSegundo, 1000);
    
    }
if (grado=="general"){
    
    idTiempoGeneral = setInterval(function(){cargarSegundo("general");},1000)}
}

function cargarSegundo(grado="normal") {
   let minutos,segundos
    if(grado=="general"){minutos=minutosGeneral,segundos=segundosGeneral}//si se llama desde general
   else{minutos=minutosParcial,segundos=segundosParcial}
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
            segHtmlGeneral.innerHTML = txtSegundos  //establecer los seg en el contador
            segundos-- ;segundosGeneral--;if(segundosGeneral<0 && minutosGeneral!=0){segundosGeneral=59};
            cargarMinutos(segundos,minutos,"general");//
            
        }else{
            
        segHtml.innerHTML = txtSegundos
        segundos--;segundosParcial--;if(segundosParcial<0 && minutosParcial!=0){segundosParcial=59};
       
        cargarMinutos(segundos,minutos)}
    } else {
           document.getElementsByClassName("time")[0].style.backgroundColor = "red";
           segHtml.innerHTML = "00"
           
    }
}

function cargarMinutos(segundos,minutos,grado="normal"){
    let txtMinutos 
    
    if (segundos == -1 && minutos != 0) {  
        setTimeout(()=> {
            minutos-- ;if(grado=="general"){minutosGeneral--;}else{minutosParcial--}
        }, 100) 
    }

    if(minutos < 10) {
        txtMinutos = `0${minutos}`
    } else {
        txtMinutos = minutos
    }
    if (grado =="general"){minHtmlGeneral.innerHTML = txtMinutos}
   else{minHtml.innerHTML = txtMinutos;}
   
}
function regularizarTiempo() {
    if(segundosGeneral >= 60) {
        while(segundosGeneral >= 60) {
          segundosGeneral = segundosGeneral - 60
          minutosGeneral += 1
        }
    }
}

      // SECCION PREGUNTAS****

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function mezclarArray(inputArray){ // funcion para aleatorizar los problemas
    inputArray.sort(()=> Math.random() - 0.5);
}

function contadorDeCorrectasIncorrectas() {
        for(let i=0; i < problemasElegidos.length; i++){
            if(problemasElegidos[i].estado == "correcto"){
                buenas++
            } else if(problemasElegidos[i].estado == "blanco"){
                blanco++
            } else if(problemasElegidos[i].estado == "incorrecto"){
                malas++
            }
        }
}

