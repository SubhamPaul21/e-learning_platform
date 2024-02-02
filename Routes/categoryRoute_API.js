const express = require('express');
const { Category, validate } = require("../Models/categoryModel");

const router = express.Router();

router.get('/', async (_, res) => {
    const categories = await Category.find();
    res.send(categories);
})

router.post('/', async (req, res) => {
    const newCategory = req.body;
    const { error } = validate(newCategory);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        await new Category(newCategory).save();
        return res.send(newCategory);
    } catch (error) {
        return res.status(400).send(error.message);
    }
})

router.put('/:id', async (req, res) => {
    const categoryID = req.params.id;

    const newCategory = req.body;
    const { error } = validate(newCategory);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        await Category.findByIdAndUpdate(categoryID, newCategory);
        return res.send(newCategory);
    } catch (error) {
        return res.status(400).send(error.message);
    }
})

router.delete('/:id', async (req, res) => {
    const categoryID = req.params.id;

    try {
        await Category.findByIdAndDelete(categoryID);
        res.send("Category Deleted from Database");
    } catch (error) {
        return res.status(400).send(error.message);
    }
})

module.exports = router;