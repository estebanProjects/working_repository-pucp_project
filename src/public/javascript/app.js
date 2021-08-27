// variables principales - obtenidas desde el HTML
let botonEmpezar = document.getElementById('empezar')
let boxDeAlternativasYComprobar = document.getElementById('boxDeAlternativasYComprobar')
let botonSiguiente = document.getElementById('siguiente')
let botonRetroceder = document.getElementById('retroceder')
let botonComprobar = document.getElementById('comprobar')
let botonMostrarSolucion = document.getElementById('mostrarSolucion') // se crea en la funcion comprobar
let espacioParaSolucion = document.getElementById('espacioParaSolucion')
let espacioParaProblemas = document.getElementById('espacioParaProblemas')
let espacioParaCorreccion = document.getElementById('espacioParaCorreccion')
let radioButtons = document.getElementById('radioButtons')
let alternativas = document.getElementsByName('alternativa')

let indicadorDeEjercicios = document.getElementById('indicadorDeEjercicios')
let indicadorDelProblemaActual = document.getElementById('indicadorDelProblemaActual')

// variables del tiempo - propio del Javascript
let idTiempoParticular
let idTiempoGeneral

// variables internas - propio del Javascript
let problemasElegidos = problemasSeleccionados; 
let numeroDelProblemaActual = 0
let rpta
let mostrarSolucion
let botonReporte
let apretadoComprobar = false

// variables del contador de correctas e incorrectas
let correctas = 0
let incorrectas = 0
let blanco = 0

// escuchadores de eventos
botonEmpezar.addEventListener('click', empezar)
botonRetroceder.addEventListener('click', retroceder)
botonSiguiente.addEventListener('click', siguiente)
botonComprobar.addEventListener('click', comprobar)

// estado del total de problemas
indicadorDelTotalDeEjercicios.innerHTML = problemasElegidos.length - 1

// Botones
// boton empezar
function empezar() {
    // comenzar el cronometro general
    // correrTiempo("general")
    // acomodando los botones
    botonEmpezar.style.display = 'none'
    boxDeAlternativasYComprobar.style.display = 'flex'
    correrTiempo("general")
    siguiente()
}


function siguiente() {
    obtenerDatosDelProblema()
    numeroDelProblemaActual++ // aumentar en 1 el valor de esta variable para que pueda pasar a la siguiente pregunta
    if(problemasElegidos.length > numeroDelProblemaActual) { // se va ejecutar si la "cantidad de problemas" es mayor al problema actual
        
        estadoHabilitadoODeshabilitadoRadioButtons()
        renderizarImagenDelProblema()
        desmarcarAlternativas()
        mostrarAlternativaGuardadaDelUsuario()
        botonComprobar.disabled = false // habilitar el boton comprobar

        minutosParticular = cantidadMinutosParticular
        segundosParticular = cantidadSegundosParticular
        correrTiempo("particular") // reiniciar el cronometro particular
        if(apretadoComprobar) {
            correrTiempo("general")
        }
        apretadoComprobar = false
        // modificar el indicador del problemaActual
        indicadorDelProblemaActual.innerHTML = numeroDelProblemaActual
    } else {
        console.log("¡Terminaste!")
        espacioParaTiempoParticular.innerHTML = "¡Terminaste!"
        espacioParaTiempoGeneral.innerHTML = "¡Terminaste!"

        contadorDeCorrectasIncorrectas() 
        // deshabilitar los botones de avanzar, retroceder y de comprobar
        botonRetroceder.disabled = true
        botonSiguiente.disabled = true
        botonComprobar.disabled = true
        desHabilitarRadioButtons()
        // muestra en pantalla el reporte de correctas e incorrectas que se tuvo
        espacioParaProblemas.innerHTML = "<p>Tuviste <strong>" + correctas + "</strong> correctas <i class='fas fa-check-circle'></i></p>" + "<p>Tuviste <strong>" + incorrectas + "</strong> incorrectas <i class='fas fa-times-circle'></i></p>" + "<p>Dejaste <strong>" + blanco + "</strong> en blanco <i class='fas fa-circle'></i></p><button id='reporte'>Ver Reporte Completo</button>"
        botonReporte = document.getElementById('reporte') 
        botonReporte.addEventListener('click', verReporte) // activar el escuchador de Eventos para cuando presione "Ver Reporte"
        clearInterval(idTiempoParticular)
        clearInterval(idTiempoGeneral)
    }
    limpiarPantalla()
    document.getElementsByClassName("time")[0].style.backgroundColor = "rgb(82, 190, 61)";
}

