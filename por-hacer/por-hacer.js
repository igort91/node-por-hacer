const fs = require('fs');

let statusTareas = [];

const cargarDB = () => {

    try {
        statusTareas = require('../db/data.json');
    } catch (error) {
        statusTareas = [];
    }
}

const guardarDb = () => {

    let data = JSON.stringify(statusTareas);

    fs.writeFile("./db/data.json", data, (error) => {
        if (error) throw new Error("No se pudo grabar la tarea", error);
    })

}

const getListado = () => {
    cargarDB();
    return statusTareas;
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    statusTareas.push(porHacer);
    guardarDb();

    return porHacer;
}

const actualizar = (descripcion, estado = true) => {

    cargarDB();

    let index = statusTareas.findIndex(tarea => { return tarea.descripcion === descripcion });

    if (index >= 0) {
        statusTareas[index].completado = estado;
        guardarDb();
        return estado;
    }
    return estado;
}

const borrar = (descripcion) => {
    cargarDB();
    let index = statusTareas.findIndex(tarea => { return tarea.descripcion === descripcion });
    if (index >= 0) {
        statusTareas.splice(index, 1);
        guardarDb();
        return true;
    }
    return false;

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}