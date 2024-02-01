const express = require('express');
const mongoose = require('mongoose');

// Import Routes
const course = require("./Routes/courseRoute");
const category = require("./Routes/categoryRoute");

const app = express();

// Middlewares
app.use(express.json());
app.use('/api/category', category);
app.use('/api/course', course);

// Connect to E-learning MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/e_learning')
    .then(() => {
        console.log("Succesfully connected to E-learning Database");
    }).catch((err) => {
        console.log("Error connecting to E-learning Database with error message:", err);
    })

// Create Home Page Route
app.get('/', (req, res) => {
    const welcomeMessage = `
        <div>
            <h2>Welcome to Subham's E-learning platform Clone project.</h2>
            <h4>Tech Stacks Used:</h4>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>REST API</li>
            </ul>
            <h4>Enter the world of E-learning from the link below --></h4>
            <a href="/courses">Courses</a>
        </div>
    `
    res.send(welcomeMessage);
})


// Listen on port
const port = process.env.PORT || 3000;
app.listen(port);