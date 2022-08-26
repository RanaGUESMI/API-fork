const Course = require("../models/Course");
const Category = require("../models/Category");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const createCourse = async (req, res) => {
  try {
    const newCourse = new Course({
      userId: req.userId,
      ...req.body,
    });
    const categoryId = req.body.categoryId;
    const coursesIdsArr = [];
    const course = await newCourse.save();

    // after creating new course we get new course id
    // we find the category with categoryId get it from the body of the request
    // we push the categoryId into an array
    // we update the category collection with the array of catgoryId
    coursesIdsArr.push(course.id);
    await Category.findByIdAndUpdate(categoryId, {
      courseId: coursesIdsArr,
    });

    res.json({ msg: "course created", course });
  } catch (error) {
    res.status(500).send("server error");
  }
};

/*const createCourse = async (req, res) => {
  console.log("hey");
  
  try {
    const newCourse = new Course({
      userId: req.user.id,
      ...req.body,
    });
    const course = await newCourse.save();

    const courseId = course._id;
    const categoryId = req.body;

    const updatedCategory = await Category.findOneAndUpdate(
      categoryId((x) => {
        console.log(x);
      })
    );
    console.log(updatedCategory);

    res.json({ msg: "course created", course });
  } catch (error) {
    res.status(400).send("server error");
  } 
};*/

// non hedhika emte3 el create bech enzidou el cour fil tableau de coursesId[] fil model category
// sinon nest7a9aou api ya3tina les cours ki na3tiwha category mou3ayana
// cad api call bech etckoun bil facon /get ahhh baby hedhika partie li mouch fehma kifeh bch tsir yup i know
// ana 3andi list des categories fil front affichier sous form des card
// lorsque je click 3ala card bech ethezni page o5ra avec un url jdid /categories/ 567890 , 567890 howa el id emte3 category
// donc na7ana lezem na3melou api ki na3tiwha el id emte3 category ya3tina les cours el kol fil category hedika
// fhemeteh el faza ? oui fehma l principe ama l methode kifeh wel fct non ok hana bech ne5dmouha m3a b3thna w emba3ed bech enmchi en9abel bnet ok ? no9tlek 3aychek babay na3refk open barcha
// baby t7eb ma3ach naamlou kif sbeh vas y bara 9abel bnet ah to9sod 9ahawa kima sbe7 behi amyamm  chkoun aymen ????hhhh bara 3ad t7eb tsalek rou7k
// aya yeziw ble tfadlik

const getCoursesByCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    console.log(categoryId); // hedha bech ne5dhouh mel front wala mel postman w en3adiwh fil url emte3 api fil front
    // donc tawa 3ana el category eli en7ebou enjibou les cours emte3ha
    // bech enchoufou fil mongo kifech enjibou les cours eli 3andha categoryId hedha fhmtha el faza ?
    // kan mafhmtech 9oli aman qtt behi
    // bech na3mlou call lil api coures avec un params id eli 3amlna defintion emte3ou fil route /:id
    // fil controller emte3na bech en7otouh fi variable esmaha categoryId
    // w emab3ed bech naemelou find avec la condition , lawej 3ala les cours eli 3andhom el catgory hehi
    // 5ir haka ??? ouiiiiii good

    // bech na3mlou test tawa behi ? oui
    // find({ categoryId: categoryId }) => c;est la condiation fi mongoose find where
    const courses = await Course.find({ categoryId }).populate("categoryId");
    // najemou en7otou el code 5 ir el key tal9aha nafsha el value fi obj donf enajemou na3mlou haka {categoryId} barka === {categoryId, categoryId}
    // jawna behi par contre lezem enbadlu el variable mich statiq
    // ma3maltech save 9a3ed yamel fil loading 3ala 5ater famamech res.send donc 9a3ed yestna fi reponse w mafamech
    // fhmte ?
    // good !

    // GOOD ?:p ouiii na`7bek ena n7ebeeeeeek
    // tawa front fisa3 fisa3 presque kamlna ok ?ok
    res.json({
      data: courses,
      count: courses.length, // cousrses.count mich data.count
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getCourse = async (req, res) => {
  try {
    const courses = await Course.find();

    res.json({ courses });
  } catch (error) {}
};

const editCourse = async (req, res) => {
  try {
    const editedCourse = await Course.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json({ msg: "Course edited", editedCourse });
  } catch (error) {
    res.send("server error");
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseDeleted = await Course.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "Course deleted", courseDeleted });
  } catch (error) {
    res.send("server error");
  }
};

module.exports = {
  createCourse,
  getCourse,
  getCoursesByCategory,
  editCourse,
  deleteCourse,
};
