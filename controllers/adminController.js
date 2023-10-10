import db from "../models/index.js";
const Admin = db.Admin;
const User = db.User;

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
};

const getAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the admin by ID, including the associated user's bio
    const admin = await Admin.findOne({
      where: { id },
      include: {
        model: User,
        as: 'user',
        attributes: ['firstName', 'lastName', 'country', 'city', 'phoneNumber'],
      },
    });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Extract the user's bio information
    const userBio = {
      firstName: admin.user.firstName,
      lastName: admin.user.lastName,
      country: admin.user.country,
      city: admin.user.city,
      phoneNumber: admin.user.phoneNumber,
    };

    return res.status(200).json(userBio);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

const createAdmin = async (req, res) => {
  const admin = req.body;

  try {
    const createdAdmin = await Admin.create(admin);
    return res.status(201).json({ message: "Admin created", admin: createdAdmin });
  } catch (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
};

const updateAdminById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phoneNumber, Country, City } = req.body;
  try {
    const [updatedCount] = await Admin.update(
      {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        Country: Country,
        City: City,
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
};

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
};

export { createAdmin, getAllAdmins, getAdminById, updateAdminById, deleteAdminById };
