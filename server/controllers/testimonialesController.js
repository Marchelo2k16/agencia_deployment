const Testimonial = require('../models/Testimoniales');


exports.mostrarTestimoniales = async (req,res) =>{
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales',{
      pagina:"Testimoniales",
      testimoniales
      })
  }

  exports.agregarTestimonial = async (req,res)=>{
     
    let {nombre,correo,mensaje} = req.body;
 
    let errores = [];
    if(!nombre){
       errores.push({mensaje : "Agrega nombre"})
    };
    if(!correo){
       errores.push({mensaje : "Agrega correo"})
    };
    if(!mensaje){
       errores.push({mensaje : "Agrega mensaje"})
    };

    if(errores.length > 0 ){
      res.render('testimoniales',{
         errores,
         nombre,
         correo,
         mensaje
      });
    }else{
        Testimonial.create({
           nombre,
           correo,
           mensaje
        })
        .then(testimonial => res.redirect('testimoniales'))
       .catch(error => console.log(error))
    }

 }