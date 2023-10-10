// auth.js

const checkIsAgency = (req, res, next) => {
    // Assuming you have stored user roles in the user object after authentication
    if (req.user && req.user.role === 'agency') {
      // User is an agency, allow them to proceed
      return next();
    } else {
      // User is not authorized to post jobs
      return res.status(403).json({ message: 'You are not authorized to post jobs.' });
    }
  };
  
  export default checkIsAgency;