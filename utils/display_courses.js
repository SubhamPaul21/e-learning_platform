function displayCourses(courses) {
    let displayCourses = "";
    courses.forEach(course => {
        let modules = "";
        course.modules.forEach(module => {
            modules += `<li>${module}</li>`
        });
        const display = `
        <div style="border: 3px solid red; padding: 0px 0px 20px 20px; margin: 10px 0px">
        <h2><i>${course.name}</i></h2>
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
    return displayCourses;
}

function displaySingleCourses(course) {
    let modules = "";
    course.modules.forEach(module => {
        modules += `<li>${module}</li>`
    });

    return `
        <div style="border: 3px solid red; padding: 0px 0px 20px 20px; margin: 10px 0px">
        <h2><i>${course.name}</i></h2>
        <p>${course.description}</p>
        <h3>Modules</h3>
        <ol>${modules}</ol>
        <span><b>Creator: </b>${course.creator}</span>
        <br>
        <span><b>Published Date: </b>${course.publishedDate}</span>
        <br>
        <span><b>Ratings: </b>${course.rating}</span>
        </div>
        <br>
        <b>Check other available courses here --></b>
        <a href="/courses">Courses</a>
    `
}

module.exports = { displayCourses, displaySingleCourses };