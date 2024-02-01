const express = require('express');

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

// Read Course Route
app.get('/courses/', (req, res) => {
    let displayCourses = "";
    courses.forEach(course => {
        let modules = "";
        course.modules.forEach(module => {
            modules += `<li>${module}</li>`
        });
        const display = `
        <div style="border: 3px solid red; padding: 0px 0px 20px 20px; margin: 10px 0px">
        <h2>${course.name}</h2>
        <p>${course.description}</p>
        <h3>Modules</h3>
        <ol>${modules}</ol>
        <span><b>Creator: </b>${course.creator}</span>
        <br>
        <span><b>Published Date: </b>${course.publishedDate}</span>
        <br>
        <span><b>Ratings: </b>${course.rating}</span>
        </div>`
        displayCourses += display;
    })
    res.send(displayCourses);
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