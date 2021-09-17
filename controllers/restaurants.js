const Restaurant = require("../models/Restaurant");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find()
      .populate("city")
      .populate("tag");
    console.log(restaurants);
    res.json({
      success: true,
      data: restaurants,
      msg: "show all restaurants",
    });
  } catch (err) {
    console.log(err);
  }
};

const getRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id)
      .populate("city")
      .populate("tag");

    res.json({
      msg: `show restaurant with id ${id}`,
      success: true,
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRestaurants,
  getRestaurant,
};
