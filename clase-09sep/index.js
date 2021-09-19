const express = require("express");
const sequelize = require("./database");

const mainRoute = require("./routes/main.route");
const userRoute = require("./routes/user.route");

const app = express();
const port = 3500;

app.use(express.json());
app.use("/main", mainRoute);
app.use("/users", userRoute);

app.listen(port, async () => {
  console.log(`Server listening on port ${port}`);
  try {
    await sequelize.authenticate();
    //Sincroniza todos los modelos
    await sequelize.sync();
    // await sequelize.sync({ alter: true });
    console.log("Conectado a la BD");
  } catch (error) {
    console.log("Error conectando a la BD", error);
  }
});
