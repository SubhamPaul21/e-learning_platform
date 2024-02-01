const Joi = require('joi');
const mongoose = require('mongoose');

// Generate Category Schema
const categorySchema = {
    name: Joi.string().min(3).max(30).required().alphanum(),
}

// Create Category Model
const Category = mongoose.model('Category', categorySchema);

// Function to validate new Category Input
function validateCategory(category) {
    return Joi.object(categorySchema).validate(category);
}

exports.Category = Category;
exports.validate = validateCategory;