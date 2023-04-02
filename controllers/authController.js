import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import db from "../models/index.js";

const User = db.User;

const login = async (req, res, next) => {
   const { username, password} = req.body;
   try {
      const user = await User.findOne({where: {username: username}});
      if(!user){
         res.status(400).json({"message": "Invalid username or password"});
      }else{
         const result = await bcrypt.compare(password, user.password);
         if(result){
            const token = jwt.sign({ user: user }, 'secret_jwt', { expiresIn: '1hr' });
            res.status(200).json({ token: token });
         }else{
            res.status(401).json({"message": "Invalid username or password"});
         }
      }
   } catch (error) {
      next(error);
   }
}

const signup = async (req, res, next) => {
   const { fullname, username, email, password } = req.body;

   try {
      const hash = await bcrypt.hash(password, 10);
      const user = await User.create({ fullname:fullname, username: username, email: email, password: hash });
      const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1hr'});
      res.json({ token: token })
   } catch (error) {
      next(error);
   }
}

export { login, signup };