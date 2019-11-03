const {google} = require('googleapis');
const util = require('util');

module.exports = {
    name: "score",
    description: "See the grade changes in a student",
    /**
     * Returns the student's overall score
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     * @param {course} course The ID of the course to be used
     * @param {student} student The ID of the student in the course
     * 
     */
    execute: function execute(auth, course, student){
        const classroom = google.classroom({version: 'v1', auth});
        var allsubs = classroom.courses.courseWork.studentSubmissions.list(
            {courseId: course},
            {courseWorkId: student}
        );
        console.log(util.inspect(allsubs))
    }
}