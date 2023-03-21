const { Category } = require("../models");

class CategoryController {
  static async get(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async create(req, res) {
    try {
      const { name } = req.body;
      const result = await Category.create({ name: name });
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name } = req.body;
      const findOne = await Category.update(
        { where: { id: id } },
        { name: name }
      );
      if (findOne == 1) {
        res.status(200).json({ message: "Category has been updated" });
      } else {
        res.status(500).json({ message: "Category failed to update" });
      }
    } catch (error) {
      res.status(500).json({ message: "Category failed to update" });
    }
  }
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const remove = await Category.destroy({ where: { id } });
      res.status(200);
    } catch (error) {
      res.json(error);
    }
  }
}
module.exports = CategoryController;
