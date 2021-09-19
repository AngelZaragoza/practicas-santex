const express = require("express");
const UserModel = require("../models/user.model");
const router = express.Router();

router.get("/", async (req, res) => {
  //Recuperar el listado de Users
  try {
    const listaUsers = await UserModel.findAll({
      attributes: ["name", "age"],
    });
    res.status(200).json(listaUsers);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.post("/", async (req, res) => {
  //Crear un nuevo User
  try {
    const { name, age } = req.body;
    const userCreated = await UserModel.create({ name, age });
    res.status(201).json(userCreated);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

// Model.create
// Model.find*
// Model.update
// Model.destroy

module.exports = router;
