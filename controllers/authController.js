import jwt from "jsonwebtoken";
import db from "../models/index.js";
import bcrypt from "bcrypt";

const User = db.User;
const Role = db.Role;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email }, include: Role });
    console.log(user.roles[0].name);
    if (!user) {
      res.status(400).json({ message: "Invalid email or password" });
    } else {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const { id } = user;
        const role = user.roles[0].name
        const token = jwt.sign({ id }, "secret_key", { expiresIn: "1hr" });
        res.status(200).json({ token, role });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    }
  } catch (error) {
    next(error);
  }
};

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: username,
      email: email,
      password: hash,
    });
    const { id, role } = user;
    const token = jwt.sign({ id }, "secret_key", { expiresIn: "1hr" });
    res.json({ token, role });
  } catch (error) {
    next(error);
  }
};

export { login, signup };