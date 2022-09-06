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
    campus && res.status(200).send(campus);
  } catch (error) {
    throw new Error(error);
  }
});

router.post("/campus", async (req, res) => {
  try {
    console.log(req.body);
    const campus = await Campus.create({
      name: req.body.name,
      address: req.body.address,
      description: req.body.description,
      imageURL: req.body.img,
    });
    res.send(campus);
  } catch (error) {
    throw new Error(error);
  }
});

router.put("/campus/:id", async (req, res, next) => {
  try {
    let campus = await Campus.findByPk(req.params.id);
    if (campus) {
      campus.update(req.body);
      res.send(campus);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    throw new Error(error);
  }
});

router.delete("/campus/:id", async (req, res) => {
  try {
    if (isNaN(req.params.id)) res.sendStatus(400);
    let data = await Campus.destroy({ where: { id: req.params.id } });
    data ? res.sendStatus(204) : res.sendStatus(404);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
