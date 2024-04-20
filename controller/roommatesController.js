import chalk from "chalk";
import {
    addRoommateQuery,
    getRoommatesQuery,
    recalcularDeudas,
    eliminarRoommateQuery // Cambiar a eliminarRoommateQuery
  } from "../queries/roommatesConsultas.js";
import path from 'path'
  
const __dirname = import.meta.dirname

const addRoommates = async(req, res) => {
    try {
        await addRoommateQuery()
        recalcularDeudas();
        res.redirect('/')
    } catch (error) {
        
    }
}

const getRoommates = async (req, res) => {
    try {
        const roommatesJson = await getRoommatesQuery()
        res.json(roommatesJson)
    } catch (error) {
        console.log(error)
    }
};


const eliminarRoommates = async (req, res) => {
    try {
        const id = req.query.id; // Obtener el ID del compañero de cuarto desde la consulta
        console.log(chalk.underline.bgRedBright.magenta.bold.italic("ID a eliminar:", id)); // Mostrar el ID del compañero de cuar
        
        await eliminarRoommateQuery(id); // Llamar a la función eliminarRoommateQuery con el ID del compañero de cuarto
        recalcularDeudas(); // Recalcular las deudas después de eliminar al compañero de cuarto
        res.send("Roommate eliminado"); // Enviar una respuesta indicando que el compañero de cuarto ha sido eliminado
    } catch (error) {
        console.log(chalk.underline.bgRedBright.magenta.bold.italic("Error al eliminar el roommate:", error.message)); // Mostrar el error en consola indicando que no se pudo eliminar el roommate(error.message);
    }
};

export {
    addRoommates,
    getRoommates,
    eliminarRoommates    
};

