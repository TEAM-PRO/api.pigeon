'use strict';

module.exports = (sequelize, DataTypes) => {
  const Competition = sequelize.define('Competition', {
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    place: {
      type: DataTypes.STRING(40),
      allowNull: true
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
    createdAt: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: models => {
        Competition.belongsTo(models.Pigeon, {
          foreignKey: 'firstPlaceWinnerId',
          hooks: true
        });
        Competition.belongsTo(models.Pigeon, {
          foreignKey: 'secondPlaceWinnerId',
          hooks: true
        });
        Competition.belongsTo(models.Pigeon, {
          foreignKey: 'thirdPlaceWinnerId',
          hooks: true
        });
      }
    },
    hooks: {
      beforeCreate: (competition, options) => {
        competition.date && (competition.date = Date.parse(competition.date));
        competition.createdAt = new Date().getTime();
        competition.updatedAt = new Date().getTime();
      },
      beforeUpdate: (competition, options) => {
        competition.updatedAt = new Date().getTime();
      }
    }
  });
  return Competition;
};
