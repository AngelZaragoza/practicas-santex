const sequelize = require("../database");
const { DataTypes } = require("sequelize");

//Definir modelo de Usuario
const UserModel = sequelize.define(
  "User",
  {
    name: DataTypes.STRING,
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "Usuarios",
    timestamps: false,
  }
);

module.exports = UserModel;
