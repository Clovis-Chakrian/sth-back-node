import { Alternativa } from "../../domain/entities/alternativa.js";
import { Pergunta } from "../../domain/entities/pergunta.js";
import { Nota } from "../../domain/entities/nota.js";
import { Formulario } from "../../domain/entities/formulario.js";
import { Aluno } from "../../domain/entities/aluno.js";
import { Resposta } from "../../domain/entities/resposta.js";


Alternativa.belongsTo(Pergunta, { foreignKey: "perguntaID" });
Pergunta.hasMany(Alternativa, { foreignKey: "perguntaID" });

Nota.belongsTo(Formulario, { foreignKey: "formularioId" });
Formulario.hasMany(Nota, { foreignKey: "formularioId" });

Nota.belongsTo(Aluno, { foreignKey: "alunoId" });
Aluno.hasMany(Nota, { foreignKey: "alunoId" });

Nota.belongsTo(Resposta, { foreignKey: "respostaId" });
Resposta.hasMany(Nota, { foreignKey: "respostaId" });
