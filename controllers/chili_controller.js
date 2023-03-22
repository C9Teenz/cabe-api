const { Chili, Category } = require("../models");

class ChiliController {
  static async create(req, res) {
    try {
      const { name, categoryId, description, image } = req.body;
      const createData = {
        name,
        categoryId,
        description,
      };
      if (req.file) {
        createData.image = req.file.path;
      } else {
        createData.image = image;
      }

      const result = await Chili.create(createData);

      res
        .status(200)
        .json({ status: true, message: "data has been added", data: result });
    } catch (error) {
      res.status(500).json({ status: false, message: "data failed to add" });
    }
  }
  static async get(req, res) {
    try {
      const chilies = await Chili.findAll({
        include: [{ model: Category, as: "categories" }],
      });
      res.status(200).json({ status: true, data: chilies });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
module.exports = ChiliController;
