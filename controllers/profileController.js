const Profile=require("../models/Profile")
const jwt=require("jsonwebtoken")
const User=require("../models/User")
module.exports={
    createProfile:async (req,res)=>{
        try{
        const newProfile=new Profile({
            userId:req.userId
            ,...req.body
        })
     const profile= await  newProfile.save()
    
      res.json({msg:"profile created",profile})
    } catch (error) {
        res.status(500).send("server error")
    }
    },

    
    getProfile:async (req,res)=>{

try {
            const profiles=await Profile.find().populate("userId")
            res.json({profiles})
        } catch (error) {
            
        }
    },
    deleteProfile:async (req,res)=>{
        try {
            const profileDeleted=await Profile.findOneAndDelete({_id:req.params.id})
            res.json({msg:"profile deleted",profileDeleted})
        } catch (error) {
            res.send("server error")
        }
    },
    editProfile:async (req,res)=>{
        try {
          const editedProfile=await  Profile.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
          res.json({msg:"Profile edited",editedProfile})
      } catch (error) {
          res.send("server error")
  
      }},

    getProfileById:async (req,res)=>{
       
        try {
            const profile = await Profile.findById(req.params.id).populate("userId");
            console.log(profile);
            if(!profile) {
                return res.status(400).json({ msg: "There is no profile" });
            }
            res.json(profile);
        }
        catch (error) {
            res.send("server error")

        }
    },


//delete Profile
deleteProfile:async (req, res) => {
try {
    const profileDeleted=await Profile.findOneAndDelete({_id:req.params.id})
    res.json({msg:"Profile deleted", profileDeleted})
  } catch (error) {
    res.send("server error")
}
},

getCurrentProfile : async (req, res) => {
    try {
        
        console.log('start');
        const profile = await Profile.findOne({userId:req.userId}).populate("userId")
        console.log('1',profile);

        if(!profile) {
            return res.status(400).json({ msg: "No Profile for this User "});
        }
        
        
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
},}




