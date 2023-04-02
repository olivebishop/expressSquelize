import db from '../models/index.js';

const Report = db.Report;
const User = db.User;

const ReportController = {};

// CREATE a new report
const createReport = async (req, res) => {
  try {
    const { title, description, status, priority, category, assigned_to, assigned_by, UserId } = req.body;
    const newReport = await Report.create({
      title,
      description,
      status,
      priority,
      category,
      assigned_to,
      assigned_by,
      closed_at: null,
      UserId
    });
    res.status(201).json({ report: newReport });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ all reports
const getAllReports = async (req, res) => {
  try {
    const reports = await Report.findAll({ include: User });
    res.status(200).json({ reports });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ a report by id
const getReportById = async (req, res) => {
  try {
    const report = await Report.findOne({ where: { id: req.params.id }, include: User });
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json({ report });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a report by id
const updateReportById = async (req, res) => {
  try {
    const report = await Report.findOne({ where: { id: req.params.id } });
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    const { title, description, status, priority, category, assigned_to, assigned_by } = req.body;
    await report.update({
      title: title || report.title,
      description: description || report.description,
      status: status || report.status,
      priority: priority || report.priority,
      category: category || report.category,
      assigned_to: assigned_to || report.assigned_to,
      assigned_by: assigned_by || report.assigned_by,
      closed_at: status === 'resolved' && !report.closed_at ? new Date() : report.closed_at
    });
    res.status(200).json({ report });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a report by id
const deleteReportById = async (req, res) => {
  try {
    const report = await Report.findOne({ where: { id: req.params.id } });
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    await report.destroy();
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { createReport, getAllReports, getReportById, updateReportById, deleteReportById };
