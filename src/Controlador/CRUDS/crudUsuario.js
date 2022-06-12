module.exports = new crud();

function crud() {
  const Usuario = require('./../../Modelo/BD/Esquemas/Usuario.js');
  var tabla = "Usuario";

  this.buscarUno = (id, callback) => {
      Usuario.findOne({ "_id": id }, (error, res) => {
        if (!error) {
          callback(res);
        }
        else {
          console.log("error buscando a uno en la tabla: " + tabla + "-", error);
        }
      });
    }

  this.ingresar = (datos, callback) => {
    var docente = new Usuario(datos);
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
    Usuario.update({ "_id": id }, datosnuevos, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error modificando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.eliminar = (id, callback) => {
    Usuario.deleteone({ "_id": id }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("Error eliminando en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar1 = (id, callback) => {
    Usuario.findOne({ "_id": id }, (error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    });
  }

  this.buscar = (filtro, callback) => {
    Usuario.find((error, res) => {
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
    Usuario.find((error, res) => {
      if (!error) {
        callback(res);
      }
      else {
        console.log("error buscando a uno en la tabla: " + tabla + "-", error);
      }
    })
  }
}
