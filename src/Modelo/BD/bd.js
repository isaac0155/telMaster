module.exports = new bd();

function bd() {
  this.cruds;
  this.iniciar = ()=>
  {
    this.cruds = require('./../../Controlador/CRUDS/index.js');
    this.cruds.iniciar();
  }
}
