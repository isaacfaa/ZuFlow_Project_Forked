const { read } = require('fs');
const { Category } = require('../models/Category');
const fs = require('fs').promises;

async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) { console.error(err); throw err; }
}

async function writeJSON(object, filename) {
    try {
        const categoryObjects = await readJSON(filename);
        categoryObjects.push(object);

        await fs.writeFile(filename, JSON.stringify(categoryObjects), 'utf8');
        return categoryObjects;
    } catch (err) { console.error(err); throw err; }
}

async function findNextID(categories) {
    const ids = categories.map(category => category.categoryID);
    let id = 1;
    while (ids.includes(id)) {
        id++;
    }
    return id;
}


async function addCategory(req, res) {
    try {
        const { name, categorydescription } = req.body;
        if (!name || !categorydescription) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newID = await findNextID(await readJSON('utils/categories.json'));
        const newCategory = new Category(newID, name, categorydescription);

        const updatedCategories = await writeJSON(newCategory, 'utils/categories.json');
        return res.status(201).json({ message: 'Category created successfully', data: updatedCategories });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function viewCategories(req, res) {
    try {
        const allCategories = await readJSON('utils/categories.json');
        return res.status(200).json(allCategories);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { readJSON, writeJSON, addCategory, viewCategories };