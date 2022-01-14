
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
let minutosGeneral = problemasSeleccionados.length*2
let segundosGeneral = 0

// Opciones de la petición (valores por defecto)
const options = {
    method: "GET"
};
let datas 
// Petición HTTP

fetch("/api/cursos", options)
.then(response => response.text())
.then(data => {
    console.log(JSON.parse(data))
    datas = JSON.parse(data)
    arrayProblemasPucp = datas
    console.log(arrayProblemasPucp)



    if(materia == 'aritmetica' || materia == 'algebra' || materia == 'geometria') {
        console.log(arrayProblemasPucp)
        problemasSeleccionados = arrayProblemasPucp.filter(problema => problema.curso == materia)
        console.log(problemasSeleccionados)
        mezclarArray(problemasSeleccionados)
        agregandoElElementoNeutro()
    } else if(materia == 'matematica'){
        mezclarArray(problemasSeleccionados)
        agregandoElElementoNeutro()
    }
    
    // variable del tiempo para matematica
    /** Procesar los datos **/
});






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
    problemasSeleccionados.unshift({  // agregando un elemento con atributos neutro al inicio del array
        respuesta: "neutro",
        estado: "neutro",
        alternativaDelUsuario: "neutro",})
}