const router = require("express").Router();
const Student = require("../db/student");
const Campus = require("../db/campus");

router.get("/student", async (req, res) => {
  try {
    let data = await Student.findAll({ include: Campus });
    res.send(data);
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/student/:id", async (req, res) => {
  try {
    let student = await Student.findByPk(req.params.id, { include: Campus });
    student && res.send(student);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
