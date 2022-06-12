module.exports = new crud();

function crud() {
  const Cita = require('./../../Modelo/BD/Esquemas/Cita.js');
  var tabla = "Cita";

  this.ingresar = (datos, callback) => {
    var docente = new Cita(datos);
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
    Cita.update({ "_id": id }, datosnuevos, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error modificando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.eliminar = (id, callback) => {
    Cita.deleteone({ "_id": id }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error eliminando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar1 = (id, callback) => {
    Cita.findOne({ "_id": id }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar = (filtro, callback) => {
    Cita.find((error, res) => {
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
    Cita.find((error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    })
  }
}
