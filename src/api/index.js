import { Router } from "express";
import { perguntasController } from "./controllers/perguntasController.js";
import { alternativasController } from "./controllers/alternativasController.js";
import { respostasController } from "./controllers/respostasController.js";

const routes = Router();

routes.use('/api/perguntas', perguntasController);
routes.use('/api/alternativas', alternativasController);
routes.use('/api/respostas', respostasController);

export { routes };