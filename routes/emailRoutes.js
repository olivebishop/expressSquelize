// Import the necessary modules
import express from 'express';
import { sendVerificationEmail, sendPasswordResetEmail, sendForgetPasswordEmail } from "../controllers/emailController.js"; // Import the emailController

const router = express.Router();

router.post("/resetPassword", (req, res) => {
  const user = {
    id: 123,
    email: "user@example.com",
  };

  // Use the correct function name sendPasswordResetEmail
  sendPasswordResetEmail(user, res);
});

router.post("/forgetPassword", (req, res) => {
  const user = {
    email: "user@example.com",
  };

  // Use the correct function name sendForgetPasswordEmail
  sendForgetPasswordEmail(user, res);
});

router.post("/sendVerificationEmail", (req, res) => {
  const user = {
    name: "olive",
    email: "olivebishop9@gmail.com",
  };

  // Use the correct function name sendVerificationEmail
  sendVerificationEmail(user, res);
});

export default router;
