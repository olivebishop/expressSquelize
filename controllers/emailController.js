// Import the necessary modules
import nodemailer from 'nodemailer';

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
    Regards,<br>Mfanyikazi Abroad Support Team`,
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

// Function to send a password reset email
const sendPasswordResetEmail = (user, res) => {
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
    subject: "Reset Password Link",
    html: `You are receiving this email because you or someone else has requested the reset of the password for your account.
    Please click on the following link below or paste this link into your browser to complete this process within an hour of receiving it:
    <a href="http://localhost:3000/reset/${user.id}">Click here to reset your password</a>
    If you did not request this, please ignore this email, and your password will remain the same.`,
};

    transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
    console.log("There was an error sending the email", err);
    res.status(500).json("Email sending failed");
    } else {
    console.log("Email sent successfully", response);
    res.status(200).json("Password reset email sent");
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
    If you need further assistance, please contact our support team.`,
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

export {
  sendVerificationEmail,
  sendPasswordResetEmail,
  sendForgetPasswordEmail,
};
