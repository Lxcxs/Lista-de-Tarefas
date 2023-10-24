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

const TaskModel = mongoose.model('User', userSchema)

module.exports = TaskModel