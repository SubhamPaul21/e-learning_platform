const express = require('express');
const { displayCourses, displaySingleCourses } = require('./utils/display_courses');

const app = express();

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


// Create Course Route

// Read Courses Route
app.get('/courses/', (req, res) => {
    res.send(displayCourses(courses));
})

// Read Particular Course Route
app.get('/courses/:name', (req, res) => {
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

// Update Course Route

// Delete Course Route

// Listen on port
const port = process.env.Port || 3000;
app.listen(port, () => {
    console.log(`App starting here: 127.0.0.1:${port}`);
})

//     courses[0].modules.forEach((module) => {
//         console.log(module);
//     return "<li>" + module + "</li>";
// })}