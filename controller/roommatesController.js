import {
  addRoommateQuery,
  getRoommatesQuery,
  recalcularDeudas,
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




export {
    addRoommates,
    getRoommates    
}