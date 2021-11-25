//  const Sequelize = require('sequelize')
//  const sequelize = new Sequelize('webschool', 'root', '123', {
//     //qual maquina/servidor esta o banco
//      host: "localhost",
//      dialect: 'mysql'
//  }) //conectando ao banco de dados 

//  sequelize.authenticate().then( function () {
//      console.log("Conectado com sucesso!!!!!!!")
//  }).catch(function(erro) {
//      console.log("Falha ao se conectar: "+erro)
//  });


const express = require("express");
const app = express();
 const mysql = require('mysql');

 const db = mysql.createPool({
    host: "localhost",
    user : "root",
    password : "1234",
    database: "webschool",
 });

app.get("/", (req, res) => {
    db.query("INSERT INTO usuarios (nome, email, senha, Telefone, Data_de_ascimento, CPF, TipoUsuario) VALUES ('Fulano2', 'fulano@gmail.com', '123456', '99999999', '11/11/2011', '12345678911', 'P')", (err, result) => {
        if(err) {
             debugger
             console.log(err)
         }
     })
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});