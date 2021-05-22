const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "https://m.media-amazon.com/images/M/MV5BMTg1Njg4MzQxNV5BMl5BanBnXkFtZTcwNDgzNDUwMw@@._V1_.jpg"
  },
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
      max: 4
    }
  }
});

module.exports = Student;
