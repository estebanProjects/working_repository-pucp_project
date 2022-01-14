
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


async function buscarproblemas(folder){  
    
    results = await cloudinary.v2.api.resources(
    { type: 'upload', 
      prefix: folder ,
      tags:true,
      max_results: 500,},
    function(error, result) {console.log(result.resources.length);searchproblemas=result.resources; });

    for (i=0;i<searchproblemas.length;i++){
        for(j=0;j<searchproblemas[i].tags.length;j++)  {
               let titleindex=searchproblemas[i].tags[j].indexOf("title/")
               let resolURLindex=searchproblemas[i].tags[j].indexOf("resolURL/")
               let respuestaindex=searchproblemas[i].tags[j].indexOf("respuesta/")
               let cursoindex=searchproblemas[i].tags[j].indexOf("curso/")
               if (titleindex !==-1){searchproblemas[i].title=searchproblemas[i].tags[j].replace("title/", "")}
               if (resolURLindex !==-1){searchproblemas[i].resolURL=searchproblemas[i].tags[j].replace("resolURL/", "")}
               if (respuestaindex !==-1){searchproblemas[i].respuesta=searchproblemas[i].tags[j].replace("respuesta/", "")}
               if (cursoindex !==-1){searchproblemas[i].curso=searchproblemas[i].tags[j].replace("curso/", "")}
               searchproblemas[i].radioButtonDeshabilitado= false
               searchproblemas[i].alternativaDelUsuario=""
               searchproblemas[i].estado=""
            } 
             
    }}
router.get('/images', async (req, res) => {
   
    await buscarproblemas("catolica/matematica/algebra/problemas")
    const photos = searchproblemas
    res.render('images.hbs', {photos});
    
    
    
     

  
  

});

router.get('/images/add', async (req, res) => {
    
    await buscarproblemas("catolica/matematica/algebra/problemas")

    const photos = searchproblemas
    res.render('image_form.hbs', {photos});
    console.log(searchproblemas)
});
problemimage=""
problemimageprov=""
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
        
        if(isresolution=="true"){
            if (cursoaguardarelegido == "redaccion" || cursoaguardarelegido== "lectura" )
           {usefolder="/catolica/"+cursoaguardarelegido+"/resolucion" }
           else{usefolder="/catolica/"+"matematica/"+cursoaguardarelegido+"/resolucion" }}
        else{  
            if (cursoaguardarelegido == "redaccion" || cursoaguardarelegido== "lectura" ){usefolder="/catolica/"+cursoaguardarelegido+"/rproblemas"}
            else{usefolder="/catolica/"+ "matematica/"+cursoaguardarelegido+"/problemas"} };

        //en folder tu eliges a que ruta guardarlo
        if(isresolution!="true"){
        const result = await cloudinary.v2.uploader.upload(req.file.path,{ tags:["respuesta/" + respuesta,"curso/" +cursoaguardarelegido,"title/" + title,"description/"+ description,],folder: usefolder}).then((result)=>{console.log("success",JSON.stringify(result,null,2),problemimageprov=result.public_id,console.log(problemimageprov))})    };
    
        if(isresolution=="true"){let resolURL ;
            const resultreso = await cloudinary.v2.uploader.upload(req.file.path,{ tags:["respuesta/" + respuesta,"curso/" +cursoaguardarelegido,"title/" + title,"description/"+ description,],folder: usefolder}).then((result)=>{console.log("success",JSON.stringify(result,null,2),resolURL=result.url)});
            cloudinary.v2.uploader.add_tag("resolURL/"+ resolURL,problemimageprov,  function(error, result) { console.log(result, error) });}
    
        
       
   
      
        ;

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
    
    const {photo_id} = req.params;var id;   
    
    const photo = await cloudinary.v2.search
    .expression("asset_id:"+ photo_id).execute().then(result=>id=result.resources[0].public_id);
    const result = await cloudinary.v2.uploader.destroy(id);
    console.log("result")
    res.redirect('/images/add');
});
//agregar algunas partes a tu index que activa los puertos

router.get('/',async (req, res) => {
    res.render('index.html', {title: 'Preguntas Pucp'});
});

router.get('/aritmetica',async (req, res) => {
    res.render('../views/ciencias/aritmetica.html', {title: 'Preguntas Aritmetica'});    
});

router.get('/algebra',async (req, res) => {
    await buscarproblemas("catolica/matematica/algebra/problemas")
    console.log(searchproblemas)
    res.render('../views/ciencias/algebra.html', {title: 'Preguntas Algebra'});    
});

router.get('/geometria',async (req, res) => {
    res.render('../views/ciencias/geometria.html', {title: 'Preguntas Geometria'});    
});

router.get('/matematica',async (req, res) => {
    res.render('../views/ciencias/matematica.html', {title: 'Preguntas Matematica'});    
});

router.get('/redaccion',async (req, res) => {
    res.render('../views/letras/redaccion.html', {title: 'Preguntas Redaccion'});    
});

router.get('/lectura', async(req, res) => {
    res.render('../views/letras/lectura.html', {title: 'Preguntas Lectura'});    
});


module.exports = router;