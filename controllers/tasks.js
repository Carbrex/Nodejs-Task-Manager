const { findOneAndDelete } = require('../models/Task');
const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    // res.send('get all tasks');
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const createTask = async (req, res) => {
    // const task = await Task.create({name:'first task',completed:true});
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
    // res.send('create task');
    // console.log(req);
    // console.log(req.body);
}

const getTask = async (req, res) => {
    // res.send('get single task');
    // res.json({ id: req.params.id });
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}


const deleteTask = async (req, res) => {
    // res.send('delete task');
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        }
        res.status(200).json({ task });
        // res.status(200).send();
        // res.status(200).json({ task:null,status:success});
    } catch (error) {
        res.status(500).json({ msg: error });
    }

}

const updateTask = async(req, res) => {
    // res.send('update task');
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body);
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        }
        res.status(200).json({id:taskID,data:req.body});
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
};