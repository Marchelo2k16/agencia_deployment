// importar Express

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');
require('dotenv').config({ path : 'variables.env'});



 //db.authenticate()
 //  .then(()=>console.log('base de datos conectada'))
 //  .catch(error => console.log('Error'))

// configurar Express
const app = express();

app.set('view engine','pug');

app.set('views', path.join(__dirname,'./views'))

app.use(express.static('public'));

const config = configs[app.get('env')];

app.locals.titulo = config.nombreSitio;

app.use((req,res,next)=>{
       const fecha = new Date();
       res.locals.fechaActual = fecha.getFullYear();
       res.locals.ruta = req.path;
       return next();
})

app.use(bodyParser.urlencoded({extended : true}))

app.use('/',routes());

const host = process.env.HOST || '0.0.0.0';

const port = process.env.PORT || 3000;

app.listen(port,host,()=>{ console.log("El Servidor esta funcionando")});