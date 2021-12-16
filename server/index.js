const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
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
          [nomeCompleto, email, hash, telefone, dataNascimento, cpf, "P"],
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

app.get("/curso", (req, res) => {
  db.query("SELECT * FROM curso", (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
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

app.post("/cadastrarCurso", (req, res) => {
  const nomeCurso = req.body.nomeCurso;
  const descricaoCurso = req.body.descricaoCurso;
  const tempoDuracao = req.body.tempoDuracao;
  const urlCurso = req.body.urlCurso;

  const id = crypto.randomInt(1, 1000);

  db.query(
    "INSERT INTO curso (idCursos, nomeCurso, descricaoCurso, tempoDuracao, url) VALUES (?, ?, ?, ?, ?)",
    [id, nomeCurso, descricaoCurso, tempoDuracao, urlCurso],
    (err, response) => {
      if (err) {
        res.send(err);
      }
      if (response) {
        res.send({ msg: "Curso inserido com sucesso", idCurso: id });
      } else {
        res.send({ msg: "Não foi possivel inserir o curso" });
      }
    }
  );
});

app.post("/cadastrarModulo", (req, res) => {
  const tituloModulo = req.body.tituloModulo;
  const tempoDuracao = req.body.tempoDuracao;
  const idCurso = req.body.idCurso;

  const id = crypto.randomInt(1, 1000);

  db.query(
    "INSERT INTO modulo (idModulo, tituloModulo, tempoDuracao, url, idCurso) VALUES (?, ?, ?, ?, ?)",
    [id, tituloModulo, tempoDuracao, "", idCurso],
    (err, response) => {
      if (err) {
        res.send(err);
      }
      if (response) {
        res.send({ msg: "Modulo inserido para esse curso", idModulo: id });
      } else {
        res.send({ msg: "Não foi possivel inserir o modulo" });
      }
    }
  );
});

app.post("/cadastrarAula", (req, res) => {
  const nomeAula = req.body.nomeAula;
  const descricaoAula = req.body.descricaoAula;
  const tempoDuracao = req.body.tempoDuracao;
  const urlAula = req.body.urlAula;
  const idModulo = req.body.idModulo;

  const id = crypto.randomInt(1, 1000);

  db.query(
    "INSERT INTO aula (idAula, nomeAula, descricaoAula, tempoDuracao, url, idModulo) VALUES (?, ?, ?, ?, ?,? )",
    [id, nomeAula, descricaoAula, tempoDuracao, urlAula, idModulo],
    (err, response) => {
      if (err) {
        res.send(err);
      }
      if (response) {
        res.send({ msg: "Aula inserida" });
      } else {
        res.send({ msg: "Não foi possivel inserir a aula" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
