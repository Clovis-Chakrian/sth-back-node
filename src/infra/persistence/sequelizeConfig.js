import { Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize(process.env.DB_URL);

export { sequelizeConnection };