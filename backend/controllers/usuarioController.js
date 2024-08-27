import Usuario from '../models/Usuario.js'
import generarId from '../helpers/generar_Id.js'

const registrar = async (req, res) => {

//evitar registros Duplicados

 const {email} = req.body;
 const existeUsuario = await Usuario.findOne({ email });

 if(existeUsuario){
    const error = new Error("Usuario ya Registrado");
    return res.status(400).json({ msg: error.message});
 }

    try {
        const usuario = new Usuario(req.body);
        usuario.token = generarId();
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado)

    } catch (error) {
    console.log(error);
    }
};


export { registrar }