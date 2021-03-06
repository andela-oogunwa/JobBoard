var express = require('express');

var router = express.Router();

var User = require('../controllers/user.controller');

//create/register new user
router.post('/users', User.createUser);

// get list of users registered in the database
router.get('/users', User.findAllUsers);

//get a single user
router.get('/users/:user_id', User.getSingleUser);

//Edits and updates user's info
router.put('/users/:user_id', User.updateUser);

//Deletes user's info
router.delete('/users/:user_id', User.deleteUser);

// frontend routes =========================================================
// route to handle all angular requests
// router.get('*', function(req, res) {
//     res.sendFile('../../public/views/home.html'); // load our public/index.html file
// });

module.exports = router;
