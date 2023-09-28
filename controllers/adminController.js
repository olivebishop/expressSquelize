import db from "../models/index.js";
const Admin = db.Admin;

const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    if (admins.length === 0) {
      return res.status(404).json({ message: "No admin found" });
    }
    return res.status(200).json(admins);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

const getAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await Admin.findByPk(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    return res.status(200).json(admin);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

const createAdmin = async (req, res) => {
  const admin = req.body;

  try {
    const createdAdmin = await Admin.create(admin);
    return res.status(201).json({ message: "Admin created", admin: createdAdmin });
  } catch (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
}

const updateAdminById = async (req, res) => {
  const { id } = req.params;
  const { fullname, email, password } = req.body;
  try {
    const [updatedCount] = await Admin.update(
      {
        fullname: fullname,
        email: email,
        password: password
      },
      { where: { id: id } }
    );
    if (updatedCount === 0) {
      return res.status(404).json({ message: "Admin not found" });
    }
    return res.status(200).json({ message: "Admin updated" });
  } catch (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
}

const deleteAdminById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCount = await Admin.destroy({ where: { id: id } });
    if (deletedCount === 0) {
      return res.status(404).json({ message: "Admin not found" });
    }
    return res.status(200).json({ message: "Admin deleted" });
  } catch (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
}

export { createAdmin, getAllAdmins, getAdminById, updateAdminById, deleteAdminById };
