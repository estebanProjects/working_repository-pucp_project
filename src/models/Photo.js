const { Schema, model } = require('mongoose');

const Photo = new Schema({
    title: String,
    description: String,
    imageURL: String,
    public_id: String,
    resolURL:String,//prueba
    curso:String,
    respuesta:String,
    radioButtonDeshabilitado: Boolean,
    estado:String,
    alternativaDelUsuario:String,
    


});

module.exports = model('Photo', Photo);