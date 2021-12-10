const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "webschool",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const nomeCompleto = req.body.nomeCompleto;
  const email = req.body.email;
  const password = req.body.password;
  const telefone = req.body.telefone;
  const cpf = req.body.cpf;
  const dataNascimento = req.body.dataNascimento;
  const tipoUsuario = req.body.tipoUsuario;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }

    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (erro, hash) => {
        db.query(
          "INSERT INTO usuarios (nome, email, senha, Telefone, Data_de_nascimento, CPF, TipoUsuario) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [
            nomeCompleto,
            email,
            hash,
            telefone,
            dataNascimento,
            cpf,
            tipoUsuario,
          ],
          (err, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Usuário já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const senha = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(senha, result[0].senha, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({ msg: "Usuário logado" });
        } else {
          res.send({ msg: "Senha incorreta" });
        }
      });
    } else {
      res.send({ msg: "Conta não encontrada" });
    }
  });
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
