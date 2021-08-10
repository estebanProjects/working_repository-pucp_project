// Redaccion

let arrayProblemasPucp = [{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/5imbu57nob276yi/proble1.PNG?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/2mwlspe5pha9gg9/rel1.PNG?dl=0",
    curso: 'redaccion'
},{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/gbp6gcyhgnsbxmq/proble2.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/egytud48r7tjizu/rel2.PNG?dl=0",
    curso: 'redaccion'
}]

mezclarArray(arrayProblemasPucp)

// variable del tiempo para redaccion
let cantidadMinutosParticular = 0
let cantidadSegundosParticular = 30
let minutosParticular = cantidadMinutosParticular
let segundosParticular = cantidadSegundosParticular
let minutosGeneral = 0
let segundosGeneral = arrayProblemasPucp.length*30
regularizarTiempo()
agregandoElElementoNeutro()
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