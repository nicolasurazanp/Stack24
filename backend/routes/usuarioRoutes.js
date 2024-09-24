import express from 'express';
const router = express.Router();
import {registrar,
       autenticar, 
       confirmar,
       olvidePassword,
       comprobarToken,
       nuevoPassword,
       } from "../controllers/usuarioController.js"

// autenticacion, Registro y confirmacion de usuarios

router.post('/' , registrar);
router.post('/login' , autenticar);
router.post('/confirmar' , confirmar);
router.post('/olvide-password', olvidePassword)
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

export default router;