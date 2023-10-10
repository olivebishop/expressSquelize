// Import the necessary modules and database models
import db from '../models/index.js';

const { Job } = db;

// const jobController = {};

const createJob = async (req, res) => {
  try {
    const { title, description, job_requirements, type, salary_range } = req.body;
    const job = await Job.create({
      title,
      description,
      job_requirements,
      type,
      salary_range,
      
    });
    res.status(201).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating job' });
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting job' });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting jobs' });
  }
};

const updateJob = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    const { title, description, job_requirements, type, salary_range } = req.body;
    await job.update({
      title,
      description,
      job_requirements,
      type,
      salary_range,
      
    });
    res.status(200).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating job' });
  }
};

const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    await job.destroy();
    res.status(204).json();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting job' });
  }
};

export {createJob, getJobById, getAllJobs, updateJob, deleteJob}
