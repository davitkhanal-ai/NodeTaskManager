const express = require('express')

const router  = express.Router();

const Task = require('../model/task')

//get all task

router.get('/',async(req,res) =>{
    try{
        const tasks = await Task.find()
        res.json(tasks)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})


//create a task
router.post('/', async(req,res) =>{
    const task = new Task({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const newTask = await task.save()
        res.status(201).json(newTask)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

async function getTask(req,res,next){
    let task;
    
}

// get a sepcific task "ID"
router.get('/:id', )