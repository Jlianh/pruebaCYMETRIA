const PersonService = require('../services/PersonServices')

class PersonController {

    constructor() { }

    async getPersons(req, res) {
        let persons = await await PersonService.findAll();
        res.json(persons)
    }

    async addPerson(req, res) {
       await PersonService.createPerson(req.body).then((result) => {
            res.json({ "status": "success", "message": "Person created successfully", "data" : result });
        }).catch((err) => {
            console.log(err);
            res.json({ "status": "failed", "message": "Error creating the Person" });
        });
    }

    async editPerson(req, res) {
        var id = req.params.id;
        await PersonService.editPerson(id, req.body).then((result) => {
            res.json({ "status": "success", "message": "Person updated successfully", "data" : result });
        }).catch((error) => {
            res.json({ "status": "failed", "message": "Person updating falied"});
        });
    }

    async disablePerson(req, res){
        var id = req.params.id;
        await PersonService.disablePerson(id).then(() => {
            res.json({ "status": "success", "message": "User disabled successfully" });
        }).catch((error) => {
            res.json({ "status": "failed", "message": "Error disabling user" });
        });
    }

}

module.exports = PersonController;