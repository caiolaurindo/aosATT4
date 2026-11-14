import 'dotenv/config';
import { Sequelize, DataTypes } from 'sequelize';
import pg from 'pg';
import getTarefa from './tarefa.js';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não definida nas variáveis de ambiente.');
}

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectModule: pg,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const Tarefa = getTarefa(sequelize, DataTypes);

export default Tarefa;
