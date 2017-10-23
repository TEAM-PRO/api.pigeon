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
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Pigeon',
          key: 'id'
        }
      },
      secondPlaceWinnerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Pigeon',
          key: 'id'
        }
      },
      thirdPlaceWinnerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Pigeon',
          key: 'id'
        }
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
