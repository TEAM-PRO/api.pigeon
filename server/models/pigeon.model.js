'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pigeon = sequelize.define('Pigeon', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numberRing: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country: {
      type: DataTypes.VARCHAR(40),
      allowNull: false
    },
    forSale: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    controllerNumber: {
      type: DataTypes.INTEGER,
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
          Pigeon.belongsTo(models.User, {
            foreignKey: 'ownerId',
            hooks: true
          });
          Pigeon.hasMany(models.Exhibition, {
            foreignKey: 'id'
          });
        }
      },
      hooks: {
        beforeCreate: (pigeon, options) => {
          pigeon.createdAt = new Date().getTime();
          pigeon.updatedAt = new Date().getTime();
        },
        beforeUpdate: (pigeon, options) => {
          pigeon.updatedAt = new Date().getTime();            }
        }
    });
  return Pigeon;
};
