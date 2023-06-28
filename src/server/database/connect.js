const mongoose = require('mongoose')

const connectToDatabase = async () => {
    //inserir url do mongodb
    await mongoose
    .connect()
    .then(console.log("Conexão efetuada com sucesso!"))
    .catch(error => {
        console.log("Ocorreu um erro ao realizar a conexão! ", error)
    })
}

module.exports = connectToDatabase