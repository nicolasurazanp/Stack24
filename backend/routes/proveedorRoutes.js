import express from 'express';
const router = express.Router();
import { registrarProveedor, obtenerProveedores, eliminarProveedor } from '../controllers/proveedorController.js';

// Rutas para proveedores
router.post('/', registrarProveedor);
router.get('/', obtenerProveedores);
router.delete('/:id', eliminarProveedor);

export default router;
