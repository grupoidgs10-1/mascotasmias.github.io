const mongoose = require('mongoose');
const URL = 'mongodb+srv://Bastin:1234@cluster0.3qujw.mongodb.net/test';

mongoose.connect(URL, {
  
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(db => console.log('Conexion exitosa'))
.catch(err => console.log('Error de conexion a la DB: ' + err));

module.exports = mongoose;

