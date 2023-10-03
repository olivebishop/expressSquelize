import express from 'express';
import 
{createCourses, getAllCourses, getCoursesById, updateCoursesById, deleteCoursesById}
from '../controllers/coursesController.js';


const router = express.Router();

router.get('/courses', getAllCourses);
router.get('/courses/:id', getCoursesById);
router.post('/courses', createCourses);
router.patch('/courses/:id',  updateCoursesById);
router.delete('/courses/:id',  deleteCoursesById);

export default router;
