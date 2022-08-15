const Course=require("../models/Course");
const jwt=require("jsonwebtoken");

const User=require("../models/User");
module.exports={
    createCourse:async (req,res)=>{
        try{
            const newCourse=new Course({
               
                userId:req.userId
                ,...req.body})
     const course= await newCourse.save()
    
      res.json({msg:"course created",course})
    } catch (error) {
        res.status(500).send("server error")
    }
    },

    
    getCourse:async (req,res)=>{

try {
            const courses=await Course.find().populate("userId")
            res.json({courses})
        } catch (error) {
            
        }
    },
 
    editCourse:async (req,res)=>{
        try {
          const editedCourse=await  Course.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
          res.json({msg:"Profile edited",editedCourse})
      } catch (error) {
          res.send("server error")
  
      }},



//delete Profile
deleteCourse:async (req, res) => {
try {
    const courseDeleted=await Course.findOneAndDelete({_id:req.params.id})
    res.json({msg:"Course deleted", courseDeleted})
  } catch (error) {
    res.send("server error")
}
},

}




