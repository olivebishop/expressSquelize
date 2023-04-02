import db from '../models';

const { Location } = db;

const create = async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(201).send(location);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred while creating the location.' });
  }
};

const findAll = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.status(200).send(locations);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'An error occurred while retrieving locations.' });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findByPk(id);
    if (!location) {
      return res.status(404).send({ message: `Location with id ${id} not found.` });
    }
    res.status(200).send(location);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: `An error occurred while retrieving location with id ${id}.` });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  try {
    const [ rowsUpdated ] = await Location.update(req.body, {
      where: { id }
    });
    if (!rowsUpdated) {
      return res.status(404).send({ message: `Location with id ${id} not found.` });
    }
    res.status(200).send({ message: `Location with id ${id} successfully updated.` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: `An error occurred while updating location with id ${id}.` });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const rowsDeleted = await Location.destroy({
      where: { id }
    });
    if (!rowsDeleted) {
      return res.status(404).send({ message: `Location with id ${id} not found.` });
    }
    res.status(204).send({ message: `Location with id ${id} successfully deleted.` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: `An error occurred while deleting location with id ${id}.` });
  }
};

export default { create, findAll, findOne, update, remove };
