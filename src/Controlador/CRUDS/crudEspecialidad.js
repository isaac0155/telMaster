module.exports = new crud();

function crud() {
  const Especialidad = require('./../../Modelo/BD/Esquemas/Especialidad.js');
  var tabla = "Especialidad";

  this.ingresar = (datos, callback) => {
    var docente = new Especialidad(datos);
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
    Especialidad.update({ "_id": id }, datosnuevos, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error modificando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.eliminar = (id, callback) => {
    Especialidad.deleteone({ "_id": id }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error eliminando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar1 = (id, callback) => {
    Especialidad.findOne({ "_id": id }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar = (filtro, callback) => {
    Especialidad.find((error, res) => {
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
    Especialidad.find((error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    })
  }
}
