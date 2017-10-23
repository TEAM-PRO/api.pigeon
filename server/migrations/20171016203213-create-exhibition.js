'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Exhibitions', {
      date: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      place: {
        type: Sequelize.STRING(40),
        allowNull: false
      },
      firstPlaceWinnerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      secondPlaceWinnerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      thirdPlaceWinnerId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING(40),
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
    queryInterface.dropTable('Exhibitions');
  }
};
