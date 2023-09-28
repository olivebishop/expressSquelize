import db from "../models/index.js";

const Employee = db.Employee;

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a single employee by id
const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findByPk(id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new employee
const createEmployee = async (req, res) => {
  const { fullname, national_id, phone,   country_id, agency_id, job_id, salary, start_date, end_date } = req.body;
  try {
    const newEmployee = await Employee.create({ fullname, national_id, phone, state, country_id, agency_id, job_id, salary, start_date, end_date });
    res.status(201).json(newEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an existing employee by id
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { fullname, national_id, phone,  country_id, agency_id, job_id, salary, start_date, end_date } = req.body;
  try {
    const employee = await Employee.findByPk(id);
    if (employee) {
      await employee.update({ fullname, national_id, phone,  country_id, agency_id, job_id, salary, start_date, end_date });
      res.status(200).json({ message: 'Employee updated successfully' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an existing employee by id
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findByPk(id);
    if (employee) {
      await employee.destroy();
      res.status(200).json({ message: 'Employee deleted successfully' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };
