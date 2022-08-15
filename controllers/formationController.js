const Formation=require("../models/Formation")
const jwt=require("jsonwebtoken")

const User=require("../models/User")
module.exports={
    createFormation:async (req,res)=>{
        try{
        const newFormation=new Formation({
            userId:req.userId //GestionnaireId
            ,...req.body
        })
     const formation= await  newFormation.save()
    
      res.json({msg:"formation created",formation})
    } catch (error) {
        res.status(500).send("server error")
    }
    },

    
    getFormation:async (req,res)=>{

try {
            const formations=await Formation.find().populate("userId")
            res.json({formations})
        } catch (error) {
            
        }
    },
 
    editFormation:async (req,res)=>{
        try {
          const editedFormation=await  Formation.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
          res.json({msg:"Profile edited",editedFormation})
      } catch (error) {
          res.send("server error")
  
      }},



//delete Profile
deleteFormation:async (req, res) => {
try {
    const formationDeleted=await Formation.findOneAndDelete({_id:req.params.id})
    res.json({msg:"Formation deleted", formationDeleted})
  } catch (error) {
    res.send("server error")
}
},

}




