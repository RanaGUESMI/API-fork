//require express
const express = require("express");

const cors = require("cors");

//Require ConnectDB
const connectDB = require("./config/connectDB");

//Require Router
const userRoutes = require("./routes/api/userRoutes");
const profile = require("./routes/api/profile");
const adminRoutes = require("./routes/api/adminRoutes");
const course = require("./routes/api/course");
const chapitre = require("./routes/api/chapitre");
const formation = require("./routes/api/formation");
const category = require("./routes/api/categoryRoutes");

//init express
const app = express();

//App level middelware
app.use(express.json());

app.use(cors("*")); // cors middleware

//connect DB
connectDB();

//Use Route
app.use("/api/users", userRoutes);
app.use("/api/profiles", profile);
app.use("/api/gestionnaires", adminRoutes);
app.use("/api/Formateurs/", adminRoutes);
app.use("/api/Students", adminRoutes);

app.use("/api/courses", course);
app.use("/api/categories", category);
app.use("/api/chapitres", chapitre);
//  app.use('/api/chapitres',isAuth,chapitre);
app.use("/api/formations", formation);

//Create Port
const port = 5000;

//Launch server

app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(`The server is running on port ${port}`)
);
