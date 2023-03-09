import dotenv from 'dotenv';
import express from 'express';
import User from './models/User.js';
import Role from './models/Role.js';

dotenv.config();
const app = express();


// app.get('/users', (req, res) => {
// res.status(200).json({message:'Success'})
// })

const port = process.env.PORT || 5000;

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});