const mongoose = require('mongoose');
const {Schema} = mongoose;

const PerrosSchema = new Schema({
  nombre: {type: String, require: true},
  raza:{type: String, required: true},
  edad: {type: String, require: true},
  dueño:{type: String, required: true},
  foto:{type: String, required: true},
});

module.exports = mongoose.model('Perros', PerrosSchema);