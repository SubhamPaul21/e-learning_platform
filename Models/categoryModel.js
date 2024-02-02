const Joi = require('joi');
const mongoose = require('mongoose');

// Create Category Schema
const categorySchema = new mongoose.Schema({
    name: String,
});

// Create Category Model
const Category = mongoose.model('Category', categorySchema);

// Function to validate new Category Input
function validateCategory(category) {
    const categorySchema = Joi.object({
        name: Joi.string().min(3).max(30).alphanum().required(),
    })

    return categorySchema.validate(category);
}

exports.Category = Category;
exports.validate = validateCategory;