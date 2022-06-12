module.exports = (passport)=>
{
  var bcrypt = require('bcryptjs');

  var bd = require('./../BD/bd.js');
  bd.iniciar();

    const LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser((user,done)=>
    {
    //  console.log("serializando usuario",user);
      done(null, user._id);
    });
    passport.deserializeUser((id, done) => {
      bd.cruds.crudUsuario.buscarUno(id,(usuario)=>
      {
        //console.log('desserializando', usuario);
        if((usuario!=undefined))
        {
          done(null, usuario);
        }
        else
        {
          done(null, false);
          console.log("no hay este usuario");
        }
      });
    });
    passport.use("registrarse", new LocalStrategy({
      usernameField: 'correo',
      passwordField: 'contra',
      passReqToCallback: true
    },(req,correo,contra,done)=>
    {
      var bcrypt = require('bcryptjs');

      bd.cruds.crudUsuario.buscar({correo:{tipo: 'igual',valor: correo}},(res)=>
      {
        if(res.length>0)
        {
          return done(null, false);
        }
        else
        {
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(contra, salt, function(err, contraEncriptado) {
              var datos = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                ci: req.body.ci,
                correo,
                contra: contraEncriptado,
                tipo: 'Usuario'
              };
              bd.cruds.crudUsuario.ingresar(datos,(res)=>
              {
                const confirmacion = require('./../ConfirmacionEmail/Funciones.js');
                confirmacion(correo,bd,res);
                datos._id = res;
                console.log('ingresó: ',res);
                return done(null, datos);
              });
            });
          });
        }
      });
    }));

    passport.use('iniciar sesion', new LocalStrategy({
       usernameField : 'correo',
       passwordField: 'contra',
       passReqToCallback: true
     }, (req, correo, contra, done)=> {
       bd.cruds.crudUsuario.buscar({correo:{tipo: 'igual',valor: correo}}, (usuario)=>{
         console.log(usuario);
        if((usuario.length<=0)){
         return done(null, false);
        }
        else
        {
          console.log('contra:',contra, usuario[0].contra)
          if(contra==usuario[0].contra)
          {
            req.session.usuario = usuario[0];
            return done(null, usuario[0]);
          }
          else
          {
            return done(null, false);
          }
        }
       });
      })
    );


}
