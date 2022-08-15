//Require tje json web token
const jwt = require('jsonwebtoken');

//Require the User 
const User =require('../models/User');

const isAuth = async(req,res,next) =>{
    try {
        const token = req.headers['x-auth-token'];
    //Ckeck token
    if(!token){
        return res.status(401).send({msg:'No Token, authorization denied'});}

    //Decode token
    const decoded = await jwt.verify(token ,process.env.secretOrKey);


    //Add User from payload
    const user = await User.findById(decoded.id)

    //Check for User
    if(!user) {
        return res.status(401).send({msg :'authorization denied'})
    };
    req.user = user 

    next();

    } catch (error) {
       return res.status(400).json({msg:'Token is not valid '}) 
    }
};
module.exports = isAuth ;