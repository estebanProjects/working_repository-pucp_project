const express = require('express');
const router = express.Router();

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