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
        return res.status(404).send(error.details[0].message);
    }

    try {
        const addedCategory = await new Category(newCategory).save();
        return res.send(addedCategory);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

router.put('/:id', async (req, res) => {
    const categoryID = req.params.id;

    const newCategory = req.body;
    const { error } = validate(newCategory);

    if (error) {
        return res.status(404).send(error.details[0].message);
    }

    try {
        const updatedCategory = await Category.findByIdAndUpdate(categoryID, newCategory);
        return res.send(updatedCategory);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

router.delete('/:id', async (req, res) => {
    const categoryID = req.params.id;

    try {
        const deletedCategory = await Category.findByIdAndDelete(categoryID);
        res.send(deletedCategory);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

module.exports = router;