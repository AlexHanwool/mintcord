module.exports = (sequelize, DataTypes) => (
  sequelize.define('chatlog', {
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'userId'},
    },
    receiverId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'userId' },
    },
    messageType: {
      // ENUM? 
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    messageContent: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    // isEdited: {   // necessary? compared timestamp could replace with...
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    // }
  }, {
    timestamps: true,
    paranoid: true,
  })
);