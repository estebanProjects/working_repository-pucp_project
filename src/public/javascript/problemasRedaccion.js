// Redaccion

let arrayProblemasPucp = [{
    imgProblema: "imagen_del_problema1",
    respuesta: "r",
    imgResolucion: "imagen_de_la_solucion1"
},{
    imgProblema: "imagen_del_problema2",
    respuesta: "r",
    imgResolucion: "imagen_de_la_solucion2"
}]

mezclarArray(arrayProblemasPucp)
agregandoElElementoNeutro()

// variable del tiempo para redaccion
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