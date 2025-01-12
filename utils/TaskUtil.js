const { Task } = require('../models/Task');
const fs = require('fs').promises;
const path = require('path');


const taskFilePath = path.join(__dirname, 'task.json');


async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            
            await fs.writeFile(filename, '[]', 'utf8');
            return [];
        }
        console.error(err);
        throw err;
    }
}


async function writeJSON(object, filename) {
    try {
        const allObjects = await readJSON(filename);
        allObjects.push(object);
        await fs.writeFile(filename, JSON.stringify(allObjects, null, 2), 'utf8');
        return allObjects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// Function to add a new task
async function addTask(req, res) {
    try {
        const { name, location, description, owner } = req.body;

        
        if (!owner.includes('@') || !owner.includes('.') || description.length < 6) {
            return res.status(500).json({ message: 'Validation error' });
        }

        // Create and save the new task
        const newTask = new Task(name, location, description, owner);
        const updatedTask = await writeJSON(newTask, taskFilePath);
        return res.status(201).json(updatedTask);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function editTask(req, res) {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const location = req.body.location;
        const description = req.body.description;
        const allTask = await readJSON('utils/task.json');
        var modified = false;

        for (var i = 0; i < allTask.length; i++) {
            var curcurrTask = allTask[i];
            if (curcurrTask.id == id) {
                allTask[i].name = name;
                allTask[i].location = location;
                allTask[i].description = description;
                modified = true;
            }
        }

        if (modified) {
            await fs.writeFile('utils/task.json', JSON.stringify(allTask), 'utf8');
            return res.status(201).json({ message: 'Task modified successfully!' });
        } else {
            return res.status(500).json({ message: 'Error occurred, unable to modify!' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function deleteTask(req, res) {
    try {
        const id = req.params.id;
        const allTask = await readJSON('utils/task.json');
        var index = -1;

        for (var i = 0; i < allTask.length; i++) {
            var curcurrTask = allTask[i];
            if (curcurrTask.id == id)
                index = i;
        }

        if (index != -1) {
            allTask.splice(index, 1);
            await fs.writeFile('utils/task.json', JSON.stringify(allTask), 'utf8');
            return res.status(201).json({ message: 'Task deleted successfully!' });
        } else {
            return res.status(500).json({ message: 'Error occurred, unable to delete!' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = {
    readJSON,
    writeJSON,
    addTask,
    editTask,
    deleteTask
};
