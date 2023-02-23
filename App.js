const express = require("express");
const usersRoutes = require('./routes/users.roures')

const app = express();

app.use(morgan('tiny'));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(8000, () => {
  console.log("Servidor corriendo en el puerto 8000");
});