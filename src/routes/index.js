const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Preguntas Pucp'});
});

router.get('/aritmetica', (req, res) => {
    res.render('aritmetica.html', {title: 'Preguntas Aritmetica'});    
});

router.get('/algebra', (req, res) => {
    res.render('algebra.html', {title: 'Preguntas Algebra'});    
});

router.get('/geometria', (req, res) => {
    res.render('geometria.html', {title: 'Preguntas Geometria'});    
});

router.get('/matematica', (req, res) => {
    res.render('matematica.html', {title: 'Preguntas Matematica'});    
});
router.get('/lenguaje', (req, res) => {
    res.render('lenguaje.html', {title: 'Preguntas Leanguaje'});    
});

module.exports = router;