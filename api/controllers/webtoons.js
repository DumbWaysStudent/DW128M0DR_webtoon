const Sequelize = require('sequelize')
const models = require('../database/models')
const User = models.user
const Webtoon = models.webtoons
const Episodes = models.episodes 
const Pages = models.pages
const Favorite = models.favorite
const Op = Sequelize.Op

module.exports = {
webtoons:(req,res) => {
    Webtoon.findAll().then(webtoons => res.send(webtoons))
 },

search:(req,res) => {
    const {search} = req.query
    if(search){
       Webtoon.findAll({
           where  : {
               title : { [Op.like] : `%${search}%` }
             }
       })
       .then(webtoons => res.send(webtoons))

    } else {
        null
    }
},

favorite:(req,res) => {
    const {favorite} = req.query
    if(favorite=="true"){
       Webtoon.findAll({
           where:{ 
               isFavorite:true
           }
       })
       .then(webtoons => res.send(webtoons))
    } else if(favorite == "false"){
        Webtoon.findAll({
            where:{
                isFavorite:false
            }
        })
        .then(webtoons => res.send(webtoons))
    } else {
       null
    }
},

episodes:(req,res) => {
    Episodes.findAll({
        where:{webtoon_id:req.params.webtoon_id}        
    })
    .then(webtoons => res.send(webtoons))
    .catch((err) => {
        console.log(err)
        res.send({
            status: "error",
            message:"Episodes is undifined"
        })
    })   
},

pages:(req,res) => {
    Pages.findAll({
        include:[{
            model:Episodes,
            where:{
                webtoon_id:req.params.webtoon_id,
                id:req.params.episode_id
            }
        }]
    })
    .then(webtoons=>res.send(webtoons))
    .catch(()=>{
        res.send({
            status:'error',
            message:'Detail Pages error'
        })
    })
},

user:(req, res) => {
    const { user_id } = req.params
    User.findAll({
        where: { id: user_id },
          include: [{
            model: Webtoon
        }] 
    })
    .then(posts=>
        res.send(posts[0]['webtoons'])
    )
    .catch(() => {
        res.sendStatus(400).json({
            status:"error",
            message:"User is undifined"
        })
    })
},
userPost:(req, res) => {
    const { user_id } = req.params
    const {title,genre,isFavorite,image} = req.body 
    Webtoon.create({
        title,
        genre,
        isFavorite,
        image,
    },{
        where: { 
            id: user_id,
        } 
    }
    )
    .then((webtoons) => res.send(webtoons))
    .catch((err) => {
        console.log(err)
        res.send({
            status:"error",
            message:"Failed to create webtoon"
        })
    })
},

updateWebtoon:(req,res) => {
    const { user_id, webtoon_id } = req.params
    const {title,genre,isFavorite,image} = req.body 
    Webtoon.update({
        title,
        genre,
        isFavorite,
        image
    },{
        where: { 
            id: webtoon_id,
            createBy:user_id
        }
    })
    Webtoon.findOne({
        where: { 
            id: webtoon_id,
            createBy:user_id
        }
    })
    .then( webtoons => res.send(webtoons))
    .catch(() => {
        res.send({
            status:"error",
            message:"Failed to update webtoon"
        })
    })
},

deleteWebtoon:(req,res) => {
    const { user_id, webtoon_id } = req.params
    Webtoon.destroy({
        where:{
            id:webtoon_id,
            createBy:user_id
        }
    })
    .then(() => res.status(200).json({
        status:"sucess",
        message:"The Webtoon was deleted"
    }))
    .catch(() => res.send({
        status:"error",
        message:"Failed to delete webtoon"
    }))
},

createEpisode:(req, res) => {
    Episodes.create({
            title:req.body.title,
            image:req.body.image,
            webtoon_id:req.params.id_webtoon
    },{
        where: { 
            id: req.params.id_user,
        }
    })
    .then(webtoons => res.send(webtoons))
    .catch(() => res.send({
        status:'error',
        message:`can't create episode`
    }))
},

updateEpisode:(req,res) => {
    const { user_id, webtoon_id, episode_id } = req.params
    Webtoon.findAll({
            where: { 
                createBy: user_id,
                id:webtoon_id
            }
    })
    .then(data => {
        if (data.length > 0) {
            Episodes.update({
                title:req.body.title,
                image:req.body.image
              },{
                where: { webtoon_id, id: episode_id }
              })  
              .then(() => {
              Episodes.findOne({
                where: { webtoon_id, id: episode_id }
              })
              .then(data => {
                res.send(data);
              });
            });
          } else {
            res.status(400).json({
                status:'panding', 
                message: "Bad Request",
            });
          }
       
    })
    .catch(() => {
        res.send({
            status:'error',
            message:`Can't update episode`
        })
    })

},
deleteEpisode:(req, res) => {
    const { webtoon_id, episode_id } = req.params
    Episodes.destroy({
        where:{
            id:episode_id
        }
    })
    .then(()=> res.send({
        status: "success",
        message : "Episode was deleted"
    }))
    .catch(() => {
        res.send({
            status:'error',
            message:`Failed to delete a episode`
        })
    })
},

createImage:(req, res) => {
    Episodes.findAll({
        include: [{
            model: Webtoon,
            where: {
                createBy: req.params.user_id,
                id: req.params.webtoon_id
            }
        }],
          
          where: {
            //   webtoon_id: req.params.webtoon_id,
              id: req.params.episode_id
          }
    })
    .then( () => {
        Pages.create({
            episode_id: req.params.episode_id,
            page:req.body.page,
            image:req.body.image
        }).then((data)=>res.send(data))
    })
    .catch((err)=> 
    // console.log(err)
    res.send({
        status:'error',
        message:`Can't upload image`
    })
    )
},

deleteImage:(req, res) => {
    Pages.findAll({
        include: [{
            model: Episodes,
            where: { webtoon_id: req.params.webtoon_id, id: req.params.episode_id },
            include: [{
                model: Webtoon,
                where: { createBy: req.params.user_id, id: req.params.episode_id },
            }]
        }]
      })
      .then(() => {
          Pages.destroy({
            where: { episode_id: req.params.episode_id, id: req.params.image_id }
          })
          res.send({
              status:"sucess",
              message:'Deleted Image'
          })
        })
        .catch(()=> res.send({
            status:'error',
            message:`Can't delete the image`
        }))
      }
}