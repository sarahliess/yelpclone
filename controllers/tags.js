const Tag = require("../models/Tag");

const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    console.log(tags);
    res.json({
      success: true,
      data: tags,
      msg: "show all tags",
    });
  } catch (err) {
    console.log(err);
  }
};

const getTag = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findById(id);

    res.json({
      msg: `show tag with id ${id}`,
      success: true,
      data: tag,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getTags,
  getTag,
};
