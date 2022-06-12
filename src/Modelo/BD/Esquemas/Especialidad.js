const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const especialidadSchema = Schema({
    nombre: String
});
module.exports = mongoose.model('especialidad', especialidadSchema);
