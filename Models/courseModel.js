const Joi = require('joi');
const mongoose = require('mongoose');
const { getAndUpdateCategoryArray } = require('../utils/getAndUpdate_CategoryArray');

// Create Course Schema
const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    creator: String,
    rating: Number,
    category: String,
})

// Create Course Model
const Course = mongoose.model('Course', courseSchema);

// Function to validate new Course Input
async function validateCourse(course) {
    const categoryArray = await getAndUpdateCategoryArray();
    const courseSchema = Joi.object({
        name: Joi.string().min(3).max(30).required().alphanum(),
        description: Joi.string().min(10).max(100).required(),
        creator: Joi.string().min(3).max(30).required().alphanum(),
        rating: Joi.number().min(0).max(5).required(),
        category: Joi.string().valid(...categoryArray).required(),

    });
    return courseSchema.validate(course);
}

exports.Course = Course;
exports.validate = validateCourse;