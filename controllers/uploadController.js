import path from 'path';
import db from "../models/index.js";
// Now you can use these functions in your code


const User = db.User;
const Document = db.Document;

// Handle file upload and document verification
export const uploadFile= async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    // Assuming you have a userId associated with the file upload
    const { userId } = req.body;
    
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required for document verification.' });
    }

    // Check if the user exists
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Save the file information to your database or perform other necessary operations
    // For example, create a document record in your documents table
    await Document.create({
      userId: user.id,
      fileName: req.file.originalname, // Store the file information
      // Add other document-related fields as needed
    });

    // Your document verification logic here...
    // For example, you might retrieve and check the user's submitted documents

    // Simulate a successful document verification for demonstration purposes
    // You should replace this with your actual verification logic
    const documents = await Document.findAll({ where: { userId } });

    if (!documents || documents.length === 0) {
      return res.status(400).json({ message: 'No documents found for verification' });
    }

    // Once documents are successfully verified, you can call the email sending function
    await mailer.sendVerificationEmail(user.email, user.username, user.role);

    // Update the user's status to indicate they are verified (if needed)
    // For example, you can set a field like 'isVerified' to true in your User model
    await user.update({ isVerified: true });

    // Send a success response
    return res.status(200).json({ message: 'File uploaded and verification email sent successfully.' });
  } catch (error) {
    // Handle errors (e.g., send an error response)
    console.error('Error uploading and verifying document:', error);
    return res.status(500).json({ message: 'Error uploading and verifying document' });
  }
};
