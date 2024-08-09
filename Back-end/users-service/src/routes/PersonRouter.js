const express = require('express');
const personRouter = express.Router();

const PersonController = require('../controllers/PersonController');

const personController = new PersonController();

personRouter.get('/getPersons', personController.getPersons);
personRouter.post('/addPerson', personController.addPerson);
personRouter.patch('/editPerson/:id', personController.editPerson);
personRouter.delete('/disablePerson:id', personController.disablePerson);

module.exports = personRouter;
