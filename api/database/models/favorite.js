'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    webtoon_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  favorite.associate = function(models) {

    favorite.belongsTo(models.user, {
      as:'user',
      foreignKey:'user_id'
    }),

    favorite.belongsTo(models.webtoons, {
      as:'webtoons',
      foreignKey:'webtoon_id'
    })
  }
  return favorite
};