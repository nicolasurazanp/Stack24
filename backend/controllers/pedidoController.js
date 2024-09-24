import Pedido from '../models/Pedido.js';

const registrarPedido = async (req, res) => {
    try {
        const pedido = new Pedido(req.body);
        const pedidoAlmacenado = await pedido.save();
        res.json(pedidoAlmacenado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al registrar el pedido' });
    }
};

const obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.find().populate('usuario').populate('proveedor');
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al obtener los pedidos' });
    }
};

const eliminarPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findById(id);

        if (!pedido) {
            const error = new Error("Pedido no encontrado");
            return res.status(404).json({ msg: error.message });
        }

        await pedido.deleteOne();
        res.json({ msg: "Pedido eliminado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error al eliminar el pedido' });
    }
};

export { registrarPedido, obtenerPedidos, eliminarPedido };
