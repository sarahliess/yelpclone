const City = require("../models/City");

const getCities = async (req, res) => {
  try {
    const cities = await City.find();
    console.log(cities);
    res.json({
      success: true,
      data: cities,
      msg: "show all cities",
    });
  } catch (err) {
    console.log(err);
  }
};

const getCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findById(id);

    res.json({
      msg: `show city with id ${id}`,
      success: true,
      data: city,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCities,
  getCity,
};
