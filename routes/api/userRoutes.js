const express=require("express")
const router=express.Router();
const authController=require("../../controllers/authController");
const isAuth = require("../../middlewares/isAuth");
const {registerRules,validator,loginRules}=require("../../middlewares/validator")

//@path  http://localhost:5000/api/users/register
//metode post registre user
//@accés public or private

router.post("/register",registerRules(),validator,authController.register)



//@path  http://localhost:5000/api/users/login
//metode post login user
//@accés public or private
router.post('/login',loginRules(),validator, authController.login)
    

//@path  http://localhost:5000/api/users/authUser
//get authentified user
//@accés private
    router.get('/authUser',isAuth,authController.getAuthUser)
    
       

module.exports=router;