const {google} = require('googleapis');
module.exports = {
    name: "grades",
    description: "Return the grades of a student",
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
        // const works = classroom.courses.courseWork.list(
        //     {courseId:course},
        // ).then(function(result){
        //     console.log(result.data);
        // })
        const allwork = classroom.courses.courseWork.list(
            {courseId:course}
        )
        const stu = classroom.courses.students.get(
            {courseId:course, userId:student}
        )
        (allwork && stu).then(function(result){
            console.log(allwork)
            console.log(stu)
        })
        // const assignmentData = classroom.courses.courseWork.get(
        //     {id: assignment, courseId:course}
        // ).then(function(result){
        //     console.log(result.data)
        // })
        return;
    }
}