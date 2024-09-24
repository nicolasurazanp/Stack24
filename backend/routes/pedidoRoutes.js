import express from 'express';
const router = express.Router();
import { registrarPedido, obtenerPedidos, eliminarPedido } from '../controllers/pedidoController.js';

// Rutas para pedidos
router.post('/', registrarPedido);
router.get('/', obtenerPedidos);
router.delete('/:id', eliminarPedido);

export default router;
