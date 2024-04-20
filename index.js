import express from 'express';
import chalk from "chalk";
import roomRoutes from './routes/roommatesRoutes.js';
import spentRoutes from './routes/gastosRoutes.js';
import setupMiddlewares from './middlewares/middlewares.js';
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
// Configuración de la carpeta estática y los middlewares
setupMiddlewares(app);
//Routes
app.use('/', roomRoutes)
app.use('/', spentRoutes)

app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));