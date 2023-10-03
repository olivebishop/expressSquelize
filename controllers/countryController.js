import db from '../models/index.js';

const { Country } = db;

const createCountry = async (req, res) => {
  try {
    const { name, code } = req.body;
    const country  = await Country .create({
      name,
      code
    });
    res.status(201).json(country);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating Country ' });
  }
};

const getCountryById = async (req, res) => {
  try {
    const country = await Country .findByPk(req.params.id);
    if (!country) {
      return res.status(404).json({ message: 'Country  not found' });
    }
    res.status(200).json(country);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting country' });
  }
};

const getAllCountries = async (req, res) => {
  try {
    const countries = await Country .findAll();
    res.status(200).json(countries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting Country ' });
  }
};

const updateCountry  = async (req, res) => {
  try {
    const country = await Country .findByPk(req.params.id);
    if (!country) {
      return res.status(404).json({ message: 'Job not found' });
    }
    const { name , code} = req.body;
    await name.update({
        name,
        code
    });
    res.status(200).json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating job' });
  }
};

const deleteCountry  = async (req, res) => {
  try {
    const country = await Country .findByPk(req.params.id);
    if (!country) {
      return res.status(404).json({ message: 'country not found' });
    }
    await country.destroy();
    res.status(204).json();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting Country ' });
  }
};

export { createCountry, getAllCountries, getCountryById, updateCountry, deleteCountry };
