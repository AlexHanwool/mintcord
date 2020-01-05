module.exports = (sequelize, DataTypes) => (
  sequelize.define('user', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userEmail: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    provider: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: 'local',
    },
    snsId: {
      type: DataTypes.STRING(32),
      allowNull: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
  })
);