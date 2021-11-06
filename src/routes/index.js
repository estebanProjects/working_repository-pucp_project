
const { Router } = require('express');
const router = Router();
const exphbs = require('express-handlebars');
const express = require('express');
const app = express();
require("mongoose");
//handlebars


const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const Photo = require('../models/Photo');
const fs = require('fs-extra');

router.get('/images', async (req, res) => {
    const photos = await Photo.find().lean();
    res.render('images.hbs', {photos});
       
});

router.get('/images/add', async (req, res) => {
    const photos = await Photo.find().lean();
    res.render('image_form.hbs', {photos});
   
    
});
problemimage=""
cursoaguardarelegido=""
router.post('/images/add', async (req, res) => {
    const { title, description } = req.body;
    const { addresolution} = req.body;
    const { isresolution }=req.body;
    const { cursoaguardar }=req.body;
    const { respuesta} = req.body;
    // Saving Image in Cloudinary
    cursoaguardarelegido=cursoaguardar;
    
    try {
        var usefolder=""
        if(isresolution=="true"){usefolder="/catolica/"+cursoaguardarelegido+"/resolucion"}
        else{  usefolder="/catolica/"+cursoaguardarelegido+"/problemas" };

        const result = await cloudinary.v2.uploader.upload(req.file.path,{folder: usefolder});
        //en folder tu eliges a que ruta guardarlo
     
    
        const newPhoto = new Photo({title, description, imageURL: result.url, public_id: result.public_id,resolURL:"",curso:cursoaguardarelegido,respuesta,radioButtonDeshabilitado:false,estado:"",alternativaDelUsuario:"",});
       
        console.log( await Photo.findById(problemimage._id) );
      
        await newPhoto.save();
       // let fotodatabase =await Photo.find().lean().clone();
       // let encajarurl=  fotodatabase.find(fotodatabase => fotodatabase.title === "shakshukaa1");
      ;
      if(isresolution=="true"){
        
        await Photo.updateOne({public_id: problemimage.public_id }, {
            resolURL:result.url,
          });

          console.log( await Photo.findById(problemimage._id));
    }
      else{problemimage= newPhoto; console.log(problemimage)};
        
        await fs.unlink(req.file.path);
    
    //cambios arriba
    } catch (e) {
        console.log(e)
    }
    console.log(addresolution);
    if(addresolution=="true"){res.redirect('/images/add/resolution')}
    else{
        res.redirect('/images');
    }
    
}
);
router.get('/images/add/resolution', async (req, res) => {
    res.render('resolutionform.hbs');


});
router.get('/images/delete/:photo_id', async (req, res) => {
    const { photo_id } = req.params;
    const photo = await Photo.findByIdAndRemove(photo_id);
    const result = await cloudinary.v2.uploader.destroy(photo.public_id);
    console.log(result)
    res.redirect('/images/add');
});
//agregar algunas partes a tu index que activa los puertos

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Preguntas Pucp'});
});

router.get('/aritmetica', (req, res) => {
    res.render('../views/ciencias/aritmetica.html', {title: 'Preguntas Aritmetica'});    
});

router.get('/algebra', (req, res) => {
    res.render('../views/ciencias/algebra.html', {title: 'Preguntas Algebra'});    
});

router.get('/geometria', (req, res) => {
    res.render('../views/ciencias/geometria.html', {title: 'Preguntas Geometria'});    
});

router.get('/matematica', (req, res) => {
    res.render('../views/ciencias/matematica.html', {title: 'Preguntas Matematica'});    
});

router.get('/redaccion', (req, res) => {
    res.render('../views/letras/redaccion.html', {title: 'Preguntas Redaccion'});    
});

router.get('/lectura', (req, res) => {
    res.render('../views/letras/lectura.html', {title: 'Preguntas Lectura'});    
});


module.exports = router;