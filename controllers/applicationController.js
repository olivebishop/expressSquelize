// Import the necessary modules and database models
import db from '../models/index.js';

const { Application } = db;

const createApplication = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const application = await Application.create({
      name,
      email,
      phone
    });
    res.status(201).json(application);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating application' });
  }
};

const getApplicationById = async (req, res) => {
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

const getAllApplications = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting jobs' });
  }
};

const updateApplication = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    const { title, description, type, salary_range, location_id, employer_id } = req.body;
    await job.update({
      title,
      description,
      type,
      salary_range,
      location_id,
      employer_id
    });
    res.status(200).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating job' });
  }
};

const deleteApplication = async (req, res) => {
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

export {createApplication, getApplicationById, getAllApplications, updateApplication, deleteApplication}    
