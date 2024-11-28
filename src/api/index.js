import { Router } from "express";
import { perguntasController } from "./controllers/perguntasController.js";

const routes = Router();

routes.use('/api/perguntas', perguntasController);

export { routes };