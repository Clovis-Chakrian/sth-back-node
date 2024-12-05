import { Model, DataTypes } from "sequelize";
import { sequelizeConnection } from "../../infra/persistence/sequelizeConfig.js";
import { Resposta } from "./resposta.js";
import { Pergunta } from "./pergunta.js";

class Formulario extends Model {}

Formulario.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    perguntas: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    notas: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    room: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255],
      },
    },
  },
  { sequelize: sequelizeConnection, modelName: "formularios" }
);


Formulario.hasMany(Resposta, { foreignKey: "formularioId" });

Formulario.belongsToMany(Pergunta, {
  through: "FormularioPergunta",
  foreignKey: "formularioId",
  as: "formulariosPerguntas", 
});

Pergunta.belongsToMany(Formulario, {
  through: "FormularioPergunta",
  foreignKey: "perguntaId",
  as: "perguntasFormularios",
});

export { Formulario };
