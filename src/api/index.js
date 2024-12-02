import { Router } from "express";
import { perguntasController } from "./controllers/perguntasController.js";
import { alternativasController } from "./controllers/alternativasController.js";

const routes = Router();

routes.use('/api/perguntas', perguntasController);
routes.use('/api/alternativas', alternativasController);

export { routes };