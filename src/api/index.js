import { Router } from "express";
import { perguntasController } from "./controllers/perguntasController.js";
import { alternativasController } from "./controllers/alternativasController.js";
import { alunosController } from "./controllers/alunosController.js";
import { formularioController } from "./controllers/formularioController.js";
import { respostasController } from "./controllers/respostasController.js";
import { notaController } from "./controllers/notaController.js";

const routes = Router();

routes.use("/api/perguntas", perguntasController);
routes.use("/api/alternativas", alternativasController);
routes.use("/api/alunos", alunosController);
routes.use("/api/formularios", formularioController);
routes.use('/api/respostas', respostasController);
routes.use('/api/notas', notaController);


export { routes };
