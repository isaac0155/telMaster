const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = Schema({
    nombres: String,
    apellidos: String,
    horarios: String,
    correo: String,
    carnet: String,
    contra: String,
    fechaNac: String,
    estado: String,
    zoom: String,
    idEspecialidad: [String]

});
module.exports = mongoose.model('doctor', doctorSchema);
