import db from "../models/index.js";

const Courses = db.Courses;

const getAllCourses = async (req, res) => {
    try {
        const response = await Courses.findAll();
        if(response.length === 0){
            res.status(404).json({"message": "No Courses found"});
        }
        else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const getCoursesById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Courses.findByPk(id);
        if(response === null ){
            res.status(404).json({"message": "Courses not found."});
        }else if(response){
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const createCourses = async (req, res) => {
    const courses = req.body;

    try {
        const newCourse = await Courses.create(courses);
        
        if (newCourse) {
            res.status(201).json({"message": "Course created.", "data": newCourse});
        } else {
            res.status(500).json({"message": "Internal server error: Course not created."});
        }
    } catch (error) {
        // Log the error for debugging purposes
        console.error(error);

        res.status(400).json({"message": "Bad Request", "error": error.message});
    }
}


const updateCoursesById = async (req, res) => {
    const { id } = req.params;
    const { title, description} = req.body;
    try {
        const [ response ] = await User.update(
            {
                "title": title,
                "description": description
                },
                { where: { id: id}});
        if(response === 0){
            res.status(404).json({"message": "Courses not found"});
        }else if(response){
            res.status(201).json({"message": "Courses updated."});
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteCoursesById = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Courses.destroy({where: {id: id}})
        if(response === 0){
            res.status(404).json({"message": "User not found"});
        }else if(response){
            res.status(200).json({"message": "User deleted."})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export { createCourses, getAllCourses, getCoursesById, updateCoursesById, deleteCoursesById };