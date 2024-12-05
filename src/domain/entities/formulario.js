import { Model, DataTypes } from "sequelize";
import { sequelizeConnection } from "../../infra/persistence/sequelizeConfig.js";

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

export { Formulario };
