const Toy = require('../models/Toy')
const { mongooseToObject } = require('../../util/mongoose')
class ToyController{
    //[GET] /toys/:slug
    show(req,res,next){
       Toy.findOne({slug : req.params.slug})
       .then(toy => 
            res.render('toys/show', {toy: mongooseToObject(toy)})
       )
       .catch(next)
    }
    //[GET]/ toys/create
    create(req,res,next){
       res.render('toys/create')
     }
      //[POST]/ toys/store
    store(req,res,next){
        //res.json(req.body)
       const fromData = req.body;
       fromData.image = `https://i.ytimg.com/vi${req.body.videoid}/D4kzSU5d4QQ/maxresdefault.jpg`;
       const toy = new Toy(fromData)
       toy.save()
       .then(()=> res.redirect(`/`))
       .catch(error=>{

       })
         
      }
       //[GET]/ toys/:id/edit
    edit(req,res,next){
      Toy.findById(req.params.id)
      .then(toy => res.render('toys/edit',{
         toy: mongooseToObject(toy)
      }))
      .catch(next)
    }
     //[PUT]/toy/:id
    update(req,res,next){
      Toy.updateOne({_id: req.params.id}, req.body)
      .then(()=> res.redirect('/me/stored/toys'))
      .catch(next)
      
      //[DELETE]/toy/:id
    }
    delete(req, res, next) {
      Toy.deleteOne({_id: req.params.id })
      .then(()=>res.redirect('back'))
      .catch(next)
    }
  
}




module.exports = new ToyController;

//const toyController = require('./ToyController.js')