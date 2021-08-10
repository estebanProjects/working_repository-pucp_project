// Lectura

let arrayProblemasPucp = []

let textoA = [{
    imgProblema: "imagen_del_problema1",
    respuesta: "r",
    imgResolucion: "imagen_de_la_solucion1"
},{
    imgProblema: "imagen_del_problema2",
    respuesta: "r",
    imgResolucion: "imagen_de_la_solucion2"
}]

let textoB = [{
    imgProblema: "imagen_del_problema1",
    respuesta: "r",
    imgResolucion: "imagen_de_la_solucion1"
}]

let textoC = [{
    imgProblema: "imagen_del_problema1",
    respuesta: "r",
    imgResolucion: "imagen_de_la_solucion1"
},{
    imgProblema: "imagen_del_problema2",
    respuesta: "r",
    imgResolucion: "imagen_de_la_solucion2"
},{
    imgProblema: "imagen_del_problema3",
    respuesta: "r",
    imgResolucion: "imagen_de_la_solucion3"
}]

let problemas_lectura = [textoA, textoB, textoC]

mezclarArray(problemas_lectura)

for(let i=0; i < problemas_lectura.length; i++) { // pone todos los problemas de lectura en un array
    for(let j=0; j < problemas_lectura[i].length; j++) {
        arrayProblemasPucp_lectura.push(problemas_lectura[i][j])
    }
}

agregandoElElementoNeutro()

// variable del tiempo para lectura
let cantidadMinutosParticular = 0
let cantidadSegundosParticular = 30
let minutosParticular = cantidadMinutosParticular
let segundosParticular = cantidadSegundosParticular
let minutosGeneral = 0
let segundosGeneral = arrayProblemasPucp.length*30
regularizarTiempo()

// funciones
function mezclarArray(inputArray){ // funcion para aleatorizar los problemas
    inputArray.sort(()=> Math.random() - 0.5);
}

function agregandoElElementoNeutro() {
    arrayProblemasPucp.unshift({  // agregando un elemento con atributos neutro al inicio del array
        respuesta: "neutro",
        estado: "neutro",
        alternativaDelUsuario: "neutro",})
}

function regularizarTiempo() {
    if(segundosGeneral >= 60) {
        while(segundosGeneral >= 60) {
          segundosGeneral = segundosGeneral - 60
          minutosGeneral += 1
        }
    }
}