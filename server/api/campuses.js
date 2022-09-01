const router = require("express").Router();
const Campus = require("../db/campus");
const Student = require("../db/student");

router.get("/campus", async (req, res) => {
  try {
    let data = await Campus.findAll({
      include: Student,
    });
    res.send(data);
  } catch (error) {
    throw new Error(error);
  }
});

router.get("/campus/:id", async (req, res) => {
  try {
    let campus = await Campus.findByPk(req.params.id, {
      include: Student,
    });
    campus && res.send(campus);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
