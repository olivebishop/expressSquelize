import db from '../models';
const { Employer, Admin } = db; // Use object destructuring to access the models

const createEmployer = async (req, res) => {
  try {
    const employer = await Employer.create(req.body);
    res.status(201).json({ success: true, employer });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getEmployers = async (req, res) => {
  try {
    const employers = await Employer.findAll();
    res.status(200).json({ success: true, employers });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getEmployerById = async (req, res) => {
  try {
    const employer = await Employer.findByPk(req.params.id);
    if (!employer) {
      throw new Error('Employer not found');
    }
    res.status(200).json({ success: true, employer });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updateEmployerById = async (req, res) => {
  try {
    const employer = await Employer.findByPk(req.params.id);
    if (!employer) {
      throw new Error('Employer not found');
    }
    const updatedEmployer = await employer.update(req.body);
    res.status(200).json({ success: true, employer: updatedEmployer });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const deleteEmployerById = async (req, res) => {
  try {
    const employer = await Employer.findByPk(req.params.id);
    if (!employer) {
      throw new Error('Employer not found');
    }
    await employer.destroy();
    res.status(200).json({ success: true, message: 'Employer deleted successfully' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const assignAccountTypeToEmployer = async (req, res) => {
  try {
    const { employerId, roleId } = req.body;
    const adminId = req.user.adminId; // Assuming you have a way to retrieve the admin's ID from the request

    const admin = await Admin.findByPk(adminId);

    if (!admin) {
      throw new Error('Admin not found');
    }

    // Use the assignAccountType method from the Admin model
    await admin.assignAccountType(employerId, roleId);

    res.status(200).json({ success: true, message: 'Account type assigned successfully' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export {
  createEmployer,
  getEmployers,
  getEmployerById,
  updateEmployerById,
  deleteEmployerById,
  assignAccountTypeToEmployer
};
