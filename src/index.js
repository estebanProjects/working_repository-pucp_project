const express =  require('express');
const app = express();
const path = require('path');


// settings
// app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
/*require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: 'pl8T020wcoEAAAAAAAAAAWcfHiPx7gZGA6lWdiLcFms-ZEygVEzVPVtWb5fmPWKd' });
dbx.usersGetCurrentAccount()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });
  ESO DE ARRIBA ES PARA DROPBOX */   
// middleware

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(process.env.PORT || 8080, () => {
    console.log('Server on port 8080');
});
