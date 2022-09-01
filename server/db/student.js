const db = require("./database");
const Sequelize = require("sequelize");
const Campus = require("./campus");

const Student = db.define("Student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.TEXT,
    isEmail: true,
  },
  gpa: {
    type: Sequelize.DECIMAL(2, 1),
    min: 0,
    max: 4,
  },
  imageURL: {
    type: Sequelize.BLOB,
    defaultValue: "public/favicon.ico",
  },
});

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = Student;
