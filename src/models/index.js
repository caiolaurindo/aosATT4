import { Sequelize, DataTypes } from 'sequelize';
import getTarefa from './tarefa.js';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
});

const Tarefa = getTarefa(sequelize, DataTypes);

export default Tarefa;
