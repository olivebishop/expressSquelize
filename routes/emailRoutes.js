// Import the necessary modules
import express from 'express';
import { sendVerificationEmail, sendPasswordResetEmail, sendForgetPasswordEmail ,sendNewsletterSubscriptionEmail, sendPromotions, sendHiredEmail} from "../controllers/emailController.js"; // Import the emailController
import { gmail } from 'googleapis/build/src/apis/gmail/index.js';

const router = express.Router();

//reset password
router.post("/resetPassword", (req, res) => {
  const user = {
    id: 123,
    email: "olivebishop9@gmail.com",
  };

  // Use the correct function name sendPasswordResetEmail
  sendPasswordResetEmail(user, res);
});
// forget password
router.post("/forgetPassword", (req, res) => {
  const user = {
    email: "olivebishop9@gmail.com",
  };

  // Use the correct function name sendForgetPasswordEmail
  sendForgetPasswordEmail(user, res);
});

// Route for send verification

router.post("/sendVerificationEmail", (req, res) => {
  const user = {
    name: "user",
    email: "olivebishopodhiambo12",
  };

  // Use the correct function name sendVerificationEmail
  sendVerificationEmail(user, res);
});

// Route for subscribing to the newsletter
router.post("/subscribeToNewsletter", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json("Email address is required.");
  }

  const user = {
    name: "User", 
    email: email,
  };

  sendNewsletterSubscriptionEmail(user, res);
});
// Route for sending promotional emails to newsletter subscribers
router.post('/sendPromotions', (req, res) => {
  // Assuming you have a list of subscribers in the request body
  const subscribers = req.body.subscribers;

  if (!subscribers || !Array.isArray(subscribers) || subscribers.length === 0) {
    return res.status(400).json({ message: 'Invalid or empty list of subscribers.' });
  }

  // Call the sendPromotions function to send promotional emails
  sendPromotions(subscribers);

  // Respond with a success message
  return res.status(200).json({ message: 'Promotional emails sent successfully.' });
});
// Route for sending "You've been hired" email
router.post("/sendHiredEmail", (req, res) => {
  const user = {
    name: " User", // Replace with the name of the hired user
    email: "olivebishop9@gmail.com", // Replace with the email of the hired user
  };

  // Use the new function sendHiredEmail
  sendHiredEmail(user, res);
});

export default router;
