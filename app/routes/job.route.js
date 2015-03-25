var express = require('express');

var router = express.Router();

var Job = require('../controllers/job.controller');

//create/register new user
router.post('/jobs', Job.createJob);

// get list of users registered in the database
router.get('/jobs', Job.findAllJobs);

//get a single user
router.get('/jobs/:job_id', Job.getSingleJob);

//Edits and updates user's info
router.put('/jobs/:job_id', Job.updateJob);

//Deletes user's info
router.delete('/jobs/:job_id', Job.deleteJob);

// frontend routes =========================================================
// catch all route to handle all angular requests
router.get('*', function(req, res) {
    res.sendFile('../../public/views/home.html'); // load our public/index.html file
});

module.exports = router;