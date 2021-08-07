
let arrayProblemasPucp = [{ // ARITMETICA
    imgProblema: "https://www.dl.dropboxusercontent.com/s/1np9m5htupyxarg/arit_problema1.png?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/g56q75zuw78mr5p/arit_resolucion1.jpg?dl=0",
    curso: 'aritmetica'
},{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/v8tognxxdpcocxw/arit_problema2.jpg?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/w0i2sy619msy9yd/arit_resolucion2.jpg?dl=0",
    curso: 'aritmetica'
},{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/stpwybg7slrtduz/arit_problema3.jpg?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/1zcbxmii9qn3pus/arit_resolucion3.jpg?dl=0",
    curso: 'aritmetica'
},{ // ALGEBRA
    imgProblema: "https://www.dl.dropboxusercontent.com/s/c4f6uxs48ajargv/alg_problema1.jpg?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/2bov25z4t3eh98q/alg_resolucion1.jpg?dl=0",
    curso: 'algebra'
},{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/1f4ix7a1by17zls/alg_problema2.jpg?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/vf5uq6mxl1swzb9/alg_resolucion2.jpg?dl=0",
    curso: 'algebra'
},{
    imgProblema: "https://www.dl.dropboxusercontent.com/s/40wgb537vvowfcj/alg_problema3.jpg?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/ri7q8h0omsxfje1/alg_resolucion3.jpg?dl=0",
    curso: 'algebra'
},{ // GEOMETRIA
    imgProblema: "https://www.dl.dropboxusercontent.com/s/uc6fg7eck63bs4t/geo_problema1.jpg?dl=0", // cambiar de ejercicio - resolucion mal hecha
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


if(materia == 'aritmetica' || materia == 'algebra' || materia == 'geometria') {
    arrayProblemasPucp = arrayProblemasPucp.filter(problema => problema.curso == materia)
    mezclarArray(arrayProblemasPucp)
    agregandoElElementoNeutro()
} else if(materia == 'matematica'){
    mezclarArray(arrayProblemasPucp)
    agregandoElElementoNeutro()
}

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

function agregandoElElementoNeutro() {
    arrayProblemasPucp.unshift({  // agregando un elemento con atributos neutro al inicio del array
        respuesta: "neutro",
        estado: "neutro",
        alternativaDelUsuario: "neutro",})
}