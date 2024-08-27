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

const autenticar = async (req, res) => {
    const { email, password} = req.body;

    // Comprobar si el usuario existe
    
    const usuario = await Usuario.findOne({email})
    if(!usuario){
        const error = new Error("El usuario No existe");
        return res.status(404).json({ msg: error.message});
     }

     // comprobar si el usuario esta confirmado
     if(!usuario.confirmado){
        const error = new Error("Tu cuenta no ha sido confirmada");
        return res.status(403).json({ msg: error.message});
     }
}

const confirmar = async (req, res) => {
    const{token} = req.params;
    const usuarioConfirmar = await Usuario.findOne({token});
    if(!usuarioConfirmar){
        const error = new Error("Token  no valido");
        return res.status(402).json({ msg: error.message});
    }
    try {
        usuarioConfirmar.confirmado = true;
        usuarioConfirmar.token = ""
        await usuarioConfirmar.save();
        res.json({ msg: "Usuario Confirmado Correctamente"});
    } catch (error) {
        console.log(error);
    }
}


export { registrar }