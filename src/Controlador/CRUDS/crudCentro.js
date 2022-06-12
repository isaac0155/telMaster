module.exports = new crud();

function crud() {
  const Centro = require('./../../Modelo/BD/Esquemas/Centro.js');
  var tabla = "Centro";

  this.buscarUno = (id, callback) => {
      Centro.findOne({ "_id": id }, (error, res) => {
        if (!error) {
          callback(res);
        }
        else {
          console.log("error buscando a uno en la tabla: " + tabla + "-", error);
        }
      });
    }
  this.ingresar = (datos, callback) => {
    var docente = new Centro(datos);
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
    Centro.update({ "_id": id }, datosnuevos, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error modificando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.eliminar = (id, callback) => {
    Centro.deleteone({ "_id": id }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error eliminando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar1 = (id, callback) => {
    Centro.findOne({ "_id": id }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar = (filtro, callback) => {
    Centro.find((error, res) => {
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
    Centro.find((error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    })
  }
}
