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
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageURL: {
    type: Sequelize.BLOB,
    defaultValue: "public/favicon.ico",
  },
});

module.exports = Campus;
