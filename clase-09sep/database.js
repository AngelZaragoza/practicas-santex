const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('santex01', 'angelz', 'winnt5', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;