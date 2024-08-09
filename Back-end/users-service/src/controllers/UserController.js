const UserService = require('../services/UserService')

class UserController {

    constructor() { }

    async getUsers(req, res) {
        let Users = await UserService.findUsers();
        res.json(Users)
    }

    async addUser(req, res) {
       await UserService.createUser(req.body).then((result) => {
            res.json({ "status": "success", "message": "User created successfully", "data" : result });
        }).catch((err) => {
            console.log(err);
            res.json({ "status": "failed", "message": "Error creating the User" });
        });
    }

    async editUser(req, res) {
        var id = req.params.id;

        await UserService.editUser(id, req.body).then((result) => {
            res.json({ "status": "success", "message": "User updated successfully", "data" : result });
        }).catch((error) => {
            res.json({ "status": "failed", "message": "User updating falied"});
        });
    }

    async disableUser(req, res){
        var id = req.params.id;
        await UserService.disableUser(id).then(() => {
            res.json({ "status": "success", "message": "User disabled successfully" });
        }).catch((error) => {
            res.json({ "status": "failed", "message": "Error disabling user" });
        });
    }

}

module.exports = UserController;