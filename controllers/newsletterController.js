// controllers/newsletterController.js

import NewsletterSubscription from '../models/NewsletterSubscription.js';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Create an OAuth2 client with your credentials
const OAuth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'YOUR_REDIRECT_URL'
);

// Set the access token (use a valid access token)
OAuth2Client.setCredentials({
  access_token: 'YOUR_ACCESS_TOKEN',
  refresh_token: 'YOUR_REFRESH_TOKEN',
});

// Create a Nodemailer transporter with OAuth2
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'olivehendrilgen1@gmail.com',
    clientId: '370593067037-48lav3ulkodhn8e79n4iqfk6ah0c2rjh.apps.googleusercontent.com',
    clientSecret: '',
    refreshToken: 'YOUR_REFRESH_TOKEN',
    accessToken: 'YOUR_ACCESS_TOKEN',
    expires: 3600, // Access token expiration time in seconds (typically 1 hour)
  },
});

export const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    // Validate the email
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Check if the email is already subscribed
    const existingSubscription = await NewsletterSubscription.findOne({
      where: { email },
    });

    if (existingSubscription) {
      return res.status(409).json({ error: 'Email is already subscribed' });
    }

    // Create a new subscription
    const newSubscription = await NewsletterSubscription.create({ email });

    // Send a confirmation email
    const mailOptions = {
      from: 'mfanyikazi@gmail.com',
      to: email,
      subject: 'Newsletter Subscription Confirmation',
      text: 'Thank you for subscribing to our newsletter!',
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Dummy validation function (replace with your own validation logic)
function isValidEmail(email) {
  // Use a library like 'validator' to validate the email format
  // Example: return validator.isEmail(email);
  return true;
}
