const User=require("../models/User")

/* const getUsers = async(req,res) => {
    try {
        const users = await User.find().select("-passwprd").populate("Formations")
        res.json({msg:"list users loaded", users})
    } catch (error) {
        res.status(500).send("server error")
    } */
/* 
 module.exports={  
     getUsers: async(req,res) => { 
       try {
            
             let users= (await User.find().select("-password").populate("Formations"))
             res.json({msg:"list users loaded",users})
         } catch (error) {
             res.status(500).send("server error")
         }
     } */
    
// controller function

// this controller return list of all admins in the database (in the colllection user)
    // users considered as admin that mean user with role Admin in the database collection (Table in the sql language)
  const getAdmins = async (req, res) => {
    // business logic and database query or fetching
    try {
        // step one : to retreive data from collection and we put it inside variable     
        // const adminsArray = await User.find() // to get all data collection
        const adminsArray = await User.find({role: "Admin", isDeleted: false})//.select("-password") // to get all data collection
        // step two : send the result into the response api 
        res.status(200).json({
            data : adminsArray,
            count: adminsArray.length
        })
        // boom done !
        
    } catch (error) {
        console.log(error)
        // in case we have an error 
        res.status(400).json({
            error
        })
    }

}

// /api/admin/73857873578573
const updateAdmin = async (req, res) => {
    try {
        const id = req.params.id // number or mongo id
        const newAdminInfo = req.body // {}
        // step one find admin to update 
        const updatedAdmin = await User.findByIdAndUpdate(id,newAdminInfo)
        // check status code to verify
        res.status(200).json({updatedAdmin})
        
    } catch (error) {
        console.log(error)
        // in case we have an error 
        res.status(400).json({
            error
        })
    }
}

// /api/admin/delete/73857873578573
const deleteAdmin = async(req, res) => {
    try {
        const id = req.params.id
        const deletedAdmin = await User.findByIdAndUpdate(id,{isDeleted: true}) 
        res.status(200).json({msg: "admin deleted"})
    } catch (error) {
        console.log(error)
        // in case we have an error 
        res.status(400).json({
            error
        })
    }

}





const getTrainer = async (req, res) => {
    // business logic and database query or fetching
    try {
        // step one : to retreive data from collection and we put it inside variable 
        
        
        const trainerArray = await User.find({role: "Formateur"}) 
        // step two : send the result into the response api 
        res.status(200).json({
            data : trainerArray,
            count: trainerArray.length
        })
        // boom done !
        
    } catch (error) {
        console.log(error)
        // in case we have an error 
        res.status(400).json({
            error
        })
    }

}


module.exports = {
    getAdmins,
    updateAdmin,
    deleteAdmin,
    getTrainer
}