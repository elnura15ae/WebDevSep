var express = require('express');
var router = express.Router();
const User= require('../model/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, (response)=>{ // all the records in the objects
    if(err){
      res.json(err)
    }else{
      res.json(response)
    }
  }) 
});

router.post('/',(req, res)=>{
  const newUser = new User({
    username:req.body.username,
    password:req.body.password
  })
  newUser.save()
  .then(response=>{
    res.json({
      message:'OK',
      data: response
    })
  })
  .catch(err=>{
    res.json(err)
  })
  // res.json({
  //   id:1
  // })
})
module.exports = router;
