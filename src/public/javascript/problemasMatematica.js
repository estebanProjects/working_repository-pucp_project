
let arrayProblemasPucp = [{ // ARITMETICA
    imgProblema: "C:\\Users\\luis\\Dropbox\\ejercicios\\algebra\\problemas\\alg_problema1.jpg",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/g56q75zuw78mr5p/arit_resolucion1.jpg?dl=0",
    curso: 'aritmetica'
},{
    imgProblema: "C:\\Users\\luis\\Dropbox\\ejercicios\\algebra\\problemas\\alg_problema1.jpg'",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/w0i2sy619msy9yd/arit_resolucion2.jpg?dl=0",
    curso: 'aritmetica'
},{
    imgProblema: "C:\\Users\\luis\\Dropbox\\ejercicios\\algebra\\problemas\\alg_problema1.jpg",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/1zcbxmii9qn3pus/arit_resolucion3.jpg?dl=0",
    curso: 'aritmetica'
},{ // ALGEBRA
    imgProblema: "C:\\Users\\luis\\Dropbox\\ejercicios\\algebra\\problemas\\alg_problema1.jpg",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/2bov25z4t3eh98q/alg_resolucion1.jpg?dl=0",
    curso: 'algebra'
},{
    imgProblema: "C:\\Users\\luis\\Dropbox\\ejercicios\\algebra\\problemas\\alg_problema1.jpg",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/vf5uq6mxl1swzb9/alg_resolucion2.jpg?dl=0",
    curso: 'algebra'
},{
    imgProblema: "C:\\Users\\luis\\Dropbox\\ejercicios\\algebra\\problemas\\alg_problema1.jpg",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/ri7q8h0omsxfje1/alg_resolucion3.jpg?dl=0",
    curso: 'algebra'
},{ // GEOMETRIA
    imgProblema: "C:\\Users\\luis\\Dropbox\\ejercicios\\algebra\\problemas\\alg_problema1.jpg", // cambiar de ejercicio - resolucion mal hecha
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/ependyb6pn68a1s/geo_resolucion1.jpg?dl=0",
    curso: 'geometria'
},{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/ie1zs00cy205mcd/geo_problema2.jpg?dl=0", 
    respuesta: "a",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/rh2lyk9dopp5pd2/geo_resolucion2.jpg?dl=0",
    curso: 'geometria'
},{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/h8b1tc99md8nd3j/geo_problema3.jpg?dl=0", 
    respuesta: "a",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/vv1kc4kuaa5b540/geo_resolucion3.jpg?dl=0",
    curso: 'geometria'
}
]

let problemasSeleccionados = []
let numeroAleatorio

let cantidadDeEjercicios 

if(materia == 'aritmetica' || materia == 'algebra' || materia == 'geometria') {
    cantidadDeEjercicios = 3
    arrayProblemasPucp = arrayProblemasPucp.filter(problema => problema.curso == materia)
    problemasSeleccionadosDelRepertorio(cantidadDeEjercicios)
    agregandoElElementoNeutro()
} else if(materia == 'matematica'){
    cantidadDeEjercicios = 7
    problemasSeleccionadosDelRepertorio(cantidadDeEjercicios)
    agregandoElElementoNeutro()
}

// variable del tiempo para matematica
let cantidadMinutosParticular = 2
let cantidadSegundosParticular = 0
let minutosParticular = cantidadMinutosParticular
let segundosParticular = cantidadSegundosParticular
let minutosGeneral = cantidadDeEjercicios*2
let segundosGeneral = 0

// funciones

function agregandoElElementoNeutro() {
    problemasSeleccionados.unshift({  // agregando un elemento con atributos neutro al inicio del array
        respuesta: "neutro",
        estado: "neutro",
        alternativaDelUsuario: "neutro",})
}

function problemasSeleccionadosDelRepertorio(cantidadDeEjercicios) {
    for(let i=0; i<cantidadDeEjercicios; i++){
        numeroAleatorio = Math.floor(Math.random()*arrayProblemasPucp.length)
        problemasSeleccionados.push(arrayProblemasPucp[numeroAleatorio])
        arrayProblemasPucp.splice(numeroAleatorio, 1)
    }
}