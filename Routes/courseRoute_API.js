const express = require('express');
const { Course, validate, validateExistingCourse } = require("../Models/courseModel");

const router = express.Router();

// Get Courses
router.get('/', async (_, res) => {
    const courses = await Course.find();
    res.send(courses);
})

router.get('/:id', async (req, res) => {
    const courseID = req.params.id;

    const course = await Course.findById(courseID);
    res.send(course);
})

// Add Courses
router.post('/', async (req, res) => {
    const newCourse = req.body;
    const { error } = await validate(newCourse);;

    if (error) {
        return res.status(404).send(error.details[0].message);
    }

    try {
        const addedCourse = await new Course(newCourse).save();
        return res.send(addedCourse);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

// Update Courses
router.put('/:id', async (req, res) => {
    const courseID = req.params.id;
    const newCourse = req.body;

    const { error } = await validateExistingCourse(courseID, newCourse);

    if (error) {
        return res.status(404).send(error.details[0].message);
    }

    try {
        const addedCourse = await Course.findByIdAndUpdate(courseID, newCourse);
        return res.send(addedCourse);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

// Delete Courses
router.delete('/:id', async (req, res) => {
    const courseID = req.params.id;

    try {
        const deletedCourse = await Course.findByIdAndDelete(courseID);
        res.send(deletedCourse);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})

module.exports = router;