function retroceder() {
    if(numeroDelProblemaActual > 1) { // se va ejecutar si el problema actual es el 2 o más
        
        obtenerDatosDelProblema()
        numeroDelProblemaActual-- // disminuir en 1 el valor de esta variable para que pueda retroceder a la anterior pregunta

        estadoHabilitadoODeshabilitadoRadioButtons()
        renderizarImagenDelProblema()
        desmarcarAlternativas()
        mostrarAlternativaGuardadaDelUsuario()
        botonComprobar.disabled = false // habilitar el boton comprobar

        minutosParticular = cantidadMinutosParticular
        segundosParticular = cantidadSegundosParticular
        correrTiempo("particular") // reiniciar el cronometro particular
        if(apretadoComprobar) {
            correrTiempo("general")
        }
        apretadoComprobar = false
        // modificar el indicador del problemaActual
        indicadorDelProblemaActual.innerHTML = numeroDelProblemaActual
    }
    limpiarPantalla()
}

function comprobar() {
    botonComprobar.disabled = true // deshabilitar el boton comprobar
    obtenerDatosDelProblema()

    apretadoComprobar = true

    if(problemasElegidos[numeroDelProblemaActual].respuesta == rpta) { // si está correcto
        espacioParaCorreccion.innerHTML = "<p class='respuestaCorrecta'>¡Correcto!</p>" + "<button id='mostrarSolucion'> Ver solución </button>"
        activarFuncionMostrarSolucion()
    } else { // si está incorrecto
        espacioParaCorreccion.innerHTML = "<p class='respuestaIncorrecta'>¡Incorrecto!</p>" + "<button id='mostrarSolucion'> Ver solución </button>"
        activarFuncionMostrarSolucion()
    }

    // deshabilitando los radio buttons
    problemasElegidos[numeroDelProblemaActual].radioButtonDeshabilitado = true 
    estadoHabilitadoODeshabilitadoRadioButtons()

    clearInterval(idTiempoParticular) // parando el tiempo particular
    clearInterval(idTiempoGeneral)
}

function funcionMostrarSolucion() {
    let imagenDeLaSolucion = problemasElegidos[numeroDelProblemaActual].imgResolucion // direccion de la imagen de la solucion
    espacioParaSolucion.innerHTML = "<img class='tamañoDeLaImagenDeLaSolucion"+tipo+"' src='" + imagenDeLaSolucion + "'>"
} //"<img class="+`tamañoDeLaImagenDelProblema${tipo}"` +"\"src='" + imagenDeLaSolucion + "'>"

// funciones auxiliares
function renderizarImagenDelProblema() {
    let imagenDelProblema = problemasElegidos[numeroDelProblemaActual].imgProblema // direccion de la imagen del problema
    let texto=problemasElegidos[numeroDelProblemaActual].lectura
     if (materia == 'lectura'){
     espacioParaProblemas.innerHTML = "<img class='texto' src='" + texto + "'><img class='tamañoDeLaImagenDelProblema"+tipo+"' src='" + imagenDelProblema + "'>";
  
}
 else if (materia=="redaccion"){espacioParaProblemas.innerHTML = "<img class='tamañoDeLaImagenDelProblema"+tipo+"' src='" + imagenDelProblema + "' style='min-height:9em;max-width:28em;'>" }
else{ espacioParaProblemas.innerHTML = "<img class='tamañoDeLaImagenDelProblema"+tipo+"' src='" + imagenDelProblema + "'>"}
}

