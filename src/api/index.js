import { Router } from "express";
import { perguntasController } from "./controllers/perguntasController.js";
import { respostasController } from "./controllers/respostasController.js";

const routes = Router();

routes.use('/api/perguntas', perguntasController);
routes.use('/api/respostas', respostasController);

export { routes };