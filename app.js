const express = require('express');
const courses = require('./Routes/courses');

const app = express();

// Middle wares
app.use(courses)

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