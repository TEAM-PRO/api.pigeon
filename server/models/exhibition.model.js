'use strict';

module.exports = (sequelize, DataTypes) => {
  const Exhibition = sequelize.define('Exhibition', {
    date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    place: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    firstPlaceWinnerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    secondPlaceWinnerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    thirdPlaceWinnerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: models => {
        Exhibition.belongsTo(models.Pigeon, {
          foreignKey: 'firstPlaceWinnerId',
          hooks: true
        });
        Exhibition.belongsTo(models.Pigeon, {
          foreignKey: 'secondPlaceWinnerId',
          hooks: true
        });
        Exhibition.belongsTo(models.Pigeon, {
          foreignKey: 'thirdPlaceWinnerId',
          hooks: true
        });
      }
    },
    hooks: {
      beforeCreate: (exhibition, options) => {
        exhibition.date && (exhibition.date = Date.parse(exhibition.date));
        exhibition.createdAt = new Date().getTime();
        exhibition.updatedAt = new Date().getTime();
      },
      beforeUpdate: (exhibition, options) => {
        exhibition.updatedAt = new Date().getTime();
      }
    }
  });
  return Exhibition;
};
