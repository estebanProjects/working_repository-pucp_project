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
},{ 
    lectura:"https://www.dl.dropboxusercontent.com/s/b7ygc458c6ocvvl/lectura1.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/m6y8ae3j7h3e3xo/lectura1-proble3.PNG?dl=0",
    respuesta: "a",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/x4luyvcy4togn27/lectura1-rel3.PNG?dl=0",
    curso: 'lectura'},
{ 
    lectura:"https://www.dl.dropboxusercontent.com/s/b7ygc458c6ocvvl/lectura1.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/t4i4j707wba81l7/lectura1-proble4.PNG?dl=0",
    respuesta: "a",
    alternativaDelUsuario: "",
    estado: "",
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/j5r5u5zfemzw7kc/lectura1-rel4.PNG?dl=0",
    curso: 'lectura'}]

let textoB = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/ywdqvii7cxnuwkt/lectura2.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/c9rw29v2bn4gp4u/lectura2-proble1.PNG?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/5xvq01a8toi5pvp/lectura2-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/ywdqvii7cxnuwkt/lectura2.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/lqx3hcmqv1urw0l/lectura2-proble2.PNG?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/hdgtslkegq68dpn/lectura2-rel2.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/ywdqvii7cxnuwkt/lectura2.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/c4pw187qd5ng7w2/lectura2-proble3.PNG?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/vxp2izxqjvyrdpk/lectura2-rel3.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/ywdqvii7cxnuwkt/lectura2.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/5w1mw1sqlkbvofi/lectura2-proble4.PNG?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/ixm6xy04trf79qi/lectura2-rel4.PNG?dl=0",
    curso: 'lectura'
},]

let textoC = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/bc7xzqb5cl1p8ka/lectura3.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/adaz0o2g5kchjlc/lectura3-proble1.PNG?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/9i5s3nc7t9b7skj/lectura3-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/bc7xzqb5cl1p8ka/lectura3.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/ouz6pkaq5pomf2d/lectura3-proble2.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/vokeouol01iboq3/lectura3-rel2.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/bc7xzqb5cl1p8ka/lectura3.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/xmjfd7p28m9ucq6/lectura3-proble3.PNG?dl=0",
    respuesta: "a",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/q4asddxsmhon3id/lectura3-rel3.PNG?dl=0",
    curso: 'lectura'
}]

