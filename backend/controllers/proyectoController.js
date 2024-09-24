import proyectos from '../models/Proyectos.js'

const obtenerProyectos = async (req, res) => {
    const proyectos = await Proyectos.find().where('creador').equals(req.usuario);

    res.json(proyectos);
};

const nuevoProyecto = async (req, res) => {
    const proyecto = new Proyectos(req.body);
    proyecto.creador = req.usuario._id;
    try {
        const proyectoAlmacenado = await proyecto.save();
        res.json(proyectoAlmacenado)
    } catch (error) {
        console.log(error);
    }
}

const obtenerProyecto = async (req, res) => {
    const {id} = req.params;

    const proyecto = await Proyectos.findById(id);
    console.log(proyecto);

    if (!proyecto) {
        const error = new Error("No encontrado");
        return res.status(404).json({msg: "Accion no valida"})
    }
    if(proyecto.creador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no valida");
        return res.status(404).json({msg: error.message})
    }
    res.json(proyecto);
};

const editarProyecto = async (req,res) => {
    const {id} = req.params;

    const proyecto = await Proyectos.findById(id);

    console.log(proyecto);

    if(!proyecto){
        const error = new Error("No encontrado");
        return res.status(404).json({ msg: "Accion no valida"});
    }
    if (proyecto.creador.toString() !== req.usuario._id.toString()){
        const error = new Error("Accion no valida");
        return res.status(401).json({msg: error.message})
    }

    proyecto.nombre = req.body.nombre || proyecto.nombre;
    proyecto.descripcion = req.body.descripcion || proyecto.descripcion;
    proyecto.fechaEntrega = req.body.fechaEntrega || proyecto.fechaEntrega;
    proyecto.cliente = req.body.cliente || proyecto.cliente;
}
export {
    obtenerProyectos,
    nuevoProyecto,
}