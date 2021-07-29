
let empezar = document.getElementById('empezar')
let cont_inp_comp = document.getElementById('cont-inp-comp')
let siguiente = document.getElementById('siguiente')
let comprobar = document.getElementById('comprobar')
let space = document.getElementById('spaceForProblems')
let input = document.getElementById('input')
let spaceResolution = document.getElementById('spaceForResolution')
let correccion = document.getElementById('correcion')
let minHtml = document.getElementById('minutos')
let segHtml = document.getElementById('segundos')
let time = document.getElementById('time')

let number

let minutos = 2
let segundos = 0

let idTiempo

let apretado = false
let apretSolucion = false
let once = false

let showResolution1
let godOrBad

let rpta

let problemasElegidos
let tipo="letras" /* esta variable depende del tipo de problema que haya elegido el usuario,intenta crearla xd,luego puedes usarla para el tiempo y etc*/

if(materia != 'matematica') {
    problemasElegidos = arrayProblemasPucp.filter(problema => problema.curso == materia)
} else if(materia == 'matematica') {
    problemasElegidos = arrayProblemasPucp
}

console.log(problemasElegidos)

let lenghtInicial = problemasElegidos.length

empezar.addEventListener('click', empezarF)
siguiente.addEventListener('click', siguienteF)
comprobar.addEventListener('click', comprobarF)

// boton empezar
function empezarF() {
    empezar.style.display = 'none'
    cont_inp_comp.style.display = 'flex'
    siguiente.style.display = 'inline'

    siguienteF()
}

let cont = 0

let buenas = 0
let malas = 0
let blanco = 0


function siguienteF() {
    if(problemasElegidos.length > 0) {

        comprobar.style.display = 'inline'

        if((apretado == false || apretSolucion == false) && once == true) {
            rpta = input.value.toLowerCase().trim()
            console.log(problemasElegidos[number].respuesta)
            acumulacionBuenasMalasBlanco()

            problemasElegidos.splice(number, 1)
            cont++
        } else {
            once = true
        }
    
        apretado = false
        apretSolucion = false
        input.disabled = false
        
        number = randomNumber(0, problemasElegidos.length)

        if(cont < lenghtInicial) {
            let imgProblema = problemasElegidos[number].imgProblema
           /* if(tipo=ciencias){*/
           /* space.innerHTML = "<img class='imgsize' src='" + imgProblema + "' style='max-width: 395px;min-height: 355px; '>"  
            /*}if(tipo=letras){*/
               space.innerHTML = "<div class='contenedorletras'><img class='imgsize' src='" + imgProblema + "' style='max-width: 28em;min-height: 355px;width:28em;'></div>"  
            /*}*/
            minutos = 2
            segundos = 0
            correrTiempo()

        } else {
            time.innerHTML = "¡Terminaste!"
            input.disabled = true
            comprobar.style.display = 'none'

            space.innerHTML = "<p>Tuviste <strong>" + buenas + "</strong> correctas <i class='fas fa-check-circle'></i></p>" + "<p>Tuviste <strong>" + malas + "</strong> incorrectas <i class='fas fa-times-circle'></i></p>" + "<p>Dejaste <strong>" + blanco + "</strong> en blanco <i class='fas fa-circle'></i></p>"
            clearInterval(idTiempo)
        }
        
        
        input.value = ""
        correccion.innerHTML = "Corrección"
        spaceResolution.innerHTML = "Solución"

    
    } else {
        time.innerHTML = "¡Terminaste!"
        input.disabled = true
        comprobar.style.display = 'none'

        space.innerHTML = "<p>Tuviste <strong>" + buenas + "</strong> correctas <i class='fas fa-check-circle'></i></p>" + "<p>Tuviste <strong>" + malas + "</strong> incorrectas <i class='fas fa-times-circle'></i></p>" + "<p>Dejaste <strong>" + blanco + "</strong> en blanco <i class='fas fa-circle'></i></p>"
        clearInterval(idTiempo)

        correccion.innerHTML = "Corrección"
        spaceResolution.innerHTML = "Solución"
    };
    document.getElementsByClassName("time")[0].style.backgroundColor = "yellow"; /*ESTO HARA QUE EL BACKGROUND COLOR VUELVA A YELLOW*/

}



function comprobarF() {
    comprobar.style.display = 'none'
    rpta = input.value.toLowerCase().trim()

    if(problemasElegidos[number].respuesta == rpta) {
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

    apretado = true
    input.disabled = true
    clearInterval(idTiempo)
}

function mostrarSolucion() {

    
    let imgResolucion = problemasElegidos[number].imgResolucion
    spaceResolution.innerHTML = "<img class='imgResolutionSize' src='" + imgResolucion + "'>"
    console.log(problemasElegidos[number].respuesta)
    acumulacionBuenasMalasBlanco()

    problemasElegidos.splice(number, 1)
    
    apretSolucion = true
    cont++

    showResolution1.style.display = 'none'
    godOrBad.style.marginBottom = "0"
}

function acumulacionBuenasMalasBlanco() {
    if(problemasElegidos[number].respuesta == rpta) {
        buenas++
    } else if(rpta == "") {
        blanco++
    } else if(problemasElegidos[number].respuesta != rpta) {
        malas++
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
