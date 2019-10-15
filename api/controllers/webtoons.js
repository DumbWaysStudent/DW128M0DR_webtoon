const models = require('../database/models');
const User = models.user;
const Webtoon = models.webtoons;

module.exports = {
index : (req,res) => {
    Webtoon.findAll({
       include: [{
           as: "created",
           model: User
       }
     ]
   }).then(webtoons=>res.send(webtoons))
 },
 
 favorite:(req,res) => {
     Webtoon.findAll({
         where:{
             isFavorite:true
         }
     }).then(webtoons => res.send(webtoons))
 },

title:(res,req) => {
    Webtoon.findAll({
        where:{
            title:req.params.title
        }
    }).then(webtoons => res.send(webtoons))
} 
}
