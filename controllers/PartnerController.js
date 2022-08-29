const Partner = require("../models/Partner");

// this api in only used in the page
const getPartner = async (req, res) => {
  try {
    const partner = await Partner.find();
    const count = await Partner.count();

    res.json({ data: partner, count });
  } catch (error) {
    console.log(error);
    res.send("server error");
  }
};

module.exports = {
  getPartner,
};
