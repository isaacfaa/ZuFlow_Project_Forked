const { Comment } = require('../models/Comment');
const fs = require('fs').promises;

async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) { 
        console.error(err); throw err; 
    }
}


async function writeJSON(object, filename) {
    try {
        const allObjects = await readJSON(filename);
        allObjects.push(object);
        await fs.writeFile(filename, JSON.stringify(allObjects), 'utf8');
        return allObjects;
    } catch (err) { 
        console.error(err); throw err; 
    }
}

//Add comment function
async function add_comment(req, res) {
    try {
      const { comment, owner, taskid } = req.body;
      if (!comment || !owner) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      const new_comment = new Comment(comment, owner, taskid);
      const updated_comment = await writeJSON(new_comment, 'utils/comments.json');
      return res.status(201).json({ message: 'Comment added!', data: updated_comment });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

async function get_comment(req, res) {
    try {
      const taskid = String(req.params.id);
      const all_comments = await readJSON('utils/comments.json');
      console.log(taskid + " Type: " + typeof taskid)
  
      const comments = await all_comments.find(resource => resource.taskid === taskid);
      console.log("Comments: " + comments.comment);
      
      if (comments) {
        return res.status(200).json(comments);
      } else {
        return res.status(401).json({message: 'Error'});
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    readJSON, writeJSON, add_comment, get_comment
};

