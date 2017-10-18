'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'User',
          key: 'id'
        }
      },
      pigeonId: {
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Pigeon',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      body: {
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable('Comment');
  }
};