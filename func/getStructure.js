const { google } = require('googleapis');
// const util = require('util');


module.exports = {
    name: "getStructure",
    description: "Return JSON file of the entire classroom",
    /**
     * Returns structure of the classroom
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     * @param {course} course The ID of the course to be used
     * 
     */
    execute: function execute(auth, course) {
        const classroom = google.classroom({ version: 'v1', auth });
        const courseinfo = classroom.courses.get({ id: course });
        var classname = "";
        var mentors = "";
        var student = [];
        const stud = classroom.courses.students.list({ courseId: course })
            .then(function (result) {
                // console.log("Students")
                var allStudents = result.data.students
                allStudents.forEach(element => {
                    element = element.profile
                    student.push(element.name.fullName)
                    // element = element.profile.id
                    // console.log(element)
                });
                // console.log(JSON.stringify({"students": allData}))
            }
            );

        const allWork = classroom.courses.courseWork.list(
            { courseId: course }
        ); //coursework
        var totalPoints = 0; //total possible points in the course

        Promise.all([allWork])
            .then(function (result) {
                result = result[0].data.courseWork
                // console.log(result)
                result.forEach(element => {
                    totalPoints += element.maxPoints
                });
                // console.log(totalPoints)
            })

        const teachers = classroom.courses.teachers.list({ courseId: course })
            .then(function (result) {
                var allTeachers = result.data.teachers;
                var allData = [];
                allTeachers.forEach(element => {
                    element = element.profile.name.fullName;
                    allData.push(element);
                });
                mentors = allData
                // console.log(JSON.stringify({"teachers": allData}))
            });

        const setClassname = classroom.courses.get({ id: course })
            .then(function (result) {
                classname = result.data.name;
                // console.log(JSON.stringify({"classroom":result.data.name}));
            });


        Promise.all([courseinfo, setClassname, teachers, stud])
            .then(function (result) {
                // console.log(classname.toString())
                // console.log(mentors)
                // console.log(student)
                let classroom = {
                    className: classname,
                    mentor: mentors,
                    students: student
                }
                console.log(JSON.stringify(classroom));
                return JSON.stringify(classroom);
            })
    }
}