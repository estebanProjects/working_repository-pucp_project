
console.log(problemas)
let arrayProblemasPucp = problemas


if(materia == 'aritmetica' || materia == "algebra" || materia == 'geometria') {
    arrayProblemasPucp = arrayProblemasPucp.filter(problema => problema.curso == materia)
    mezclarArray(arrayProblemasPucp)
    agregandoElElementoNeutro()
} else if(materia == 'matematica'){
    mezclarArray(arrayProblemasPucp)
    agregandoElElementoNeutro()
}

let problemasSeleccionados = []
// variable del tiempo para matematica
let cantidadMinutosParticular = 2
let cantidadSegundosParticular = 0
let minutosParticular = cantidadMinutosParticular
let segundosParticular = cantidadSegundosParticular
let minutosGeneral = arrayProblemasPucp.length*2
let segundosGeneral = 0

// funciones
function mezclarArray(inputArray){ // funcion para aleatorizar los problemas
    inputArray.sort(()=> Math.random() - 0.5);
}
function problemasSeleccionadosDelRepertorio(cantidadDeEjercicios) {
    for(let i=0; i<cantidadDeEjercicios; i++){
        numeroAleatorio = Math.floor(Math.random()*arrayProblemasPucp.length)
        problemasSeleccionados.push(arrayProblemasPucp[numeroAleatorio])
        arrayProblemasPucp.splice(numeroAleatorio, 1)
    }
}

function agregandoElElementoNeutro() {
    arrayProblemasPucp.unshift({  // agregando un elemento con atributos neutro al inicio del array
        respuesta: "neutro",
        estado: "neutro",
        alternativaDelUsuario: "neutro",})
}