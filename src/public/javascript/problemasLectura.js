// Lectura

let arrayProblemasPucp = []

let textoA = [{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/b7ygc458c6ocvvl/lectura1.PNG?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/2mwlspe5pha9gg9/rel1.PNG?dl=0",
    curso: 'lectura'
},{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/gbp6gcyhgnsbxmq/proble2.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/egytud48r7tjizu/rel2.PNG?dl=0",
    curso: 'lectura'
}]

let textoB = [{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/x8dckzie5c6czyk/lectura2.PNG?dl=0",
    respuesta: "r",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/2mwlspe5pha9gg9/rel1.PNG?dl=0",
    curso: 'lectura'
}]

let textoC = [{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/k6zwvt6jkg1o9ud/lectura3.png?dl=0",
    respuesta: "r",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/2mwlspe5pha9gg9/rel1.PNG?dl=0",
    curso: 'lectura'
},{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/k6zwvt6jkg1o9ud/lectura3.png?dl=0",
    respuesta: "r",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/2mwlspe5pha9gg9/rel1.PNG?dl=0",
    curso: 'lectura'
},{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/k6zwvt6jkg1o9ud/lectura3.png?dl=0",
    respuesta: "r",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/2mwlspe5pha9gg9/rel1.PNG?dl=0",
    curso: 'lectura'
}]

let problemas_lectura = [textoA, textoB, textoC]

let problemasSeleccionados = []
let numeroAleatorio

let cantidadDeTextos = 2



// variable del tiempo para lectura
let cantidadMinutosParticular = 0
let cantidadSegundosParticular = 45
let minutosParticular = cantidadMinutosParticular
let segundosParticular = cantidadSegundosParticular
let minutosGeneral = 0
let segundosGeneral = arrayProblemasPucp.length*cantidadSegundosParticular
regularizarTiempo()
problemasSeleccionadosDelRepertorio(cantidadDeTextos)

for(let i=0; i < arrayProblemasPucp.length; i++) { // pone todos los problemas de lectura en un array
    for(let j=0; j < arrayProblemasPucp[i].length; j++) {
        problemasSeleccionados.push(arrayProblemasPucp[i][j])
    }
}

agregandoElElementoNeutro()

// funciones

function agregandoElElementoNeutro() {
    problemasSeleccionados.unshift({  // agregando un elemento con atributos neutro al inicio del array
        respuesta: "neutro",
        estado: "neutro",
        alternativaDelUsuario: "neutro",})
}

function problemasSeleccionadosDelRepertorio(cantidadDeTextos) {
    for(let i=0; i<cantidadDeTextos; i++){
        numeroAleatorio = Math.floor(Math.random()*problemas_lectura.length)
        arrayProblemasPucp.push(problemas_lectura[numeroAleatorio])
        problemas_lectura.splice(numeroAleatorio, 1)
    }
}

function regularizarTiempo() {
    if(segundosGeneral >= 60) {
        while(segundosGeneral >= 60) {
          segundosGeneral = segundosGeneral - 60
          minutosGeneral += 1
        }
    }
}