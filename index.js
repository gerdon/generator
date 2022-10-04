const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const generatorCPF = require("./src/generator-cpf");
const generatorCNPJ = require("./src/generator-cnpj");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Generator App");
});

app.get("/generator/cpf", (req, res) => {
  res.send(`CPF: ${generatorCPF()}`);
});

app.get("/generator/cnpj", (req, res) => {
  res.send(`CNPJ: ${generatorCNPJ()}`);
});

app.listen(port, () => { 
  console.log(`Generator App listening on port ${port}!`)
});
