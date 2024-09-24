import Proveedor from '../models/Proveedor.js';

const registrarProveedor = async (req, res) => {
    const { email } = req.body;
    const existeProveedor = await Proveedor.findOne({ email });

    if (existeProveedor) {
        const error = new Error("Proveedor ya registrado");
        return res.status(400).json({ msg: error.message });
    }

    try {
        const proveedor = new Proveedor(req.body);
        const proveedorAlmacenado = await proveedor.save();
        res.json(proveedorAlmacenado);
    } catch (error) {
        console.log(error);
    }
};

const obtenerProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    } catch (error) {
        console.log(error);
    }
};

const eliminarProveedor = async (req, res) => {
    try {
        const { id } = req.params;
        const proveedor = await Proveedor.findById(id);

        if (!proveedor) {
            const error = new Error("Proveedor no encontrado");
            return res.status(404).json({ msg: error.message });
        }

        await proveedor.deleteOne();
        res.json({ msg: "Proveedor eliminado correctamente" });
    } catch (error) {
        console.log(error);
    }
};

export { registrarProveedor, obtenerProveedores, eliminarProveedor };
