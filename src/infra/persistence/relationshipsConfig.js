import { Alternativa } from "../../domain/entities/alternativa";
import { Pergunta } from "../../domain/entities/pergunta";


Alternativa.belongsTo(Pergunta, { foreignKey: "perguntaID" });
Pergunta.hasMany(Alternativa, { foreignKey: "perguntaID" });
