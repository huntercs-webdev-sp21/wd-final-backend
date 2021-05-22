const { Campus, Student } = require('../models');

const seedDB = async () => {
  const dummy_campus = await Campus.create({
    name: "Hunter College",
    address: "695 Park Ave",
    description: "This is a school in NYC."
  });
  const dummy_campus2 = await Campus.create({
    name: "Harvard",
    address: "Somewhere in Cambridge",
    description: "This is a school in MA."
  });

  const dummy_student = await Student.create({
    firstName: "Joe",
    lastName: "Shmo",
    email: "j.s@gmail.com",
    campusId: 1,
    gpa: 3.0
  });

  await dummy_student.setCampus(dummy_campus);

}

module.exports = seedDB;
