'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Exhibitions', [
      {
        date: Date.parse('2017-10-12 12:00:00.0003'),
        place: 'Lviv',
        firstPlaceWinnerId: 1,
        secondPlaceWinnerId: 2,
        thirdPlaceWinnerId: 3,
        name: 'First world Exhibition',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        date: Date.parse('2017-10-12 13:30:00.0003'),
        place: 'Lviv',
        firstPlaceWinnerId: 2,
        secondPlaceWinnerId: 3,
        thirdPlaceWinnerId: 1,
        name: 'Lviv Exhibition',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
      {
        date: Date.parse('2017-10-19 12:00:00.0003'),
        place: 'Kyiv',
        firstPlaceWinnerId: 2,
        secondPlaceWinnerId: 3,
        thirdPlaceWinnerId: 1,
        name: 'Exhibition for decorators pigeons',
        createdAt: Date.now(),
        updatedAt: Date.now()
      },
    ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Exhibitions', null)
};
