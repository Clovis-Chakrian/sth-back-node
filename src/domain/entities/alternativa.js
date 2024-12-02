import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../infra/persistence/sequelizeConfig.js";

class Alternativa extends Model { }

Alternativa.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    enunciado: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    alternativaCorreta: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
     perguntaID: { // Adicionando a foreign key explicitamente
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { sequelize: sequelizeConnection, modelName: 'alternativas' }
);

export { Alternativa };