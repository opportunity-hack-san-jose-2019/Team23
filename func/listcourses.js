const {google} = require('googleapis');

module.exports = {
    name: "listcourses",
    description: "See how often the person attends class",
    /**
     * Lists the first 10 courses the user has access to.
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
    execute: function execute(auth) {
        const classroom = google.classroom({version: 'v1', auth});
        classroom.courses.list({
            pageSize: 10,
            }, (err, res) => {
                if (err) return console.error('The API returned an error: ' + err);
                const courses = res.data.courses;
                if (courses && courses.length) {
                    console.log('Courses:');
                    courses.forEach((course) => {
                    console.log(`${course.name} (${course.id})`);
                    });
                } else {
                    console.log('No courses found.');
                }
            }
        );
    }
}