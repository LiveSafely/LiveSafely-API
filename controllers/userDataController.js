var Data = require("../models/UserData");

//Insertar
module.exports.insert = (req, res) => {
    var params = req.body;
    var newData = new Data(params);

    newData
    .save()
    .then((data) => {
        res.json({
            Message : "Se inserto",
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}
//Obtener por codigo
module.exports.getDataByCode = async (req, res) =>{
    try{
        const data = await Data.find({ codigo: req.params.id})
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}
//Actualizar
module.exports.updateDataByCode = async (req,res) =>{
    try {
        const data = await Data.findOneAndUpdate({codigo: req.params.id}, req.body)
        res.json(data);
      }
      catch (err){
        res.status(500).json({message: err.message})
      }
}
//Eliminar
module.exports.deleteDataByCode = async (req, res) => {
    try {
      await Data.findOneAndDelete({codigo: req.params.id})
      res.json({message: 'Orden borrada'})
    }
    catch (err){
      res.status(500).json({message: "Ha ocurrido un error."})
    }
  }