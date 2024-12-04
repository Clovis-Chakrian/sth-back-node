import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../infra/persistence/sequelizeConfig.js";

class Aluno extends Model { }

Aluno.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    periodo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    curso: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    instituicaoEnsino: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ciclo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    squad: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  { sequelize: sequelizeConnection, modelName: 'alunos' }
);

export { Aluno };
