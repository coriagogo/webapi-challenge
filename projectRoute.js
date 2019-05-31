const express = require('express');

const Projects = require('./data/helpers/projectModel.js');
const router = express.Router();

router.use(express.json());


//CRUD operations

router.get('/', async (req, res) => {
    try{
        const projects = await Projects.get(req.query);
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving projects.' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newProject = await Projects.insert(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error adding project.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        res.status(200).json(await Projects.update(req.params.id, req.body));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error upadting project.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(await Projects.remove(req.params.id, req.body));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error removing project.' });
    }
});

//Custom middleware

module.exports = router;