
module.exports = (rutas, bd, ver, datos, http, passport)=>
{
  rutas.post(http.post.buscarEspecialidad,(req,res)=>
  {
    console.log("llega:");
    console.log(req.body);
    res.redirect(http.get.buscarEspecialidad + "/" + req.body.especialidad)
  });
}
