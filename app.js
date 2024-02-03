const express = require('express');
const mongoose = require('mongoose');

// Import Routes
const course_API = require("./Routes/courseRoute_API");
const category_API = require("./Routes/categoryRoute_API");


const app = express();

// Middlewares
app.use(express.json());
app.use(express.static('./'));
app.use('/api/category', category_API);
app.use('/api/course', course_API);

// Connect to E-learning MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/e_learning')
    .then(() => {
        console.log("Succesfully connected to E-learning Database");
    })
    .catch((err) => {
        console.log("Error connecting to E-learning Database with error message:", err);
    })

// Create Home Page Route
app.get('/', (_, res) => {
    res.sendFile('public/views/index.html', { root: './' }, function (err) {
        if (err) {
            console.log("Error in Index.html file:", err);
        }
    });
})


// Listen on port
const port = process.env.PORT || 3000;
app.listen(port);