const express = require('express');
const userController = require('../controller/userController');


const router = express.Router();

// user


// create
router.post('/createuser',  userController.create);

// get all
router.get('/user/all',  userController.getAll);

// delete
router.delete('/user/:id',  userController.delete);

module.exports = router;