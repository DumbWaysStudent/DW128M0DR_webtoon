'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoons = sequelize.define('webtoons', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    isFavorite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    createBy: DataTypes.INTEGER
  }, {});
  webtoons.associate = function(models) {
    webtoons.belongsTo(models.user, {
      as:"created",
      foreignKey:'createBy'
    })
  };
  return webtoons;
};