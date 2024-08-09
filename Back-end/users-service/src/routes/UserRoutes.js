const express = require('express');
const userRouter = express.Router();

const UserController = require('../controllers/UserController');

const userController = new UserController();

userRouter.get('/getusers', userController.getUsers);
userRouter.post('/adduser', userController.addUser);
userRouter.patch('/edituser/:id', userController.editUser);
userRouter.delete('/disableuser:id', userController.disableUser);

module.exports = userRouter;
