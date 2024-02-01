const Joi = require('joi');
const mongoose = require('mongoose');

// Connect to Course MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/course')
    .then(() => {
        console.log("Succesfully connected to Course Database");
    }).catch((err) => {
        console.log("Error connecting to Course Database with error message:", err);
    })

// Generate Course Schema
const courseSchema = {
    name: Joi.string().min(3).max(30).required().alphanum(),
    description: Joi.string().min(10).max(100).required().alphanum(),
    creator: Joi.string().min(3).max(30).required().alphanum(),
    rating: Joi.number().min(0).max(5).required(),
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}

// Create Course Model
const Course = mongoose.model('Course', courseSchema);

// Function to validate new Course Input
function validateCourse(course) {
    return Joi.object(courseSchema).validate(course);
}

exports.Course = Course;
exports.validate = validateCourse;