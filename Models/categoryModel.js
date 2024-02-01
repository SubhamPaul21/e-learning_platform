const Joi = require('joi');
const mongoose = require('mongoose');

// Connect to Category MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/category')
    .then(() => {
        console.log("Succesfully connected to Category Database");
    }).catch((err) => {
        console.log("Error connecting to Category Database with error message:", err);
    })

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