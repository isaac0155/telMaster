
module.exports = (rutas, bd, ver, datos, http, passport)=>
{
  rutas.post(http.post.enviarSolicitud,(req,res)=>
  {
    req.body.idAdminCentro = req.user._id;
    req.body.estado = "pendiente"
    console.log("llega:");
    console.log(req.body);
    bd.cruds.crudCita.ingresar(req.body,()=>
    {
      res.redirect("back")
    })
  });
  rutas.post(http.post.rechazarSolicitud,(req,res)=>
  {
    console.log("llega:");
    console.log(req.body);
    bd.cruds.crudCita.modificar(req.body.idCita, {estado: "rechazado"}, ()=>
    {

      res.redirect("back")
    })
  });
  rutas.post(http.post.aceptarSolicitud,(req,res)=>
  {
    console.log("llega:");
    console.log(req.body);
    bd.cruds.crudCita.modificar(req.body.idCita, {estado: "aceptada"}, ()=>
    {
      res.redirect("back")
    })
  });
}
