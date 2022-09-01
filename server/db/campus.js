const Sequelize = require("sequelize");
const db = require("./database");

const Campus = db.define("Campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageURL: {
    type: Sequelize.BLOB,
    defaultValue: "public/favicon.ico",
  },
});

module.exports = Campus;
