const express =  require('express');
const app = express();
const path = require('path');


// settings
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middleware

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

var Parse = require('parse/node');

Parse.initialize("RwbhceyC51nedPXtskCsVgyABgcZtn2c8saeigMW","DSmjkuzLLvzrfw6VaQPJbTW7fRJPOVjL59zLV1kG"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = 'https://parseapi.back4app.com/';
console.log("funciona??");
