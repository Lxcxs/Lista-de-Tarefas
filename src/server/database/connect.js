const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose
    .connect(`mongodb+srv://lvcxs:${process.env.MONGODB_PASSWORD}@nodelearn.mvxptr0.mongodb.net/`)
    .then(console.log("Conexão efetuada com sucesso!"))
    .catch(error => {
        console.log("Ocorreu um erro ao realizar a conexão! ", error)
    })
}

module.exports = connectToDatabase