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


botonRetroceder.disabled = true
botonSiguiente.disabled = true

// Botones
// boton empezar
function empezar() {
    // comenzar el cronometro general
    // correrTiempo("general")
    // acomodando los botones
    botonEmpezar.style.display = 'none'
    boxDeAlternativasYComprobar.style.display = 'flex'
    correrTiempo("general")
    botonRetroceder.disabled = false
    botonSiguiente.disabled = false
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

        if(problemasElegidos[numeroDelProblemaActual].radioButtonDeshabilitado == false) {
            botonComprobar.innerHTML = 'Comprobar'
            botonComprobar.style.backgroundColor = 'black'
            espacioParaCorreccion.innerHTML = "Corrección"
            espacioParaSolucion.innerHTML = "Solución"
        } else {
            botonComprobar.innerHTML = 'Comprobado'
            botonComprobar.style.backgroundColor = 'rgb(63, 62, 62)'
            if(problemasElegidos[numeroDelProblemaActual].estado == 'correcto') {
                espacioParaCorreccion.innerHTML = "<p class='respuestaCorrecta'>¡Correcto!</p>" + "<button id='mostrarSolucion'> Ver solución </button>"
                activarFuncionMostrarSolucion()
            } else {
                espacioParaCorreccion.innerHTML = "<p class='respuestaIncorrecta'>¡Incorrecto!</p>" + "<button id='mostrarSolucion'> Ver solución </button>"
                activarFuncionMostrarSolucion()
            }
            espacioParaSolucion.innerHTML = "Solución"
        }
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

         //incorrectas correctas y formulario (EN LAS BETTA)
        espacioParaProblemas.innerHTML = "</br><button class='formulario' id='formulario'><a Target='_blank' href='https://docs.google.com/forms/d/1papjH2epWCm04dx2Hh-BbKWcrOpr20NExaxgc6PS0BY/edit?usp=sharing' ><p class='textoformulario'>¿Cómo fue tu experiencia?,</p><p class='textoformulario'>¡Danos tu opinión!</p></a></button>"+"<p>Tuviste <strong>" + correctas + "</strong> correctas <i class='fas fa-check-circle'></i></p>" + "<p>Tuviste <strong>" + incorrectas + "</strong> incorrectas <i class='fas fa-times-circle'></i></p>" + "<p>Dejaste <strong>" + blanco +
        //boton del reporte
        "</strong> en blanco <i class='fas fa-circle'></i></p><button class='botondelreporte' id='reporte'>Ver Reporte Completo</button>";
     if (tipo=="letras"){espacioParaProblemas.style.justifyContent="center";document.getElementsByClassName('formulario')[0].style.top="4em"};    
        //algunas propiedades css
        botonReporte = document.getElementById('reporte') 
        botonReporte.addEventListener('click', verReporte) // activar el escuchador de Eventos para cuando presione "Ver Reporte"}
        clearInterval(idTiempoParticular)
        clearInterval(idTiempoGeneral)
    }
    espacioParaCorreccion.innerHTML = "Corrección"
    espacioParaSolucion.innerHTML = "Solución"
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

        if(problemasElegidos[numeroDelProblemaActual].radioButtonDeshabilitado == false) {
            botonComprobar.innerHTML = 'Comprobar'
            botonComprobar.style.backgroundColor = 'black'
            espacioParaCorreccion.innerHTML = "Corrección"
            espacioParaSolucion.innerHTML = "Solución"
        } else {
            botonComprobar.innerHTML = 'Comprobado'
            botonComprobar.style.backgroundColor = 'rgb(63, 62, 62)'
            if(problemasElegidos[numeroDelProblemaActual].estado == 'correcto') {
                espacioParaCorreccion.innerHTML = "<p class='respuestaCorrecta'>¡Correcto!</p>" + "<button id='mostrarSolucion'> Ver solución </button>"
                activarFuncionMostrarSolucion()
            } else {
                espacioParaCorreccion.innerHTML = "<p class='respuestaIncorrecta'>¡Incorrecto!</p>" + "<button id='mostrarSolucion'> Ver solución </button>"
                activarFuncionMostrarSolucion()
            }
            espacioParaSolucion.innerHTML = "Solución"
        }
    }
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
    botonComprobar.innerHTML = "Comprobado"
    botonComprobar.style.backgroundColor = 'rgb(63, 62, 62)'
    estadoHabilitadoODeshabilitadoRadioButtons()

    clearInterval(idTiempoParticular) // parando el tiempo particular
    clearInterval(idTiempoGeneral)
}

