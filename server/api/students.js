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

router.post("/student", async (req, res) => {
  try {
    console.log(req.body.data);
    const student = Student.create({
      firstName: req.body.data.firstName,
      lastName: req.body.data.lastName,
      email: req.body.data.email,
      gpa: req.body.data.gpa,
      imageURL: req.body.data.img,
    });
    res.send(student);
  } catch (error) {
    throw new Error(error);
  }
});

router.delete("/student/:id", async (req, res) => {
  try {
    if (isNaN(req.params.id)) res.sendStatus(400);
    let data = Student.destroy({ where: { id: req.params.id } });
    data ? res.sendStatus(204) : res.sendStatus(404);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
