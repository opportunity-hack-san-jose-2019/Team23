const {google} = require('googleapis');
module.exports = {
    name: "classavg",
    description: "Return the average score of the class for one assignment",
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
            {courseId:course, courseWorkId:assignment}
        ); //pull submissions
        var count = 0;
        var sum = 0;
        Promise.all([allStud])
        .then(function(result){ // pull all submissions into result
            result.forEach(element => { //pull student submission but really only runs once
                allSubs = element.data.studentSubmissions;
                
                allSubs.forEach(element2 => { //add the submissions
                    sum += element2.draftGrade;
                    count += 1;
                });
                avg = sum/count
                console.log(JSON.stringify({"average":avg}))
                return JSON.stringify({"average": avg})
            });
        })
    }
}