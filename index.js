const dotenv = require('dotenv')
const connectToDatabase = require('./src/server/database/connect')

dotenv.config()
connectToDatabase()

require('./src/server/modules/express')