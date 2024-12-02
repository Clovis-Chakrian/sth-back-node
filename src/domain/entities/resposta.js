import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../infra/persistence/sequelizeConfig.js";
import { Pergunta } from "./pergunta.js";

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
    /*
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
        key: 'id', // Supondo que a tabela Aluno tenha uma coluna id como chave primária
    },
    },
    alternativaId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
        model: Alternativa,
        key: 'id', // Supondo que a tabela Alternativa tenha uma coluna id como chave primária
     },
    },*/
    },
  { sequelize: sequelizeConnection, modelName: 'respostas' }
);

Resposta.belongsTo(Pergunta, { foreignKey: 'perguntaId' });

/* 
Definindo os relacionamentos (Associação)

Resposta.belongsTo(Formulario, { foreignKey: 'formularioId' });
Resposta.belongsTo(Aluno, { foreignKey: 'alunoId' });
Resposta.belongsTo(Alternativa, { foreignKey: 'alternativaId' });
*/

export { Resposta };