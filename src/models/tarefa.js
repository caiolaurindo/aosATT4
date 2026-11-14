const getTarefa = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define('Tarefa', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('pendente', 'em andamento', 'concluida'),
      allowNull: false,
      defaultValue: 'pendente',
    },
  });

  return Tarefa;
};
