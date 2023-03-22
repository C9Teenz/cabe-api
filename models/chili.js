"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chili extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chili.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "categories",
      });
    }
  }
  Chili.init(
    {
      name: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Chili",
    }
  );
  return Chili;
};
