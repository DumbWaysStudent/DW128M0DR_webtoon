'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('pages', [
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 1
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 1
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 1
        },

        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 2
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 2
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 2
        },

        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 3
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 3
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 3
        },
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  4
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  4
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  4
        },

        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  5
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  5
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  5
        },

        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  6
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  6
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  6
        },
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  7
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  7
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id":  7
        },
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 8
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 8
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 8
        },
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 9
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 9
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 9
        },
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 10
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 10
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 10
        },
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 11
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 11
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 11
        },
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 12
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 12
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 12
        },
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 13
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 13
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 13
        },
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 14
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 14
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 14
        },
        {
          "page": 1,
          "image": "https://media.gettyimages.com/photos/anime-fighter-with-sword-picture-id518933168?k=6&m=518933168&s=612x612&w=0&h=M5L5sTmPhnKSj8LQHBAnOyb1ufBi_CMKixWfGUG8ePA=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 15
        },
        {
          "page": 2,
          "image": "https://media.gettyimages.com/photos/tahiti-girl-picture-id518932140?k=6&m=518932140&s=612x612&w=0&h=78DF7yD90F79aj0viH2vsKegzfiNYR8nKv25l0gOYXc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 15
        },
        {
          "page": 3,
          "image": "https://media.gettyimages.com/photos/brit-anime-girl-picture-id518931956?k=6&m=518931956&s=612x612&w=0&h=KMBLm6s3Ye-qxnhctZb1jemGwQVf45QB0rjTNq3h48A=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "episode_id": 15
        },
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
