const req = require('express/lib/request');
const perrosModel = require('../models/perros.model');
const perrosController = {};

perrosController.getperros = async (req, res) => {

  const perros = await perrosModel.find();
  res.json(perros);
};

perrosController.deleteperros = async (req, res) => {
  await perrosModel.findByIdAndDelete(req.params.id);
  res.json({'status': 'perros Eliminada!'})

}


perrosController.addperros = async (req, res) => {
  const perros = new perrosModel(req.body);
  await perros.save();
  res.json({ status: 'perros guardada' });
};

module.exports = perrosController;