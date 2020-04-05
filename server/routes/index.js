const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function(){

    router.get('/',homeController.consultasHomepage);
     
    router.get('/nosotros', nosotrosController.infoNosotros);

      router.get('/viajes',viajesController.mostrarViajes);

     router.get('/viaje/:id',viajesController.mostrarViaje);

   router.get('/testimoniales',testimonialesController.mostrarTestimoniales);

   router.post('/testimoniales',testimonialesController.agregarTestimonial);

      return router;
}
