const { models } = require("coelhojs-core");
const { Products, Types } = models;

module.exports = {
  setAssociations: (_) => {
    /*
     *
     * Here you can write the associations between your models.
     * Let's suppose you have 2 models Product and Type. You want to make a ManyToOne relation between those :
     *
     * Products.belongsTo(Types, { foreignKey: "typeId", as: "type" });
     * Types.hasMany(Products, { foreignKey: "typeId", as: "products" });
     *
     * see https://sequelize.org/docs/v6/core-concepts/assocs/ for more details about associations
     *
     */
  },
};
