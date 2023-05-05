const { Chili, Category } = require("../models");

class ChiliController {
  static async create(req, res) {
    try {
      const {
        name,
        categoryId,
        description,
        image,
        shu,
        scientificName,
      } = req.body;
      const createData = {
        name,
        categoryId,
        description,
        shu,
        scientificName,
      };
      if (req.file) {
        createData.image = `${req.protocol}://${req.get("host")}/uploads/${
          req.file.filename
        }`;
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
  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const result = await Chili.destroy({ where: { id: id } });
      res.status(200).json({ message: `data with id ${id} has been deleted` });
    } catch (error) {
      res.json(error);
    }
  }
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const {
        name,
        categoryId,
        description,
        image,
        shu,
        scientificName,
      } = req.body;
      const updateData = { name, categoryId, description, shu, scientificName };
      if (req.file) {
        updateData.image = `${req.protocol}://${req.get("host")}/uploads/${
          req.file.filename
        }`;
      } else if (image) {
        updateData.image = image;
      }
      const result = await Chili.update(updateData, { where: { id: id } });
      if (result == 1) {
        res.status(200).json({ message: "Chili has been updated" });
      } else {
        res.status(500).json({ message: "Chili failed to update" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = ChiliController;
