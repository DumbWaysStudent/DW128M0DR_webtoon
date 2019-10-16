'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pages', [
        {
          "page": 1,
          "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 1
        },
        {
          "page": 2,
          "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 1
        },
        {
          "page": 3,
          "image": "https://www.forbes.com/sites/joanmacdonald.jpg",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 1
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
