'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Competitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.VARCHAR(40),
        allowNull: false
      },
      date: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      place: {
        type: Sequelize.VARCHAR(40),
        allowNull: true
      },
      firstPlaceWinnerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pigeons',
          key: 'id'
        }
      },
      secondPlaceWinnerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pigeons',
          key: 'id'
        }
      },
      thirdPlaceWinnerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pigeons',
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable('Competitions');
  }
};
