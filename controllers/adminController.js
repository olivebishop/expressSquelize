import db from "../models/index.js";
const Admin = db.Admin;

const getAllAdmins = async (req, res) => {
  try {
    const response = await Admin.findAll();
    if(response.length === 0){
      res.status(404).json({"message": "No admin found"});
    }
    else if(response){
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

const getAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Admin.findByPk(id);
    if(response === null ){
      res.status(404).json({"message": "Admin not found."});
    }else if(response){
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

const createAdmin = async (req, res) => {
  const admin = req.body;

  try {
    const response = await Admin.create(admin);
    if(!response){
      res.status(500).json({"message": "Internal server error"});
    }else if(response){
      res.status(201).json({"message": "Admin created."});
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

const updateAdminById = async (req, res) => {
  const { id } = req.params;
  const { fullname, email, password} = req.body;
  try {
    const [ response ] = await Admin.update(
      {
        "fullname":fullname,
        "email": email,
        "password": password
      },
      { where: { id: id }});
    if(response === 0){
      res.status(404).json({"message": "Admin not found"});
    }else if(response){
      res.status(201).json({"message": "Admin updated."});
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

const deleteAdminById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await Admin.destroy({where: {id: id}})
    if(response === 0){
      res.status(404).json({"message": "Admin not found"});
    }else if(response){
      res.status(200).json({"message": "Admin deleted."})
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

export { createAdmin, getAllAdmins, getAdminById, updateAdminById, deleteAdminById };
