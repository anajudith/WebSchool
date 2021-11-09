const Sequelize = require('sequelize')
const sequelize = new Sequelize('webschool', 'root', 'trabalho', {
    //qual maquina/servidor esta o banco
    host: "localhost",
    dialect: 'mysql'
}) //conectando ao banco de dados 

sequelize.authenticate().then( function () {
    console.log("Conectado com sucesso!!!!!!!")
}).catch(function(erro) {
    console.log("Falha ao se conectar: "+erro)
})