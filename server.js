//require express
const express = require('express')

//Require ConnectDB
const connectDB = require('./config/connectDB')

//Require Router
const userRoutes = require('./routes/api/userRoutes');
const profile = require('./routes/api/profile');
const adminRoutes = require("./routes/api/adminRoutes");
const course = require("./routes/api/course");
const chapitre = require("./routes/api/chapitre");
const formation = require("./routes/api/formation");
//init express
const app = express()

//App level middelware
app.use(express.json());


//connect DB 
connectDB();

//Use Route
app.use('/api/users',userRoutes);
app.use('/api/profiles',profile);
app.use('/api/admin',adminRoutes);

app.use('/api/courses',course);
app.use('/api/chapitres',chapitre);
// app.use('/api/chapitres',isAuth,chapitre);
app.use('/api/chapitres',chapitre);
app.use('/api/formations',formation);


//Create Port 
const port = 6000

//Launch server
app.listen(port , (error)=>
error ?
 console.log(error)
:console.log(`The server is running on port ${port}`));


