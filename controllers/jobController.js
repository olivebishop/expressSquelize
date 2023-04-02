import db from '../models/index.js';

const { Job } = db;

const jobController = {};

jobController.createJob = async (req, res) => {
  try {
    const { title, description, type, salary_range, location_id, employer_id } = req.body;
    const job = await Job.create({
      title,
      description,
      type,
      salary_range,
      location_id,
      employer_id
    });
    res.status(201).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating job' });
  }
};

jobController.getJobById = async (req, res) => {
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

jobController.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting jobs' });
  }
};

jobController.updateJob = async (req, res) => {
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

jobController.deleteJob = async (req, res) => {
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

export default jobController;
