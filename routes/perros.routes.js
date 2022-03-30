const express = require('express');
const router = express.Router();
const perrosController = require('../Controller/perros.controller');

//controlador

router.get('/', perrosController.getperros);
router.post('/', perrosController.addperros);
//router.put('/',);
router.delete('/:id', perrosController.deleteperros); 

module.exports = router;