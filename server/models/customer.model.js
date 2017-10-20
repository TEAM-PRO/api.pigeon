'use strict';

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pigeonId: {
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
        Customer.belongsTo(models.User, {
          foreignKey: 'userId',
          hooks: true
        });
        Customer.belongsTo(models.Pigeon, {
          foreignKey: 'pigeonId',
          hooks: true
        });
      }
    },
    hooks: {
      beforeCreate: (customer, options) => {
        customer.createdAt = new Date().getTime();
        customer.updatedAt = new Date().getTime();
      },
      beforeUpdate: (customer, options) => {
        customer.updatedAt = new Date().getTime();
      }
    }
  });
  return Customer;
};
