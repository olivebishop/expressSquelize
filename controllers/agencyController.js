import db from "../models/index.js";

const Agency = db.Agency;

const getAllAgencies = async (req, res) => {
  try {
    const response = await Agency.findAll();
    if (response.length === 0) {
      res.status(404).json({ "message": "No agencies found" });
    } else if (response) {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

const getAgencyById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Agency.findByPk(id);
    if (response === null) {
      res.status(404).json({ "message": "Agency not found" });
    } else if (response) {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

const createAgency = async (req, res) => {
  const agency = req.body;
  try {
    const response = await Agency.create(agency);
    if (!response) {
      res.status(500).json({ "message": "Internal server error" });
    } else if (response) {
      res.status(201).json({ "message": "Agency created" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

const updateAgencyById = async (req, res) => {
  const { id } = req.params;
  const { name, license_number, address, country, phone, email, password } = req.body;
  try {
    const [response] = await Agency.update(
      { "name": name, "license_number": license_number, "address": address, "country": country, "phone": phone, "email": email, "password": password },
      { where: { id: id } });
    if (response === 0) {
      res.status(404).json({ "message": "Agency not found" });
    } else if (response) {
      res.status(200).json({ "message": "Agency updated" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

const deleteAgencyById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Agency.destroy({ where: { id: id } })
    if (response === 0) {
      res.status(404).json({ "message": "Agency not found" });
    } else if (response) {
      res.status(200).json({ "message": "Agency deleted" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

export { createAgency, getAllAgencies, getAgencyById, updateAgencyById, deleteAgencyById };
