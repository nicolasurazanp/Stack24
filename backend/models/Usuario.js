import mongoose from 'mongoose'

const usuarioSchema = mongoose.Schema({
    nombre: {
        type : String,
        required : true,
        trim: true
    },
    password: {
        type: string,
        required: true,
        trim: true,
    },
    email: {
        type: string,
        required: true,
        trim: true,
        unique: true,
    },
    token:{
        type: string,
    },
    confirmado: {
        type: Boolean,
        default: false,
    },

},{
    timestamps: true,
}
);

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;