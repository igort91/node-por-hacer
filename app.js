const argv = require('./config/yargs').argv;
const colors = require('colors');



const porHacer = require('./por-hacer/por-hacer');

console.log("valor de argv", argv);

let comando = argv._[0];




switch (comando) { //es como un if pero evalua multiples casos de manera más entendible

    case "crear": //crea la tarea
        let tarea = porHacer.crear(argv.descripcion);
        console.log("Crear tarea", tarea);
        break;

    case "listar": //lista la tarea
        let lista = porHacer.getListado();
        for (let tarea of lista) {
            console.log("========= Tarea x hacer   =========".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log("===================================".green);
        }
        break;

    case "actualizar": //actualiza el status de una tarea
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log("Se actualizo la tarea " + argv.descripcion + " con el estado: " + actualizado);
        break;

    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        if (!borrado) {
            console.log("No se encontró tarea con el nombre: " + argv.descripcion);
            break;
        }
        console.log(borrado);
        break;

    default:
        console.log("Comando no reconcido");
}





//anexar tareas

//listar tareas

//actualizar tareas (si esta completa o pendiente o en proceso )  ej: -c true