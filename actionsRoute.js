const express = require('express');

const Actions = require('./data/helpers/actionModel.js');
const router = express.Router();

router.use(express.json());

router.get('/', async (req,res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Unable to retrieve actions. '});
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const actionsById = await Actions.get(id);
        res.status(200).json(actionsById);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving that action.' });
    }
});

router.post('/', validateProject, async (req, res) => {
    try {
        const action = req.body;
        if(!action.project_id || !action.description || !action.notes) {
            return res.status(400).json({ message: 'Please include the project ID, description, and notes.' });
        }
        const newAction = await Actions.insert(action);
        res.status(201).json(newAction);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding new action.' });
    }
});

router.put('/:id', async (req, res) => {    
    try {
        res.status(200).json(await Actions.update(req.params.id, req.body));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating action.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await Actions.remove(req.params.id, req.body));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error removing project.' });
    }
})


// Custom middleware

function validateProject(req, res, next) {
    const project_id = req.params.id;

    if (!project_id) {
        res.status(400).json ({ message: 'The project with that ID could not be found.' });
    } else {
        next();
    }
};

module.exports = router;