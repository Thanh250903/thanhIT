const Toy = require('../models/Toy')
const { multipleMongooseToObject} = require('../../util/mongoose')
class MeController{
    //[GET] /me/stored/toys
    storedToy(req,res,next){
        Toy.find({})
            .then(toys=>  res.render('me/stored-toys',{
                toys: multipleMongooseToObject(toys)
            }))
            .catch(next)
    }
}

module.exports = new MeController;

