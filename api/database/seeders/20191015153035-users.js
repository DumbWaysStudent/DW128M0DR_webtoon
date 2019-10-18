'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
      {
        email:'1@mo.mo',
        password:'1',
        name:'Momo Satu',
        createdAt: "2019-10-10 08:31",
        updatedAt: "2019-10-10 08:31"
      },
      {
        email:'2@mo.mo',
        password:'1',
        name:'Otoke Coek',
        createdAt: "2019-10-10 08:31",
        updatedAt: "2019-10-10 08:31"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
