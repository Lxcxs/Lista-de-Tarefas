const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    }
});

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel