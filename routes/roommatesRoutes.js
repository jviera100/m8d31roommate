import express from 'express';

import { addRoommates, getRoommates } from '../controller/roommatesController.js'
import { getGastos } from '../controller/gastosController.js'
const router = express.Router();

router.post('/roommate', addRoommates);

router.get("/roommates", getRoommates);

router.get("/gastos", getGastos);


export default router