const Chapitre=require("../models/Chapitre")
const jwt=require("jsonwebtoken")
const User=require("../models/User")


const createChapitre = async (req,res)=>{
    try{
    const newChapitre= new Chapitre({
         userId:req.user.id, 
        ...req.body
    })
 const chapitre= await  newChapitre.save()

  res.json({msg:"chapitre created",chapitre})
} 
   catch (error) {
    console.log(error)
    res.status(500).send("server error")
}
}
const getChapitre = async (req,res)=>{

      try {
            const chapitres= await Chapitre.find().populate("userId")
            res.json({chapitres})
        } 
        catch {
        console.log(error)
    res.status(500).send("server error")
        }
    }
 
const editChapitre = async (req,res)=>{
        try {
          const editedChapitre=await  Chapitre.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
          res.json({msg:"Chapitre edited",editedChapitre})
      } 
      catch (error) {
          res.send("server error")
  
      }}


  const deleteChapitre = async (req, res) => {
try {
    const chapitreDeleted=await Chapitre.findOneAndDelete({_id:req.params.id})
    res.json({msg:"Chapitre deleted", chapitreDeleted})
  } 
  catch (error) {
    res.send("server error")
}
}

module.exports = {
    createChapitre,
    getChapitre,
    editChapitre,
    deleteChapitre,
}






