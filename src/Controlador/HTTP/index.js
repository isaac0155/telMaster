var ret = (passport)=> {

  const express = require('express');
  const rutas = express.Router();
  const path = require('path');
  const { get } = require('./../../Modelo/Rutas/index.js');
  const { post } = require('./../../Modelo/Rutas/index.js');
  const { vista } = require('./../../Modelo/Rutas/index.js');
  const http = require('./../../Modelo/Rutas/index.js');
  const bd = require('./../../Modelo/BD/bd.js');
  bd.iniciar();
  var datos = {http};
  var ver = require('./../../Modelo/Autenticacion/verificar.js');

  var fs = require('fs');
  var Gets = fs.readdirSync('./src/Controlador/HTTP/Get');
  Gets.map((g)=>
  {
    require('./Get/'+g)(rutas,bd,ver,datos,http);
  });
  var fs = require('fs');
  var Post = fs.readdirSync('./src/Controlador/HTTP/Post');
  Post.map((g)=>
  {
    require('./Post/'+g)(rutas,bd,ver,datos,http,passport);
  });

//  console.log(get)
  return rutas;
}

module.exports = ret;
