
module.exports = (rutas, bd, ver, datos, http)=>
{
  rutas.get(http.get.buscarEspecialidad,(req,res)=>
  {
    datos.usuario = req.user;
    bd.cruds.crudEspecialidad.buscarTodo((especialidades)=>
    {
      datos.especialidades = especialidades;
      datos.doctores = [];
      res.render(http.vista.buscarEspecialidad,{datos});
    })
  });
  rutas.get(http.get.buscarEspecialidad + "/:id",(req,res)=>
  {
    var id = req.params.id;
    datos.usuario = req.user;
    bd.cruds.crudEspecialidad.buscarTodo((especialidades)=>
    {
      datos.especialidades = especialidades;
      bd.cruds.crudUsuario.buscarTodo((doctores)=>
      {
        datos.doctores = doctores.filter(a=>a.tipo=="doctor")
        datos.doctores = datos.doctores.filter(a=>a.doctor.idEspecialidad.includes(id))
        datos.doctores = datos.doctores.map(a=>{
          var espDoc = especialidades.filter(b=>{
            if(a.doctor.idEspecialidad.includes(b._id))
            return b.nombre;
          })
          a.doctor.idEspecialidad = espDoc.map(a=>a.nombre).join(", ")
          return a;
        })
        datos.doctores = datos.doctores.filter(a=>a!=undefined);
        res.render(http.vista.buscarEspecialidad,{datos});
      })
    })
  });
}
