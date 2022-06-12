const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const centroSchema = Schema({
    nombre: String,
    direccion: String,
    tipo: String,
    telefono: String,
    correo: String,
    idDoctor: [String]

});
module.exports = mongoose.model('centro', centroSchema);
