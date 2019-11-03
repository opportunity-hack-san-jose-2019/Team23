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
        // the works
        const allwork = classroom.courses.courseWork.list(
            {courseId:course}
        )
        // the student
        const stu = classroom.courses.students.get(
            {courseId:course, userId:student}
        )
        var assigns = [];
        Promise.all([allwork])
        .then(function(result){
            result.forEach(element =>{
                assigns.push(classroom.courses.courseWork.studentSubmissions.list(
                    {courseId: course, courseWorkId: element.data}
                ))
            })
            
        })
        Promise.all([allwork, stu, assigns])
        .then(function(result){
            works = result[0].data.courseWork
            stud = result[1].data.profile.name.fullName
            assigns = result[2].data
            console.log(assigns)
            console.log(works)
            console.log(stud)
        })
        return;
    }
}