function obtenerDatosDelProblema() {
    // if(problemasElegidos.length > numeroDelProblemaActual) {
        if(numeroDelProblemaActual != 0) { // no se ejecutara si el usuario todavía no ha presionado el boton "empezar"(es decir que el problema actual sea 0)
            rpta = obtenerValorDeLosRadioButtons()
            determinarEstadoDelProblema()
            problemasElegidos[numeroDelProblemaActual].alternativaDelUsuario = rpta // guardando la respuesta que puso el usuario en los radio buttons
        }
    // }
}

function obtenerValorDeLosRadioButtons() {
        for(let i=0; i<alternativas.length; i++) {
            if(alternativas[i].checked) {
                var valorDelRadioButtonSeleccionado = alternativas[i].value
            }
        }
        return valorDelRadioButtonSeleccionado
}

function activarFuncionMostrarSolucion() {
    mostrarSolucion = document.getElementById('mostrarSolucion')
    mostrarSolucion.addEventListener('click', funcionMostrarSolucion)
}

function determinarEstadoDelProblema() {
    console.log(rpta)
        if(problemasElegidos[numeroDelProblemaActual].respuesta == rpta) {
            problemasElegidos[numeroDelProblemaActual].estado = "correcto"
    
        } else if(rpta == undefined) { // si el usuario no puso ni una alternativa
            problemasElegidos[numeroDelProblemaActual].estado = "blanco"
    
        } else if(problemasElegidos[numeroDelProblemaActual].respuesta != rpta) {
            problemasElegidos[numeroDelProblemaActual].estado = "incorrecto"
        }
}

function mostrarAlternativaGuardadaDelUsuario() {
    for(let i=0; i<alternativas.length; i++) {
        if(alternativas[i].value == problemasElegidos[numeroDelProblemaActual].alternativaDelUsuario) {
            alternativas[i].checked = true
        }
    }
}

function desmarcarAlternativas() {
    for(let i=0; i<alternativas.length; i++) {
        if(alternativas[i].checked) {
            alternativas[i].checked = false
        }
    }
}

function estadoHabilitadoODeshabilitadoRadioButtons() {
    if(problemasElegidos[numeroDelProblemaActual].radioButtonDeshabilitado == true) {
        for(let i=0; i<alternativas.length; i++) {
            alternativas[i].disabled = true
        }
    } else {
        for(let i=0; i<alternativas.length; i++) {
            alternativas[i].disabled = false
        }
    }
}

function contadorDeCorrectasIncorrectas() {
        for(let i=0; i < problemasElegidos.length; i++){
            if(problemasElegidos[i].estado == "correcto"){
                correctas++
            } else if(problemasElegidos[i].estado == "blanco"){
                blanco++
            } else if(problemasElegidos[i].estado == "incorrecto"){
                incorrectas++
            }
        }
}

function limpiarPantalla() {
    espacioParaCorreccion.innerHTML = "Corrección"
    espacioParaSolucion.innerHTML = "Solución"
}

function desHabilitarRadioButtons() {
    for(let i=0; i<alternativas.length; i++) {
        alternativas[i].disabled = true
    }
}



// Reporte

let container = document.getElementById('container')
let reporte = document.getElementById('reporte')

function verReporte() {
    container.style.display = 'none'

    for(let i=1; i <= problemasElegidos.length-1; i++) {
        reporte.innerHTML += 
        `<div class="boxDeProblemaYSolucion">
            <div class="boxProblem"><img src="https://www.dl.dropboxusercontent.com/s/1f4ix7a1by17zls/alg_problema2.jpg?dl=0"></div>
            <div class="boxSolucion"></div>
        </div>` 
    }   
}