import express from 'express';

import{
    obtenerProyectos,
    nuevoProyecto,
    obtenerProyecto,
    editarProyecto,
    eliminarProyecto,
} from '../controllers/proyectoController.js';

const router = express.Router();

// crud
router.route('/').get(obtenerProyectos).post(nuevoProyecto);

router.route('/:id')
      .get(obtenerProyecto)
      .put(editarProyecto)
      .delete(eliminarProyecto);

export default router;