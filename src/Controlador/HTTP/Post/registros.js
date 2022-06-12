
module.exports = (rutas, bd, ver, datos, http, passport)=>
{
  rutas.post(http.post.cambiarEstado,(req,res)=>
  {
    if(req.user.doctor.estado == "activo")
    {
      req.user.doctor.estado = "ocupado"
    }
    else
    {
      req.user.doctor.estado = "activo"
    }
    bd.cruds.crudUsuario.modificar(req.user._id, req.user, (re)=>
    {
      console.log(re);
      res.redirect("back")
    });
  });
  rutas.post(http.post.registrarHospital,(req,res)=>
  {
    console.log("llega:");
    console.log(req.body);
    bd.cruds.crudCentro.ingresar(req.body, (re)=>
    {
        console.log("Ingresado");
        res.redirect("back");
    })
  });
  rutas.post(http.post.registrarEspecialidad,(req,res)=>
  {
    console.log("llega:");
    console.log(req.body);
    bd.cruds.crudEspecialidad.buscarTodo(especialidades=>
    {
      if(!especialidades.map(a=>a.nombre).includes(req.body.nombre) && req.body.nombre != "")
      {
        bd.cruds.crudEspecialidad.ingresar(req.body, (re)=>
        {
          console.log("Ingresado");
          req.flash("confirmacion","Especialidad registrada")
          res.redirect("back");
        })
      }
      else {
        console.log("Repetido");
        req.flash("error","Esta especialidad ya existe o es invalida")
        res.redirect("back");
      }
    })
  });
  rutas.post(http.post.añadirEspecialidad,(req,res)=>
  {
    console.log("llega:");
    console.log(req.body);
    req.user.doctor.idEspecialidad.push(req.body.especialidad);
    console.log(req.user);
    bd.cruds.crudUsuario.modificar(req.user._id, {doctor: req.user.doctor}, ()=>
    {
      console.log("Modificado");
      res.redirect("back");
    })
  });
  rutas.post(http.post.registrarAdminPosta,(req,res)=>
  {
    console.log("llega:");
    console.log(req.body);
    req.body.tipo="centro";
    bd.cruds.crudUsuario.ingresar(req.body, (re)=>
    {
        console.log("Ingresado");
        res.redirect("back");
    })
  });
  rutas.post(http.post.registrarDoctor,(req,res)=>
  {
    console.log("llega:");
    console.log(req.body);
    req.body.tipo = "doctor"
    req.body.doctor = {};
    req.body.doctor.estado = "activo";
    req.body.doctor.zoom = req.body.zoom;
    bd.cruds.crudUsuario.ingresar(req.body, (re)=>
    {
        console.log("Ingresado");
        res.redirect("back");
    })
  });
  require('./../../../Modelo/Autenticacion/local.js');
  // this.rutas.post('/registrarPersonal',passport.authenticate("local-signup",
  // {
  //   successRedirect: '/',
  //   failureRedirect: '/Usuarios/Registrar',
  //   failureFlash: true
  // }));
  rutas.post("/iniciarSesion",passport.authenticate("iniciar sesion",
  {
    //successRedirect: '/Usuarios/Cuenta',
    failureRedirect: '/',
    failureFlash: true
  }), (req,res)=>
  {
    console.log("ultimoEnlace",req.session.ultimoEnlace);
    if(req.session.ultimoEnlace!=undefined)
    {
      res.redirect("/");
      req.session.ultimoEnlace=undefined;
    }
    else
    {
      res.redirect(http.get.cuenta);
    }
  });
}
