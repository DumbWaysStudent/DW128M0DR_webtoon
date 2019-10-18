'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('episodes', [
        {
          "title": "Ep. 1",
          "image": "https://media.gettyimages.com/photos/french-anime-girl-picture-id518931946?k=6&m=518931946&s=612x612&w=0&h=Pdc5wARm7UYb3-OPpUVKkv4p8VQBNJxcfy-UbFRMI14=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":1
        },
        {
          "title": "Ep. 2",
          "image": "https://media.gettyimages.com/photos/sagittarius-picture-id518936408?k=6&m=518936408&s=612x612&w=0&h=M7cx-q-vPu7WOwXuvekOLijb_KhgiN2k3a7i599s0Mc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":1
        },
        {
          "title": "Ep. 3",
          "image": "https://media.gettyimages.com/photos/virgo-picture-id518936426?k=6&m=518936426&s=612x612&w=0&h=p3wttB0CabqhVT_gL8EYVnZl_oIDMeDzpkDB8HUbZ-s=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":1
        },        

        {
          "title": "Ep. 1",
          "image": "https://media.gettyimages.com/photos/french-anime-girl-picture-id518931946?k=6&m=518931946&s=612x612&w=0&h=Pdc5wARm7UYb3-OPpUVKkv4p8VQBNJxcfy-UbFRMI14=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":2
        },
        {
          "title": "Ep. 2",
          "image": "https://media.gettyimages.com/photos/sagittarius-picture-id518936408?k=6&m=518936408&s=612x612&w=0&h=M7cx-q-vPu7WOwXuvekOLijb_KhgiN2k3a7i599s0Mc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":2
        },
        {
          "title": "Ep. 3",
          "image": "https://media.gettyimages.com/photos/virgo-picture-id518936426?k=6&m=518936426&s=612x612&w=0&h=p3wttB0CabqhVT_gL8EYVnZl_oIDMeDzpkDB8HUbZ-s=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":2
        },
        {
          "title": "Ep. 1",
          "image": "https://media.gettyimages.com/photos/french-anime-girl-picture-id518931946?k=6&m=518931946&s=612x612&w=0&h=Pdc5wARm7UYb3-OPpUVKkv4p8VQBNJxcfy-UbFRMI14=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":3
        },
        {
          "title": "Ep. 2",
          "image": "https://media.gettyimages.com/photos/sagittarius-picture-id518936408?k=6&m=518936408&s=612x612&w=0&h=M7cx-q-vPu7WOwXuvekOLijb_KhgiN2k3a7i599s0Mc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":3
        },
        {
          "title": "Ep. 3",
          "image": "https://media.gettyimages.com/photos/virgo-picture-id518936426?k=6&m=518936426&s=612x612&w=0&h=p3wttB0CabqhVT_gL8EYVnZl_oIDMeDzpkDB8HUbZ-s=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":3
        },

        {
          "title": "Ep. 1",
          "image": "https://media.gettyimages.com/photos/french-anime-girl-picture-id518931946?k=6&m=518931946&s=612x612&w=0&h=Pdc5wARm7UYb3-OPpUVKkv4p8VQBNJxcfy-UbFRMI14=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":4
        },
        {
          "title": "Ep. 2",
          "image": "https://media.gettyimages.com/photos/sagittarius-picture-id518936408?k=6&m=518936408&s=612x612&w=0&h=M7cx-q-vPu7WOwXuvekOLijb_KhgiN2k3a7i599s0Mc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":4
        },
        {
          "title": "Ep. 3",
          "image": "https://media.gettyimages.com/photos/virgo-picture-id518936426?k=6&m=518936426&s=612x612&w=0&h=p3wttB0CabqhVT_gL8EYVnZl_oIDMeDzpkDB8HUbZ-s=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":4
        },

        {
          "title": "Ep. 1",
          "image": "https://media.gettyimages.com/photos/french-anime-girl-picture-id518931946?k=6&m=518931946&s=612x612&w=0&h=Pdc5wARm7UYb3-OPpUVKkv4p8VQBNJxcfy-UbFRMI14=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":5
        },
        {
          "title": "Ep. 2",
          "image": "https://media.gettyimages.com/photos/sagittarius-picture-id518936408?k=6&m=518936408&s=612x612&w=0&h=M7cx-q-vPu7WOwXuvekOLijb_KhgiN2k3a7i599s0Mc=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":5
        },
        {
          "title": "Ep. 3",
          "image": "https://media.gettyimages.com/photos/virgo-picture-id518936426?k=6&m=518936426&s=612x612&w=0&h=p3wttB0CabqhVT_gL8EYVnZl_oIDMeDzpkDB8HUbZ-s=",
          "createdAt": "2019-10-10 08:31",
          "updatedAt": "2019-10-10 08:31",
          "webtoon_id":5
        },
        // {
        //   "title": "Ep. 4",
        //   "image": "https://media.gettyimages.com/photos/pisces-picture-id518936432?k=6&m=518936432&s=612x612&w=0&h=1zyhFGDn_jKk_OcMjjJKdhdXoml4oGU1sUIiTKA9KUM=",
        //   "createdAt": "2019-10-10 08:31",
        //   "updatedAt": "2019-10-10 08:31",
        //   "webtoon_id":5
        // },
        // {
        //   "title": "Ep. 5",
        //   "image": "https://media.gettyimages.com/photos/billy-girl-picture-id522217186?k=6&m=522217186&s=612x612&w=0&h=59Z5yvSiZZZ2vtcqF3Qtuy9fW0kB-i24i3Diem5BU6s=",
        //   "createdAt": "2019-10-10 08:31",
        //   "updatedAt": "2019-10-10 08:31",
        //   "webtoon_id":5
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
