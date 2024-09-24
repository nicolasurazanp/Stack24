import mongoose from 'mongoose';

const proveedorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    empresa: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true,
});

const Proveedor = mongoose.model('Proveedor', proveedorSchema);

export default Proveedor;
