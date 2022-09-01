// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require("./database");
const Student = require("./student");
const Campus = require("./campus");

const syncAndSeed = async () => {
  await db.sync({ force: true });

  //use this area to sync your database
  const campuses = await Promise.all([
    Campus.create({
      name: "Fullstack Academy",
      description: "Software Engineering Bootcamp based in NYC",
      address: "Somewhere in Manhattan",
      imageURL: "public/download.png",
    }),
    Campus.create({
      name: "Bayside High School",
      description: "Highschool zone 206 located in Bayside, NY",
      address: "32-24 Corporal Kennedy Street",
      imageURL: "public/bayside.jpeg",
    }),
  ]);

  const students = await Promise.all([
    Student.create({
      firstName: "Jack",
      lastName: "Ma",
      email: "jackma1541@gmail.com",
      gpa: 3.4,
      imageURL: null,
    }),
    Student.create({
      firstName: "Daniel",
      lastName: "Owens",
      email: "alwaysDowens97@gmail.com",
      gpa: 4.0,
      imageURL: null,
    }),
    Student.create({
      firstName: "Kate",
      lastName: "Krimmer",
      email: "kkrimmer12202@gmail.com",
      gpa: 3.1,
      imageURL: null,
    }),
    Student.create({
      firstName: "Seong",
      lastName: "Han",
      email: "sseonghan@gmail.com",
      gpa: 2.6,
      imageURL: null,
    }),
    Student.create({
      firstName: "Jessie",
      lastName: "Carter",
      email: "jessieishere@yahoo.com",
      gpa: 3.8,
      imageURL: null,
    }),
    Student.create({
      firstName: "Ted",
      lastName: "Mosby",
      email: "teddywestside@gmail.com",
      gpa: 3.7,
      imageURL: null,
    }),
  ]);

  const [daniel, jack, kate, seong, jessie, ted] = students;

  const [fullstack, bayside] = campuses;

  await daniel.setCampus(fullstack);
  await jack.setCampus(fullstack);
  await kate.setCampus(fullstack);

  await seong.setCampus(bayside);
  await jessie.setCampus(bayside);
  await ted.setCampus(bayside);

  console.log(`
    Seeding successful!
  `);
};

module.exports = {
  Student,
  Campus,
  db,
  syncAndSeed,
};
