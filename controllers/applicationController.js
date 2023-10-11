// Import the necessary modules and database models
import { application } from 'express';
import db from '../models/index.js';

const { Application } = db;

const createApplication = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const application = await Application.create({
      name,
      email,
      phone,
     
        
    });
    res.status(201).json(application);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating application' });
  }
};

const getApplicationById = async (req, res) => {
  try {
    const application = await Application .findByPk(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json(application);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting job' });
  }
};

const getAllApplications = async (req, res) => {
  try {
    const application = await Application .findAll();
    res.status(200).json(application);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting jobs' });
  }
};

const updateApplication = async (req, res) => {
  try {
    const application = await Job.findByPk(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Job not found' });
    }
    const { name, email, phone } = req.body;
    await application.update({
      name,
      email,
      phone
    });
    res.status(200).json(application);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating application' });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByPk(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    await application.destroy();
    res.status(204).json();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting application' });
  }
};

export {createApplication, getApplicationById, getAllApplications, updateApplication, deleteApplication}    
