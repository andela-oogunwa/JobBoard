var Job = require('../models/job.model');

var newJob = {

  createJob: function(req, res, next) {

    var jobObj = {
      title: req.body.title,
      timeline: req.body.timeline,
      details: req.body.details
    };

    Job.create(jobObj, function(err, data) {
      if (err) {
        res.send(err);
      }

      else{
        res.json(data);
      } 
      next();
    });
  },

  findAllJobs: function(req, res, next) {

    Job.find(function(err, data) {
      if (err) {
        res.send(err);
      }

      else {
        res.json(data);
      }
      next();
    });
  },

  getSingleJob: function(req, res, next) {

    Job.findById(req.params.job_id, function(err, data) {
      if (err) {
        res.send(err);
      }

      else {
        res.json(data);
      } 
      next();
    });
  },

  updateJob: function(req, res, next) {

    Job.findById(req.params.job_id, function(err, job) {
      if (err) {
        res.send(err);
      }

      //check if user does not exist
      else if (job === null) {
        res.json({message: 'Job does not exist'})
      }

      //update all user info
      else{
        job.title = req.body.title;
        job.details = req.body.details;
        job.timeline = req.body.timeline;

        //save the user info
        job.save(function(err) {
          if (err) {
            res.send(err);
          }

          else{
            res.json(job);
          } 
          next();
        });
      }    
    });
  },

  deleteJob: function(req, res, next) {

    Job.findById(req.params.job_id, function(err, job) {
      if (err) {
        res.send(err);
      }

      //check if user does not exist
      else if (job === null) {
        res.json({message: 'Job does not exist'})
      }

      //else delete the user
      else {
        job.remove(function(err){
          if (err) {
            res.send(err);
          }

          res.json({ message: 'Successfully deleted' });
          next();
        });
      }
    });
  }
}

module.exports = newJob;

