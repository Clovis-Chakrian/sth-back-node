import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../infra/persistence/sequelizeConfig.js";

class Pergunta extends Model { }

Pergunta.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    enunciado: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  },
  { sequelize: sequelizeConnection, modelName: 'perguntas' }
);

export { Pergunta };