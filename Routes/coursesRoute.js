const express = require('express');
const { displayCourses, displaySingleCourses } = require('../utils/display_courses');

const router = express.Router();

// Dummy course database for initial testing
const courses = [
    {
        name: "JavaScript",
        description: "Learning A-Z JavaScript concepts in one course and be a master Javascript developer",
        modules: [
            "Introduction",
            "Variables",
            "Conditions",
            "Loops",
            "OOPS Concepts",
            "Advanced Concepts",
            "and many more...",
        ],
        creator: "Adam",
        publishedDate: "01/01/2024",
        rating: 4.5,
    },
    {
        name: "Python",
        description: "Learning A-Z Python concepts in one course and be a master Python developer",
        modules: [
            "Introduction",
            "Variables",
            "Conditions",
            "Loops",
            "OOPS Concepts",
            "Advanced Concepts",
            "and many more...",
        ],
        creator: "Bob",
        publishedDate: "10/01/2024",
        rating: 4.2,
    },
    {
        name: "C++",
        description: "Learning A-Z C++ concepts in one course and be a master C++ developer",
        modules: [
            "Introduction",
            "Variables",
            "Conditions",
            "Loops",
            "OOPS Concepts",
            "Advanced Concepts",
            "and many more...",
        ],
        creator: "Carrie",
        publishedDate: "20/01/2024",
        rating: 4.0,
    },
    {
        name: "Java",
        description: "Learning A-Z Java concepts in one course and be a master Java developer",
        modules: [
            "Introduction",
            "Variables",
            "Conditions",
            "Loops",
            "OOPS Concepts",
            "Advanced Concepts",
            "and many more...",
        ],
        creator: "Derrick",
        publishedDate: "01/02/2024",
        rating: 4.7,
    },
]

// Read Courses Route
router.get('/courses/', (req, res) => {
    res.send(displayCourses(courses));
})

// Read Particular Course Route
router.get('/courses/:name', (req, res) => {
    const courseName = req.params.name.toLowerCase();
    const course = courses.find(course => course.name.toLowerCase() === courseName);

    if (!course) {
        const notFoundMessage = `
        <b>The course you are trying to find is not uploaded yet. Check the available courses here --></b>
        <a href="/courses">Courses</a>
        `
        res.status(404).send(notFoundMessage);
    } else {
        res.send(displaySingleCourses(course));
    }
})

// Create Course Route
router.post('/courses/', (req, res) => {
    const newCourse = req.body;
    const existingCourse = courses.find(course => course.name.toLowerCase() === newCourse.name.toLowerCase());

    if (existingCourse) {
        res.status(404).send("The course you are trying to add already exists.");
    } else {
        const course = {
            name: newCourse.name,
            description: newCourse.description,
            modules: newCourse.modules,
            creator: newCourse.creator,
            publishedDate: newCourse.publishedDate,
            rating: newCourse.rating,
        }
        courses.push(course);
        res.send(course);
    }
})

// Update Course Route
router.put('/courses/:name', (req, res) => {
    const newCourse = req.body;
    const existingCourse = courses.find(course => course.name.toLowerCase() === req.params.name.toLowerCase());

    if (!existingCourse) {
        res.status(404).send("The course you are trying to update doesn't exists.");
    } else {
        existingCourse.name = newCourse.name;
        existingCourse.description = newCourse.description;
        existingCourse.modules = newCourse.modules;
        existingCourse.creator = newCourse.creator;
        existingCourse.publishedDate = newCourse.publishedDate;
        existingCourse.rating = newCourse.rating;
        res.send(existingCourse);
    }
})

// Delete Course Route
router.delete('/courses/:name', (req, res) => {
    const existingCourseIndex = courses.findIndex(course => course.name.toLowerCase() === req.params.name.toLowerCase());

    if (existingCourseIndex >= 0) {
        const deletedCourse = courses.splice(existingCourseIndex, 1);
        res.send(deletedCourse);
    } else {
        res.status(404).send("The course you are trying to delete doesn't exists.");
    }
})

module.exports = router;