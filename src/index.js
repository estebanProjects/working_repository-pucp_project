const express =  require('express');
require('dotenv').config();
const path = require('path');

// Initializations
const app = require('./fotoapp');


// settings
// app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

 /* ESO DE ARRIBA ES PARA DROPBOX */   
// middleware

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

const Photo = require('../src/models/Photo');
    algebra=[],
    lectura=[],
    geometria=[],
    trigonometria=[],
    aritmetica=[],
    redaccion=[];
// Start the server
let tomate
const server = app.listen(app.get('port'),async () => {
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Server on port', app.get('port'));
    const photos =await Photo.find().lean();
    
    //aca saca las fotos del array de fotos de cloudinary y se dividen entre cada curso
    var algebrain=[],
    lecturain=[],
    geometriain=[],
    trigonometriain=[],
    aritmeticain=[],
    redaccionin=[];
   
          for (i=0;i< photos.length;i++){
       
            if (photos[i].curso=="algebra"){ algebrain.push(photos[i])}
        else if (photos[i].curso=="lectura"){lecturain.push(photos[i])}
        else if (photos[i].curso=="geometria"){geometriain.push(photos[i])}
        else if (photos[i].curso=="trigonometria"){ trigonometriain.push(photos[i])}
        else if (photos[i].curso=="aritmetica"){ aritmeticain.push(photos[i])}
        else if (photos[i].curso=="redaccion"){ redaccionin.push(photos[i])}
          else{console.log("sin curso o no definido dentro de los establecidos")}     
    }
    algebra=algebrain;
    lectura=lecturain;geometria=geometriain;trigonometria=trigonometriain;aritmetica=aritmeticain;redaccion=redaccionin;
  
      tomate = algebra
      console.log(tomate)
      console.log("Aqui estoy")
        module.exports= {algebra,lectura,geometria,trigonometria,aritmetica,redaccion};
        
      });
      
      app.get('/api/cursos', (req, res) => {
        console.log(tomate + " este es el valor")
        res.send(tomate) 
      })
     