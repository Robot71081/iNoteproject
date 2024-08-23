const express=require('express');
const User = require('../models/User');
const { body,validationResult } = require('express-validator');
const router = express.Router();


router.post('/', [body('name').isLength({min:5}),body('email').isEmail(),body('password').isLength({min:5})],(req,res)=>{
   // const user=User(req.body)
   // user.save()
   try{
    const result = validationResult(req);
  if (result.isEmpty()) {
    return User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(user=>res.json(user));
  }

  res.send({ errors: result.array() });
}catch(error){
    console.error(error.message);
    res.status(500).send("some error occured")
}
})

module.exports=router