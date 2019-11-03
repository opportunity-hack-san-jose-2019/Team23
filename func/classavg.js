module.exports = {
    name: "classavg",
    description: "Return the average score of the class",
    /**
     * Returns the student's overall score
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     * @param {course} course The ID of the course to be used
     * @param {student} assignment The ID of the assignment in the course
     * 
     */
    execute: function execute(auth, course, assignment){
        const classroom = google.classroom({version: 'v1', auth});
        const allStud = classroom.courses.courseWork.studentSubmissions.list(
            {courseId: course},
            {courseWorkId: assignment}
        );
        var sum = 0;
        var count = 0;
        allStud.forEach(element => {
            sum += element.studentSubmissions.assignedGrade;
            count += 1;
        });
        console.log(sum/count);
    }
}