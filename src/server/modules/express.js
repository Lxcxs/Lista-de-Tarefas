const express = require('express')
const cors = require('cors')
const TaskModel = require('../models/task.model')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await TaskModel.find({})

        res.status(200).json(tasks)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

app.post('/tasks', async (req, res) => {
    try {
        const tasks = await TaskModel.create(req.body)

        res.status(200).json(tasks)
    }catch (error) {

        return res.status(500).send(error.message)
    }
})

app.delete('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id
        const tasks = await TaskModel.findByIdAndRemove(id)

        res.status(200).json(tasks)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

app.patch('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id
        const tasks = await TaskModel.findByIdAndUpdate(id, req.body, {new: true})

        res.status(200).json(tasks)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

const port = 7070

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`))
