import mongoose, { Mongoose } from "mongoose";

const proyectosSchema = mongoose.Schema({
    nombre:{
        type: String,
        trim: true,
        required: true,
    },
    descripcion: {
        type: String,
        trim: true,
        required: true,
    },
    fechaEntrega: {
        type: Date,
        default: Date.now(),
    },
    creador: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    }
}, {
    timestamps: true,
}
);

const Proyecto = mongoose.model("proyecto", proyectosSchema);
export default Proyecto;