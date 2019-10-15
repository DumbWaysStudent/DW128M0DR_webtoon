const jwt = require('jsonwebtoken')

const models = require('../database/models')
const User = models.user

exports.login = (req, res)=>{    
    const {username, password} = req.body
    
    User.findOne({where: {username, password}}).then(user=>{
        
        if(user){
            const token = jwt.sign({ userId: user.id }, 'my-secret-key')
            res.send({
                username,
                token
            }) 
        }else{
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    })
}