module.exports = new crud();

function crud() {
  const Doctor = require('./../../Modelo/BD/Esquemas/Doctor.js');
  var tabla = "Doctor";

  this.ingresar = (datos, callback) => {
    var docente = new Doctor(datos);
    docente.save((error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error ingresando en la tabla: " + tabla + " - ", error);
      }
    });
  }

  this.modificar = (id, datosnuevos, callback) => {
    Doctor.update({ "_id": id }, datosnuevos, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error modificando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.eliminar = (id, callback) => {
    Doctor.deleteone({ "_id": id }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error eliminando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar1 = (id, callback) => {
    Doctor.findOne({ "_id": id }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar = (filtro, callback) => {
    Doctor.find((error, res) => {
      if (!error) {
        const buscar = require("./buscar.js");
        res = buscar(res, filtro);
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscarTodo = (callback) => {
    Doctor.find((error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    })
  }
}
