import express from 'express';
const router = express.Router();
import {registrar} from "../controllers/usuarioController.js"

// autenticacion, Registro y confirmacion de usuarios

router.post('/' , registrar);

export default router;