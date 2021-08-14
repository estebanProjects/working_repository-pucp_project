// Lectura

let arrayProblemasPucp = []

let textoA = [{
    lectura: "https://www.dl.dropboxusercontent.com/s/b7ygc458c6ocvvl/lectura1.PNG?dl=0",
    imgProblema:"https://www.dl.dropboxusercontent.com/s/6yk4ojs238d6iw0/lectura1-proble1.PNG?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/s00n8sj8c5omdi9/lectura1-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/b7ygc458c6ocvvl/lectura1.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/zx57b48q2duosoc/lectura1-proble2.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/68m1iaawt9khi78/lectura1-rel2.PNG?dl=0",
    curso: 'lectura'
}]

let textoB = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/ywdqvii7cxnuwkt/lectura2.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/c9rw29v2bn4gp4u/lectura2-proble1.PNG?dl=0",
    respuesta: "r",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/5xvq01a8toi5pvp/lectura2-rel1.PNG?dl=0",
    curso: 'lectura'
}]

let textoC = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/bc7xzqb5cl1p8ka/lectura3.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/adaz0o2g5kchjlc/lectura3-proble1.PNG?dl=0",
    respuesta: "r",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/9i5s3nc7t9b7skj/lectura3-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/bc7xzqb5cl1p8ka/lectura3.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/ouz6pkaq5pomf2d/lectura3-proble2.PNG?dl=0",
    respuesta: "r",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/vokeouol01iboq3/lectura3-rel2.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/bc7xzqb5cl1p8ka/lectura3.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/xmjfd7p28m9ucq6/lectura3-proble3.PNG?dl=0",
    respuesta: "r",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/q4asddxsmhon3id/lectura3-rel3.PNG?dl=0",
    curso: 'lectura'
}]

let problemas_lectura = [textoA, textoB, textoC]

mezclarArray(problemas_lectura)

for(let i=0; i < problemas_lectura.length; i++) { // pone todos los problemas de lectura en un array
    for(let j=0; j < problemas_lectura[i].length; j++) {
        arrayProblemasPucp.push(problemas_lectura[i][j])
    }
}


// variable del tiempo para lectura
let cantidadMinutosParticular = 0
let cantidadSegundosParticular = 45
let minutosParticular = cantidadMinutosParticular
let segundosParticular = cantidadSegundosParticular

let minutosGeneral = 0
let segundosGeneral = arrayProblemasPucp.length*cantidadSegundosParticular
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