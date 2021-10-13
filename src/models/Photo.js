const { Schema, model } = require('mongoose');

const Photo = new Schema({
    title: String,
    description: String,
    imageURL: String,
    public_id: String,
  //  resolURL:String,//prueba
    
});

module.exports = model('Photo', Photo);