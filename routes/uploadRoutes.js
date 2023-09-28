import express from 'express';
const router = express.Router();
import upload from '../middlewares/upload.js';

// Import your relevant controller
import { uploadFile } from '../controllers/uploadController.js';

// Route for file upload
router.post('/upload', upload.single('file'), async (req, res) => {
  // Handle file upload here, and access uploaded file details via req.file

  // Save employee details to the database here based on req.body
  const { fullName, phoneNumber, idNumber } = req.body;
  try {
    const newEmployee = await Employee.create({
      fullname: fullName,
      National_id: idNumber,
      phone: phoneNumber,
    });

    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
