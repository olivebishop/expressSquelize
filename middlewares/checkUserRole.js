// middleware/checkUserRole.js
import jwt from 'jsonwebtoken';

const checkUserRole = (roles) => {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    try {
      const decodedToken = jwt.verify(token, 'secret_key');
      const userRole = decodedToken.role;

      if (!roles.includes(userRole)) {
        return res.status(403).json({ message: 'Access denied' });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  };
};

export default checkUserRole;
