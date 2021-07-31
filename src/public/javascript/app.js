
let empezar = document.getElementById('empezar')
let cont_inp_comp = document.getElementById('cont-inp-comp')
let comprobar = document.getElementById('comprobar')
let space = document.getElementById('spaceForProblems')
let input = document.getElementById('input')
let spaceResolution = document.getElementById('spaceForResolution')
let correccion = document.getElementById('correcion')
let minHtml = document.getElementById('minutos')
let segHtml = document.getElementById('segundos')
let time = document.getElementById('time')
let siguiente = document.getElementById('siguiente')
let retroceder = document.getElementById('retroceder')

let number

let minutos 
let segundos 

let idTiempo

let apretComprobar = false
let apretSolucion = false
let once = false

let showResolution1
let godOrBad

let rpta

let problemasElegidos

let numeroDeProblema = 0

let soloUnaVez = true

if(materia != 'matematica') {
    problemasElegidos = arrayProblemasPucp.filter(problema => problema.curso == materia)
    mezclarArray(problemasElegidos)

    // variables por curso
    minutos = 2
    segundos = 0
    
} else if(materia == 'matematica'){
    problemasElegidos = arrayProblemasPucp
    mezclarArray(problemasElegidos)

    minutos = 2
    segundos = 0
} else if(materia == 'redaccion') {
    problemasElegidos = arrayProblemasPucp_redaccion
    mezclarArray(problemasElegidos)

    // variables por curso
    minutos = 0
    segundos = 30

} else if(materia == 'lectura') {

    mezclarArray(problemas_lectura)

    for(let i=0; i < problemas_lectura.length; i++) {
        for(let j=0; j < problemas_lectura[i].length; j++) {
            arrayProblemasPucp_lectura.push(problemas_lectura[i][j])
        }
    }

    problemasElegidos = arrayProblemasPucp_lectura

    // variables por curso
    minutos = 0
    segundos = 30

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
            space.innerHTML = "<img class='imgsize' src='" + imgProblema + "' style='max-width: 395px;min-height: 355px; '>"  
            minutos = 2
            segundos = 0
            }if(tipo=='letras'){
               space.innerHTML = "<div class='contenedorletras'><img class='imgsize' src='" + imgProblema + "' style='max-width: 28em;min-height: 355px;width:28em;'></div>"  
               minutos = 0
               segundos = 30
            }

            correrTiempo()


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
    
    if(numeroDeProblema != 0){
        numeroDeProblema--
        input.value = problemasElegidos[numeroDeProblema].alternativaDelUsuario
        input.disabled = problemasElegidos[numeroDeProblema].inputDeshabilitado
        comprobar.style.display = 'inline'
        comprobar.disabled = false

        let imgProblema = problemasElegidos[numeroDeProblema].imgProblema;
        if(tipo=='ciencias'){
        space.innerHTML = "<img class='imgsize' src='" + imgProblema + "' style='max-width: 395px;min-height: 355px; '>"  
        minutos = 2
        segundos = 0
        }if(tipo=='letras'){
           space.innerHTML = "<div class='contenedorletras'><img class='imgsize' src='" + imgProblema + "' style='max-width: 28em;min-height: 355px;width:28em;'></div>"  
           minutos = 0
           segundos = 30
        }

        correrTiempo()
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


function correrTiempo() {
    clearInterval(idTiempo)
    idTiempo = setInterval(cargarSegundo, 1000)
}

function cargarSegundo() {
    if (!(minutos == 0 && segundos == 0)) {
        let txtSegundos

        if(segundos < 0) {
            segundos = 59

        }
    
        if(segundos < 10) {
            txtSegundos = `0${segundos}` ;
          
           
        } else {
            
            txtSegundos = segundos
        }
        
        segHtml.innerHTML = txtSegundos
        segundos--
        cargarMinutos(segundos)
    } else {

            segHtml.innerHTML = "00"
    }
}

function cargarMinutos(segundos){
    let txtMinutos 

    if (segundos == -1 && minutos != 0) {
        setTimeout(()=> {
            minutos-- 
        }, 100) 
    }

    if(minutos < 10) {
        // txtMinutos = `0${minutos}`
        txtMinutos = "0" + minutos
    } else {
        txtMinutos = minutos
    }
    if(minutos==0){if( segundos == 0){document.getElementsByClassName("time")[0].style.backgroundColor = "red"}}
    
    minHtml.innerHTML = txtMinutos
}

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