let textoD = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/5ybf050pdaehodc/lectura4.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/44jwcktqhhh0et0/lectura4-proble1.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/g90ram1xh4fhnif/lectura4-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/5ybf050pdaehodc/lectura4.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/jhl7jza1wukxh0l/lectura4-proble2.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/sowamzebn6goiyr/lectura4-rel2.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/5ybf050pdaehodc/lectura4.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/fajt9fywy2d6ism/lectura4-proble3.PNG?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/fe5ic48a9oyxgcu/lectura4-rel3.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/5ybf050pdaehodc/lectura4.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/uv0h4dq8ra8jiqs/lectura4-proble4.PNG?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/qovat4of2eq0onx/lectura4-rel4.PNG?dl=0",
    curso: 'lectura'
}]
let textoE = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/x4l8700w2jl0bgg/lectura5.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/8xz0h92803ijd4i/lectura5-proble1.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/w9k5qz5f6wdpqkm/lectura5-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/x4l8700w2jl0bgg/lectura5.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/gq0lkd5cdnlumu5/lectura5-proble2.PNG?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/1y8875kc7ymiwsc/lectura5-rel2.PNG?dl=0",
    curso: 'lectura'
}]
let textoF = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/8tkcek9m0hpo0u7/lectura6.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/vsp00rxeg1r2sip/lectura6-proble1.PNG?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/k8m2n1ubknm2b3h/lectura6-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/8tkcek9m0hpo0u7/lectura6.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/fqyf8krmwvd8um2/lectura6-proble2.PNG?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/v5u4nrm10692o3e/lectura6-rel2.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/8tkcek9m0hpo0u7/lectura6.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/lkfui3gqe75rkd2/lectura6-proble3.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/2ys9rkx7esunvhu/lectura6-rel3.PNG?dl=0",
    curso: 'lectura'
}]
let textoG = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/0y1n9sesxu1s6d2/lectura7.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/z1zjpe77wr832hc/lectura7-proble1.PNG?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/7v2gipkylngmdfs/lectura7-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/0y1n9sesxu1s6d2/lectura7.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/i7d6j5ka8h9m94z/lectura7-proble2.PNG?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/vl3w9oqds9e7dt4/lectura7-rel2.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/0y1n9sesxu1s6d2/lectura7.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/5gg1hfsktwdrkar/lectura7-proble3.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/xloeffzjc8bi9rp/lectura7-rel3.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/0y1n9sesxu1s6d2/lectura7.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/nwwqcfnev0scbwc/lectura7-proble4.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/phqe4e4purh2zbv/lectura7-rel4.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/0y1n9sesxu1s6d2/lectura7.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/0mmsiypsal9m510/lectura7-proble5.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/omr3qk8053kjm9w/lectura7-rel5.PNG?dl=0",
    curso: 'lectura'
}]
let textoH = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/v6qa2nwakchv7b3/lectura8.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/wqyhkyb7d9b0hub/lectura8-proble1.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dropbox.com/s/msdvutcfywfdz9a/lectura8-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/v6qa2nwakchv7b3/lectura8.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/1382uhhpgp1y3xy/lectura8-proble2.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/y98oilo87qq94pv/lectura8-rel2.PNG?dl=0",
    curso: 'lectura'
}]
let textoI = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/mf732ao5eruzt66/lectura9.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/ftdjskftxg80fr7/lectura9-proble1.PNG?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/iefjruhsg24olp5/lectura9-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/mf732ao5eruzt66/lectura9.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/e8sko9ggxssyga6/lectura9-proble2.PNG?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/f3n7t1bddqk2mqw/lectura9-rel2.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/mf732ao5eruzt66/lectura9.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/swaufur1za4wf7u/lectura9-proble3.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/yvacpofue5k0uqm/lectura9-rel3.PNG?dl=0",
    curso: 'lectura'
}]
let textoJ = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/eo6u3uoemjhejmf/lectura10.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/wxwwb73u5kxjgq4/lectura10-proble1.PNG?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/i7drlmcl8uiup4e/lectura10-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/eo6u3uoemjhejmf/lectura10.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/cmf6iv2z32ma3oj/lectura10-proble2.PNG?dl=0",
    respuesta: "a",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/8d2up7q0hh8b30b/lectura10-rel2.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/eo6u3uoemjhejmf/lectura10.PNG?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/cl914rg3aln3kgz/lectura10-proble3.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/wpmser4j510tiqr/lectura10-rel3.PNG?dl=0",
    curso: 'lectura'
}]
let textoK = [{
    lectura:"https://www.dl.dropboxusercontent.com/s/yyz6t4fu4jhiu3z/lectura11.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/zs75yvyekysfji4/lectura11-proble1.PNG?dl=0",
    respuesta: "b",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/99kxpmeyhd1ckqy/lectura11-rel1.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/yyz6t4fu4jhiu3z/lectura11.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/9v3sa85ffzjhwym/lectura11-proble2.PNG?dl=0",
    respuesta: "a",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/8imr9pg54cemh3f/lectura11-rel2.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/yyz6t4fu4jhiu3z/lectura11.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/4avz237g1dgqg7d/lectura11-proble3.PNG?dl=0",
    respuesta: "c",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/qij0dy0dsnladzo/lectura11-rel3.PNG?dl=0",
    curso: 'lectura'
},{
    lectura:"https://www.dl.dropboxusercontent.com/s/yyz6t4fu4jhiu3z/lectura11.png?dl=0",
    imgProblema: "https://www.dl.dropboxusercontent.com/s/ra2yw4jxmhf8lmj/lectura11-proble4.PNG?dl=0",
    respuesta: "d",
    alternativaDelUsuario: "",
    estado: "", // correcto o incorrecto
    radioButtonDeshabilitado: false,
    imgResolucion: "https://www.dl.dropboxusercontent.com/s/903bm3r6qpxz96r/lectura11-rel4.PNG?dl=0",
    curso: 'lectura'
}]




let problemas_lectura = [textoA, textoB, textoC, textoD, textoE, textoF, textoG, textoH, textoI, textoJ, textoK]

let problemasSeleccionados = []
let numeroAleatorio

let cantidadDeTextos = 2


problemasSeleccionadosDelRepertorio(cantidadDeTextos)
// variable del tiempo para lectura
let cantidadMinutosParticular = 0
let cantidadSegundosParticular = 45
let minutosParticular = cantidadMinutosParticular
let segundosParticular = cantidadSegundosParticular




for(let i=0; i < arrayProblemasPucp.length; i++) { // pone todos los problemas de lectura en un array
    for(let j=0; j < arrayProblemasPucp[i].length; j++) {
        problemasSeleccionados.push(arrayProblemasPucp[i][j])
    }
}

let minutosGeneral = 0
// let segundosGeneral = arrayProblemasPucp.length*cantidadSegundosParticular
let segundosGeneral = (problemasSeleccionados.length)*cantidadSegundosParticular
regularizarTiempo()


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