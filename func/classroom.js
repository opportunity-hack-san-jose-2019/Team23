const {google} = require('googleapis');
const util = require('util');

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
        const courseinfo = classroom.courses.get({id:course})
            .then(function(result){
                console.log("Classroom: ");
                console.log(JSON.stringify({"classroom":result.data.name}));
                console.log(util.inspect(result.data))
                return JSON.stringify({"classroom":result.data.name});
            });
        
    }
}