import db from '../models/index.js';

const Country = db.Country;

// Create a new country
const createCountry = async (req, res) => {
  try {
    const country = await Country.create({
      countryName: req.body.name,
      countryCode: req.body.code,
    });

    return res.status(201).json({
      success: true,
      message: 'Country created successfully',
      data: country,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Could not create country',
      error: error.message,
    });
  }
};

// Get all countries
const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();

    return res.status(200).json({
      success: true,
      message: 'Countries retrieved successfully',
      data: countries,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Could not retrieve countries',
      error: error.message,
    });
  }
};

// Get a single country
const getCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);

    if (!country) {
      return res.status(404).json({
        success: false,
        message: 'Country not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Country retrieved successfully',
      data: country,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Could not retrieve country',
      error: error.message,
    });
  }
};

// Update a country
const updateCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);

    if (!country) {
      return res.status(404).json({
        success: false,
        message: 'Country not found',
      });
    }

    await country.update({
      name: req.body.name || country.name,
      code: req.body.code || country.code,
    });

    return res.status(200).json({
      success: true,
      message: 'Country updated successfully',
      data: country,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Could not update country',
      error: error.message,
    });
  }
};

// Delete a country
const deleteCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);

    if (!country) {
      return res.status(404).json({
        success: false,
        message: 'Country not found',
      });
    }

    await country.destroy();

    return res.status(200).json({
      success: true,
      message: 'Country deleted successfully',
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Could not delete country',
      error: error.message,
    });
  }
};

export { createCountry, getAllCountries, getCountryById, updateCountryById, deleteCountryById };
