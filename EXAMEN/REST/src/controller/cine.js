const cinemodels = require('../models/cine');

class CineController{

    async create(req, res){
        try {
          const {entrada}=req.body;
          const {costo} = req.body;
          if((entrada == "3D" && costo != 10)||(entrada== "Normal" && monto != 7)){
            req.body.error = 'Monto es incorrecto';
          }
          const data = await cinemodels.create(req.body);
          res.json({data});
        } catch (error) {
          res.json({error})
        }
      }

    async getAll(req, res){
    try {
        const data = await cinemodels.find();
        res.json({data});
        } catch (error) {
        res.json({error})
        }
    } 

  

    async errores(req, res){
        try {
        const data = await cinemodels.find({tipoError:{
            $ne: null
        }});
        res.json({data});
        } catch (error) {
        res.json({error})
        }
  }
}

module.exports = new CineController();