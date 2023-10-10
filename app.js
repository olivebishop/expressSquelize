import express from 'express';
import dotenv from 'dotenv';
import reportRoutes from './routes/reportRoutes.js';
import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import userRoleRouter from './routes/userRoleRoutes.js';
import authRoutes from './routes/authRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';
import db from './models/index.js';
import newsletterRoutes from './routes/newsletterRoutes.js';
import listEndpoints from 'express-list-endpoints'; // Import express-list-endpoints
//import employeeRoutes from './routes/employeeRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
//import agencyRoutes from './routes/agencyRoutes.js'
//import employerRoutes from './routes/employerRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
import countryRoutes from './routes/countryRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import upload from './middlewares/upload.js';
import { uploadFile } from './controllers/uploadController.js'
import employeeRoutes from './routes/employeeRoutes.js';
import { sendVerificationEmail,sendPasswordResetEmail,sendForgetPasswordEmail, } from './controllers/emailController.js';
import emailRoutes from './routes/emailRoutes.js';
import coursesRoutes from './routes/coursesRoutes.js';
import PaymentRoutes from './routes/PaymentRoutes.js';


const sequelize = db.sequelize;

dotenv.config();
const app = express();

// Add middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());
app.use(errorHandler);

await sequelize.sync({ alter: true }).then(() => {
  console.log("Tables created.");
}).catch(err => {
  console.log(err);
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', roleRoutes);
app.use('/api/v1', userRoleRouter);
app.use('/api/v1', authRoutes);
app.use('/api/v1/', reportRoutes);
//app.use('/api/v1/', employerRoutes);
app.use('/api/v1/',  jobRoutes);
app.use('/api/v1/',  applicationRoutes);
app.use('/api/v1/', countryRoutes);
app.use('/api/v1/subscribe', newsletterRoutes);
app.use('/api/v1/upload', upload.single('file'), uploadFile);
app.use('/api/v1/', employeeRoutes)
app.use('/api/v1/', emailRoutes)
app.use('/api/v1/', coursesRoutes)
app.use('/api/v1/', PaymentRoutes)
app.use ('/api/v1/', adminRoutes)


// Get a list of registered endpoints
const endpoints = listEndpoints(app);

console.log('Registered endpoints:');
console.log(endpoints);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});
