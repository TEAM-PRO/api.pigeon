'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pigeons', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ownerId: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        price: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        age: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        numberRing: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false
        },
        forSale: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false
        },
        controllerNumber: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.BIGINT
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.BIGINT
        }
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pigeons');
  }
};
