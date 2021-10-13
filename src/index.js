const express =  require('express');
require('dotenv').config();
const path = require('path');

// Initializations
const app = require('./fotoapp');

// settings
// app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

 /* ESO DE ARRIBA ES PARA DROPBOX */   
// middleware

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(app.get('port'), () => {
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Server on port', app.get('port'));
});
