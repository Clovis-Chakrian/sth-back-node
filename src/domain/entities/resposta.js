import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../infra/persistence/sequelizeConfig.js";
import { Pergunta } from "./pergunta.js";
import { Alternativa } from "./alternativa.js";
import { Formulario } from "./formulario.js";
import { Aluno } from "./aluno.js";

class Resposta extends Model { }

Resposta.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    perguntaId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: Pergunta,
          key: 'id', 
        },
      },
    formularioId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
        model: Formulario,
        key: 'id', 
    },
    },
    alunoId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
        model: Aluno,
        key: 'id',
    },
    },
    alternativaId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
        model: Alternativa,
        key: 'id',
     },
    },
    },
  { sequelize: sequelizeConnection, modelName: 'respostas' }
);

Resposta.belongsTo(Pergunta, { foreignKey: 'perguntaId' });
Resposta.belongsTo(Formulario, { foreignKey: 'formularioId' });
Resposta.belongsTo(Aluno, { foreignKey: 'alunoId' });
Resposta.belongsTo(Alternativa, { foreignKey: 'alternativaId' });


export { Resposta };