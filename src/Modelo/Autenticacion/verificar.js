module.exports = new obj();
function obj()
{
  var http = require('./../Rutas/index.js');
  this.cualquiera = (req, res, next)=>{
    if(req.isAuthenticated())
    {
      console.log(req.app.locals.usuario)
      return next();
    }
    else
    {
      req.flash("error","Primero es necesario iniciar sesion");
      res.redirect(http.get.rutaCuenta.inicioSesion);
    }
  }
  this.nada = (req, res, next)=>{
      return next();
  }
  this.centro = (req, res, next)=>{
    if(req.isAuthenticated())
    {
        if(req.user.tipo == 'centro')
        {
          return next();
        }
        else
        {
          req.flash("error","Es necesario iniciar sesion como personal de centro de salud");
          res.redirect('back');
        }
    }
    else
    {
      req.flash("error","Primero es necesario iniciar sesion");
      res.redirect('back');
    }
  }
  this.doctor = (req, res, next)=>{
    if(req.isAuthenticated())
    {
      if(req.user.tipo == 'doctor')
      {
        return next();
      }
      else
      {
        req.flash("error","Es necesario iniciar sesion como Doctor");
        res.redirect('back');
      }
    }
    else
    {
      req.flash("error","Primero es necesario iniciar sesion");
      res.redirect('back');
    }
  }
  this.administrador = (req, res, next)=>{
    if(req.isAuthenticated())
    {
      if(req.user.tipo == 'administrador')
      {
        return next();
      }
      else
      {
        req.flash("error","Es necesario iniciar sesion como Administrador");
        res.redirect('back');
      }
    }
    else
    {
      req.flash("error","Primero es necesario iniciar sesion");
      res.redirect('back');
    }
  }
  this.paciente = (req, res, next)=>{
    if(req.isAuthenticated())
    {
      if(req.user.tipo == 'paciente')
      {
        return next();
      }
      else
      {
        req.flash("error","Es necesario iniciar sesion como Paciente");
        res.redirect('back');
      }
    }
    else
    {
      req.flash("error","Primero es necesario iniciar sesion");
      res.redirect('back');
    }
  }
}
