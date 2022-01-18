// if(materia == 'aritmetica' || materia == "algebra" || materia == 'geometria') {
//     arrayProblemasPucp = arrayProblemasPucp.filter(problema => problema.curso == materia)
//     mezclarArray(arrayProblemasPucp)
//     agregandoElElementoNeutro()
// } else if(materia == 'matematica'){
//     mezclarArray(arrayProblemasPucp)
//     agregandoElElementoNeutro()
// }

// console.log(problemas)
let arrayProblemasPucp = problemas

let cantidadDeEjercicios

let problemasSeleccionados = []

if(materia == 'aritmetica' || materia == 'algebra' || materia == 'geometria') {
    // cantidadDeEjercicios = 5
    console.log(arrayProblemasPucp)
    problemasSeleccionados = arrayProblemasPucp.filter(problema => problema.curso == materia)
    // problemasSeleccionadosDelRepertorio(cantidadDeEjercicios)
    console.log(problemasSeleccionados)
    agregandoElElementoNeutro()
} else if(materia == 'matematica'){
    // cantidadDeEjercicios = 25
    // problemasSeleccionadosDelRepertorio(cantidadDeEjercicios)
    problemasSeleccionados = arrayProblemasPucp
    agregandoElElementoNeutro()
}

// variable del tiempo para matematica
let cantidadMinutosParticular = 2
let cantidadSegundosParticular = 0
let minutosParticular = cantidadMinutosParticular
let segundosParticular = cantidadSegundosParticular
let minutosGeneral = problemasSeleccionados.length*2
let segundosGeneral = 0




// funciones

function problemasSeleccionadosDelRepertorio(cantidadDeEjercicios) {
    for(let i=0; i<cantidadDeEjercicios; i++){
        numeroAleatorio = Math.floor(Math.random()*arrayProblemasPucp.length)
        problemasSeleccionados.push(arrayProblemasPucp[numeroAleatorio])
        arrayProblemasPucp.splice(numeroAleatorio, 1)
    }
}

function agregandoElElementoNeutro() {
    problemasSeleccionados.unshift({  // agregando un elemento con atributos neutro al inicio del array
        respuesta: "neutro",
        estado: "neutro",
        alternativaDelUsuario: "neutro",})
}