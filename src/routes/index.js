const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Preguntas Pucp'});
});

// Ciencias
router.get('/aritmetica', (req, res) => {
    res.render('ciencias/aritmetica.html', {title: 'Aritmetica'});    
});

router.get('/algebra', (req, res) => {
    res.render('ciencias/algebra.html', {title: 'Algebra'});    
});

router.get('/geometria', (req, res) => {
    res.render('ciencias/geometria.html', {title: 'Geometria'});    
});

router.get('/matematica', (req, res) => {
    res.render('ciencias/matematica.html', {title: 'Matematica'});    
});

// Letras
router.get('/redaccion', (req, res) => {
    res.render('letras/redaccion.html', {title: 'Redaccion'});    
});

router.get('/lectura', (req, res) => {
    res.render('letras/lectura.html', {title: 'Lectura'});    
});


module.exports = router;