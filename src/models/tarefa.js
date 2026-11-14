
const getTarefa = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define('Tarefa', {
    objectId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    concluida: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return Tarefa;
};

export default getTarefa;
