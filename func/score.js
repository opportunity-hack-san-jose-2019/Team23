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
        const allAssignments = classroom.courses.courseWork.list(
            {courseId:course}
        ); 
        var assignarr = [] //all assignment IDs
        Promise.all([allAssignments])
        .then(function(result){
            var sub = stuff.map ( (element) =>  classroom.courses.courseWork.studentSubmissions.list(
                {courseId: course, courseWorkId: element.id}));
Promise.all([sub])
            .then(function(result){
                subs.push(result.data);
                console.log(result[0].data.studentSubmissions[1].assignedGrade);
            });
            
        })
        

        // const allSubmissions = classroom.courses.courseWork.studentSubmissions.list(
        //     {courseId: course ,courseWorkId: assignarr}
        // )
        //get all the assignments
        //you wanna return the students grades
        //get all of a students assignments
        //allstud = all student submissions
        //then get grades for each submission and put it in a json file
        // Promise.all([allStud])
        // .then(function(result){ // pull all submissions into result
        //     console.log(result)
        // })
    }
}