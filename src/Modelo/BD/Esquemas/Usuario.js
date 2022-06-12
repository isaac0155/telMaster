const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const doctorSchema = Schema({
  estado: String,
  zoom: String,
  idEspecialidad: [String]
});
const usuarioSchema = Schema({
    nombres: String,
    apellidos: String,
    direccion: String,
    horarios: String,
    correo: String,
    fechaNac: String,
    carnet: String,
    contra: String,
    tipo: String,
    telefono: String,
    idCentro: String,
    telefono: String,
    doctor: doctorSchema
});
module.exports = mongoose.model('usuario', usuarioSchema);
