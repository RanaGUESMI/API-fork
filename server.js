//require express
const express = require("express");

// adminBro setup
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
// const AdminBroExpressjs = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");

const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });

//Require ConnectDB
const connectDB = require("./config/connectDB");

//Require Router
const userRoutes = require("./routes/api/userRoutes");
const profile = require("./routes/api/profile");
const adminRoutes = require("./routes/api/adminRoutes");
const course = require("./routes/api/course");
const chapitre = require("./routes/api/chapitre");
const category = require("./routes/api/categoryRoutes");
const partner = require("./routes/api/partnerRoute");

// models
const Course = require("./models/Course");
const User = require("./models/User");
const Category = require("./models/Category");
const Certificate = require("./models/Certificate");
const Chapitre = require("./models/Chapitre");
const Formation = require("./models/Formation");
const Student = require("./models/Student");
const Partner = require("./models/Partner");

//init express
const app = express();

//App level middelware
app.use(express.json());

app.use(cors("*")); // cors middleware

//connect DB
connectDB();

// Admin bro setup

AdminBro.registerAdapter(AdminBroMongoose); // for database

// we add resource = Table with custom ui configuration
const AdminBroOptions = {
  resources: [
    // { resource: User, options: { listProperties: ["name"] } },
    {
      resource: User,
      options: {
        parent: {
          name: "Gestion des utilisateurs",
          icon: "fas fa-users",
        },
      },
    },
    {
      resource: Category,
      options: {
        parent: {
          name: "Gestion des catégories",
          /*  icon: "fas fa-users", */
        },
      },
    },
    {
      resource: Course,
      options: {
        parent: {
          name: "Gestion des cours",
          /* icon: "fa-solid fa-book", */
        },
      },
    },
    {
      resource: Chapitre,
      options: {
        parent: {
          name: "Gestion des cours",
          /* icon: "fas fa-users", */
        },
      },
    },
    {
      resource: Certificate,
      options: {
        parent: {
          name: "Gestion des cours",
          icon: "fas fa-users",
        },
      },
    },
    {
      resource: Partner,
      options: {
        parent: {
          name: "Gestion des partenaire",
          icon: "fas-solid fas-users",
        },
      },
    },
  ],
  locale: {
    // change text
    translations: {
      label: {
        loginWelcome: "welcome to E-learning dashboard",
      },
      messages: {
        loginWelcome: "welcome to E-learning dashboard",
      },
    },
  },

  branding: {
    companyName: "E-learning-Admin",
    logo: "",
    softwareBrothers: false,
  },
};

// admin login  default creadential (auth)
const ADMIN = {
  email: process.env.adminPanelLogin || "admin@admin.com",
  password: process.env.adminPanelPassword || "admin",
};

const adminBro = new AdminBro(AdminBroOptions);
const adminBroRoute = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return true;
    } else return false;
  },
  cookieName: "token",
  cookiePassword: "admin",
});

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
// app.use("/api/formations", formation);
app.use("/api/partners", partner);

// app middleware adminBro
app.use(adminBro.options.rootPath, adminBroRoute);

//Create Port
const port = 5000;

//Launch server

app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(`The server is running on port ${port}`)
);
