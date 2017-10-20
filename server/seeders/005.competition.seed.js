'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Competitions', [
      {
        name: 'First world big competition',
        date: Date.parse('2017-12-21 15:00:00.00+03'),
        plase: 'Lviv city, Valova street',
        firstPlaceWinnerId: 1,
        secondPlaceWinnerId: 2,
        thirdPlaceWinnerId: 3,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Competitions', null)
};
