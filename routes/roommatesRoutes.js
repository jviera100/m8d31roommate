import express from 'express';
import chalk from "chalk";

import { addRoommates, eliminarRoommates, getRoommates } from '../controller/roommatesController.js'
import { getGastos } from '../controller/gastosController.js'
const router = express.Router();

router.post('/roommate', addRoommates);

router.get("/roommates", getRoommates);

router.delete('/roommate/:id', eliminarRoommates); 

router.get("/gastos", getGastos);

export default router