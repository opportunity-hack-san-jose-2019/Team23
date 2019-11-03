const {google} = require('googleapis');

module.exports = {
    name: "classroom",
    description: "Return JSON file of the entire classroom",
    /**
     * Returns the student's overall score
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     * @param {course} course The ID of the course to be used
     * 
     */
    execute: function execute(auth, course){
        const classroom = google.classroom({version: 'v1', auth});
        const teachers = classroom.courses.teachers.list({courseId:course})
            .then(function(result){
                console.log("Teacher: ")
                allTeachers = result.data.teachers;
                allData = [];
                allTeachers.forEach(element => {
                    element = element.profile.name.fullName;
                    allData.push(element);
                });
                console.log(JSON.stringify({"teachers": allData}))
                return JSON.stringify({"teachers": allData});
            });
        
    }
}