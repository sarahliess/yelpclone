const Restaurants = require("../models/Restaurant");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
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

module.exports = {
  getRestaurants,
};