function funcionMostrarSolucion() {
    let imagenDeLaSolucion = problemasElegidos[numeroDelProblemaActual].imgResolucion // direccion de la imagen de la solucion
    espacioParaSolucion.innerHTML = "<img class='tamañoDeLaImagenDeLaSolucion"+tipo+"' src='" + imagenDeLaSolucion + "'>"
} 
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


function desHabilitarRadioButtons() {
    for(let i=0; i<alternativas.length; i++) {
        alternativas[i].disabled = true
    }
}



// Reporte ----------------------

let container = document.getElementById('container')
let reporte = document.getElementById('reporte')
let numberLec 
function verReporte() {
    container.style.display = 'none'
    reporte.innerHTML=`<h1 class="tituloreporte">_-Reporte del examen-_</h1>`
    if(materia=="lectura") {
        renderizarLectura(1)
    }
    for(let i=1; i <= problemasElegidos.length-1; i++) {
        reporte.innerHTML += 
        `<div class="boxDeProblemaYSolucion ${tipo} ">
            
            <div class="boxProblem material-placeholder"><img class="responsive-img materialboxed" src="${problemasElegidos[i].imgProblema}"></div>
           <div class="textoDeEnMedio">
                <p class="iconobuenamala"></p>
                <h3>Problema ${i} </h3>
                
                <p class="estadoDelProblemaWord"> ${ problemasElegidos[i].estado }</p>
           </div>
            <div class="boxSolucion material-placeholder"><img class="responsive-img materialboxed" src="${problemasElegidos[i].imgResolucion}" ></div>        
        </div>`;
  
    
        if (problemasElegidos[i].estado=="correcto"){document.getElementsByClassName("iconobuenamala")[i-1].innerHTML="<i class='fas fa-check-circle icocirculo'></i>"} 
        else if (problemasElegidos[i].estado=="incorrecto"){document.getElementsByClassName("iconobuenamala")[i-1].innerHTML="<i class='fas fa-times-circle icocirculo'></i>"} 
        else{document.getElementsByClassName("iconobuenamala")[i-1].innerHTML="<i class='fas fa-circle icocirculo'></i>"}

        if(materia=="lectura") {
            if(i!=problemasElegidos.length-1) { // Si esta en el ultimo problema ya no comparará con el siguiente problema
                if(problemasElegidos[i].lectura != problemasElegidos[i+1].lectura) { 
                    renderizarLectura(i+1)
                }
            }
        }
    }   
    reporte.innerHTML +=  "</br><button class='formulario-reporte' id='formulario'><a Target='_blank' href='https://docs.google.com/forms/d/1papjH2epWCm04dx2Hh-BbKWcrOpr20NExaxgc6PS0BY/edit?usp=sharing' ><p class='textoformulario'>¿Cómo fue tu experiencia?,</p><p class='textoformulario'>¡Danos tu opinión!</p></a></button>" 

        const imgLightBox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(imgLightBox, {
            inDuration: 500,
            outDuration: 500
        });   
       //formulario
    //    reporte.innerHTML +=  "</br><button class='formulario-reporte' id='formulario'><a Target='_blank' href='https://docs.google.com/forms/d/1papjH2epWCm04dx2Hh-BbKWcrOpr20NExaxgc6PS0BY/edit?usp=sharing' ><p class='textoformulario'>¿Cómo fue tu experiencia?,</p><p class='textoformulario'>¡Danos tu opinión!</p></a></button>" 
} 

function renderizarLectura(parametroNumber) {
    reporte.innerHTML += 
    `<div class="boxDeLaLectura material-placeholder">
        <div class="boxLectura">
            <img class="responsive-img materialboxed" src="${problemasElegidos[parametroNumber].lectura}">
        </div>
    </div>
    `
}
