import { Router } from "express";
import { perguntasController } from "./controllers/perguntasController.js";
import { alternativasController } from "./controllers/alternativasController.js";
import { alunosController } from "./controllers/alunosController.js";


const routes = Router();

routes.use('/api/perguntas', perguntasController);
routes.use('/api/alternativas', alternativasController);
routes.use("/api/alunos", alunosController);







export { routes };