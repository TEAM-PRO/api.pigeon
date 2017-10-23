'use strict';

module.exports = (sequelize, DataTypes) => {
  const Exhibition = sequelize.define('Exhibition', {
    date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    place: {
      type: DataTypes.VARCHAR(40),
      allowNull: false
    },
    firstPlaceWinnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Pigeons',
        key: 'id'
      }
    },
    secondPlaceWinnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Pigeons',
        key: 'id'
      }
    },
    thirdPlaceWinnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Pigeons',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.VARCHAR(40),
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
