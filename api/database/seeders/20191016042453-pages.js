'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pages', [
        {
          "page": 1,
          "image": "https://webtoon-phinf.pstatic.net/20190515_42/1557901969730pXAbt_JPEG/15579019697021485365.jpg?type=q90",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 1
        },
        {
          "page": 2,
          "image": "https://webtoon-phinf.pstatic.net/20190515_80/1557901969931SUAY0_JPEG/15579019698821485363.jpg?type=q90",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 1
        },
        {
          "page": 3,
          "image": "https://webtoon-phinf.pstatic.net/20190515_226/1557901969932vfOus_JPEG/15579019699141485368.jpg?type=q90",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 1
        },
        {
          "page": 4,
          "image": "https://webtoon-phinf.pstatic.net/20190515_103/1557901970158Ecmhx_JPEG/15579019701401485362.jpg?type=q90",
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
