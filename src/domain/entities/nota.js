import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../infra/persistence/sequelizeConfig.js";

class Nota extends Model {}

Nota.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    formularioId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    alunoId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    respostaId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { sequelize: sequelizeConnection, modelName: "notas" }
);

export { Nota };
