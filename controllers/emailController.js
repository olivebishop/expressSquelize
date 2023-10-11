  // Import the necessary modules
  import nodemailer from 'nodemailer';
  import jwt from 'jsonwebtoken';

  // Function to send a verification email
  const sendVerificationEmail = (user, res) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "olivehendrilgen1@gmail.com", 
        pass: "fsih juqg aora qhpb", 
      },
    });

    const mailOptions = {
      from: "olivehendrilgen1@gmail.com", // Replace with your Gmail email
      to: user.email,
      subject: "Verification Email",
      html: `Hello ${user.name},<br><br>
      Thank you for signing up with our service. Your account has been successfully verified.<br><br>
      If you have any questions or need further assistance, please don't hesitate to contact us.<br><br>
      Regards,<br>Mfanyikazi Abroad Support Team😊`,
    };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.log("There was an error sending the email", err);
        res.status(500).json("Email sending failed");
      } else {
        console.log("Email sent successfully", response);
        res.status(200).json("Verification email sent");
      }
    });
  };

  const generateResetToken = (userEmail) => {
    // Set the expiration time (e.g., 1 hour)
    const expiration = '9000';

    // Create a payload with user email
    const payload = {
      email: userEmail,
    };

    // Sign the token with your secret key
    const resetToken = jwt.sign(payload, 'your-secret-key', { expiresIn: expiration });

    return resetToken;
  };
  // Function to send a password reset email
  // Function to send a password reset email with a reset token
  const sendPasswordResetEmail = (user, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'olivehendrilgen1@gmail.com',
        pass: 'fsih juqg aora qhpb', // Replace with your Gmail password or use environment variables
      },
    });

    // Generate a reset token for the user
    const resetToken = generateResetToken(user.email);

    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

    const mailOptions = {
      from: 'olivehendrilgen1@gmail.com',
      to: user.email,
      subject: 'Reset Password Link',
      html: `You are receiving this email because you or someone else has requested the reset of the password for your account.
        Please click on the following link below or paste this link into your browser to complete this process within an hour of receiving it:
        <a href="${resetLink}">Click here to reset your password</a>
        If you did not request this, please ignore this email, and your password will remain the same.`,
    };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.log('There was an error sending the email', err);
        res.status(500).json('Email sending failed');
      } else {
        console.log('Email sent successfully', response);
        res.status(200).json('Password reset email sent');
      }
    });
  };


  // Function to send a forget password email
  const sendForgetPasswordEmail = (user, res) => {
      const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
          user: "olivehendrilgen1@gmail.com", 
          pass: "fsih juqg aora qhpb", 
      },
  });

  const mailOptions = {
      from: "olivehendrilgen1@gmail.com",
      to: user.email,
      subject: "Forget Password Notification",
      html: `You are receiving this email because you requested assistance with your account password.
      If you did not request this, please ignore this email.
      If you need further assistance, please contact our support team.😊`,
  };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.log("There was an error sending the email", err);
        res.status(500).json("Email sending failed");
      } else {
        console.log("Email sent successfully", response);
        res.status(200).json("Forget password email sent");
      }
    });
  };
  // Function to send a newsletter subscription confirmation email
  const sendNewsletterSubscriptionEmail = (user, res) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "olivehendrilgen1@gmail.com",
        pass: "fsih juqg aora qhpb",
      },
    });

    const mailOptions = {
      from: "olivehendrilgen1@gmail.com",
      to: user.email,
      subject: "Newsletter Subscription Confirmation",
      html: `Hello ${user.name},<br><br>
      Thank you for subscribing to our newsletter. You will now receive our latest updates and news.<br><br>
      If you have any questions or need further assistance, please don't hesitate to contact us.<br><br>
      Regards,<br>Mfanyikazi Abroad Support Team😊`,
    };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.log("There was an error sending the email", err);
        res.status(500).json("Email sending failed");
      } else {
        console.log("Email sent successfully", response);
        res.status(200).json("Newsletter subscription email sent");
      }
    });
  };
  // Function to send promotional emails to newsletter subscribers
  const sendPromotions = (subscribers) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "olivehendrilgen1@gmail.com",
        pass: "fsih juqg aora qhpb",
      },
    });

    // Compose and send promotional emails to each subscriber
    subscribers.forEach((subscriber) => {
      const promoEmail = {
        from: "olivehendrilgen1@gmail.com",
        to: subscriber.email,
        subject: "Exclusive Promotion!",
        html: `
          <html>
            <body>
              <h2>Hello ${subscriber.name},</h2>
              <h1>Check out our exclusive promotion:</h1>
              <p>Happy Customer week! We are offering discounts to all our new users who are planning to upgrade on Mfanyikazi Abroad. <br/>All those who have purchased the premium version will not have any problem getting courses.</p>
              
              <p>Regards,<br>Mfanyikazi Abroad</p>
              
              <!-- Include an image with a direct URL to your banner image below the text -->
              <img src="https://i.ibb.co/bPH2vBg/email-promo.png" alt="email-promo banner" border="0" width="auto" height="auto">
            </body>
          </html>
        `,
      };
      
      

      transporter.sendMail(promoEmail, (err, response) => {
        if (err) {
          console.error("Error sending promotional email:", err);
        } else {
          console.log("Promotional email sent successfully to:", subscriber.email);
        }
      });
    });
    
  };
  const sendHiredEmail = (user, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'olivehendrilgen1@gmail.com',
        pass: 'fsih juqg aora qhpb', // Replace with your Gmail password or use environment variables
      },
    });
  
    const mailOptions = {
      from: 'olivehendrilgen1@gmail.com',
      to: user.email,
      subject: "You've Been Hired!",
      html: `
        Hello ${user.name},<br><br>
        Congratulations! We are excited to inform you that you've been hired for the position you applied for.<br><br>
        Here are the details:<br>  
        - Start Date: [1st November, 2023]<br>      
        - Location: [Nairobi]<br>          
        <br><br>
        If you have any questions or need further information, please don't hesitate to contact us.<br><br>
        Regards,<br>Mfanyikazi Abroad😊`,
    };
  
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.log('There was an error sending the email', err);
        res.status(500).json('Email sending failed');
      } else {
        console.log('Email sent successfully', response);
        res.status(200).json("You've been hired email sent");
      }
    });
  };
  


  export {
    sendVerificationEmail,
    sendPasswordResetEmail,
    sendForgetPasswordEmail,
    sendNewsletterSubscriptionEmail,
    sendPromotions,
    sendHiredEmail,
  };
