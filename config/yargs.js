const descripcion = {
    descripcion: {
        demand: true,
        alias: "d",
        desc: "Descripción de tarea por hacer"
    }
}

const completado = {
    completado: {
        default: true,
        alias: "c",
        desc: "Estado de la tarea, ya sea completado o pendiente"
    }
}

const crear = {
    descripcion
}

const actualizar = {
    descripcion,
    completado
}

const borrar = {
    descripcion
}


const argv = require('yargs')
    .command('crear', 'Crea una tarea', crear)
    .command('actualizar', 'Permite actualizr el status de una tarea', actualizar)
    .command("borrar", "Permite borrar una tarea", borrar)
    .help()
    .argv;

module.exports = {
    argv
}