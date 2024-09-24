import mongoose from 'mongoose';

const pedidoSchema = mongoose.Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    proveedor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proveedor',
        required: true
    },
    productos: [{
        nombre: { type: String, required: true },
        cantidad: { type: Number, required: true },
        precio: { type: Number, required: true }
    }],
    total: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        enum: ['Pendiente', 'Enviado', 'Entregado'],
        default: 'Pendiente'
    }
}, {
    timestamps: true
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

export default Pedido;
