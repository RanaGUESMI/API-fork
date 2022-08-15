const {body, validationResult} = require('express-validator');

const registerRules = () => [
     body('name','Name is required').notEmpty(),
     body('lastName','LastName is required').notEmpty(),
     body('email','email is required and An e-mail address must have a format "aname@yourcompanyname').isEmail(),
     body('password','password is required and must contain at least 6 characters').isLength({
        min:6,
        max:20}),

]

const loginRules = () => [

   body('email','email is required and An e-mail address must have a format "aname@yourcompanyname').isEmail(),
    body('password','password is required and must contain at least 6 characters').isLength({
       min:6,
       max:20}),
       

]
 const validator = (req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty())  {
      return res.status(400).send({errors:errors.array().map((el)=>({msg:el.msg,})),
   })
    }
    next();
 }
module.exports ={registerRules,loginRules,validator}

