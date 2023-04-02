import db from '../models/index.js';

const Contract = db.Contract;

const getAllContracts = async (req, res) => {
  try {
    const response = await Contract.findAll();
    if (response.length === 0) {
      res.status(404).json({ message: 'No contracts found' });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const getContractById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Contract.findByPk(id);
    if (!response) {
      res.status(404).json({ message: 'Contract not found' });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const createContract = async (req, res) => {
  const contract = req.body;
  try {
    const response = await Contract.create(contract);
    if (!response) {
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'Contract created' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateContractById = async (req, res) => {
  const { id } = req.params;
  const { start_date, end_date, status, employee_id, employer_id, job_id } =
    req.body;
  try {
    const [response] = await Contract.update(
      {
        start_date: start_date,
        end_date: end_date,
        status: status,
        employee_id: employee_id,
        employer_id: employer_id,
        job_id: job_id,
      },
      { where: { id: id } }
    );
    if (response === 0) {
      res.status(404).json({ message: 'Contract not found' });
    } else {
      res.status(200).json({ message: 'Contract updated' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteContractById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Contract.destroy({ where: { id: id } });
    if (response === 0) {
      res.status(404).json({ message: 'Contract not found' });
    } else {
      res.status(200).json({ message: 'Contract deleted' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export {
  createContract,
  getAllContracts,
  getContractById,
  updateContractById,
  deleteContractById,
};
