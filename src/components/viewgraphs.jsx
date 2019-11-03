//import React, { Component } from 'react';
//import { ReactComponent } from '*.svg';

let React = require('react');
let Component = React.Component;
let CanvasJSReact = require('./canvasjs.react');
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

let dataPoints = [];

const Graphs = (props) => {
    // state = {  }
    let state = {
        // classroom: fetch("getStructure.execute(")
        classroom: [
            {
                id: 12312,
                myClassName: "Class mane",
                mentor: "Joe Mentor",
                students: [
                    {
                        student: "Billy Bob",
                        averageGrade: "94",
                        assignments: [
                            {
                                assignmentName: "homework 1",
                                assignmentGrade: 94
                            }
                        ]
                    },
                    {
                        student: "Billy Bob Joe",
                        averageGrade: "50",
                        assignments: [
                            {
                                assignmentName: "homework 1",
                                assignmentGrade: 50
                            }
                        ]
                    },
                    {
                        student: "John Bob Joe",
                        averageGrade: "120",
                        assignments: [
                            {
                                assignmentName: "homework 1",
                                assignmentGrade: 120
                            }
                        ]
                    }
                ]
            }
        ]
    }
    const avgGradeOfAll = () => {

        let titleParam = "Class' Average Grade Over Time";
        let graphTypeParam = "line";
        let xAxisUnit = "Assignment";
        let yAxisUnit = "Average Grade";
        let chart = this.chart;
        console.log("this didn't work :(");
        fetch(state)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                for (let i = 0; i < data.classroom.students.assigments.length; i++) {
                    let avgClassGrade = 0;
                    for (let j = 0; j < data.classroom.students.length; i++) {
                        avgClassGrade += data.classroom.students.assigments[i].assignmentGrade;
                    }
                    avgClassGrade = avgClassGrade / data.classroom.students.length;
                    dataPoints.push({
                        x: data.classroom.students.assigments[i].assignmentName,
                        y: avgClassGrade
                    });
                }
                chart.render();
            });
    }



    const options = {
        animationEnabled: true,
        theme: "light",
        title: {
            text: titleParam
        },
        axisX: {
            title: xAxisUnit,
        },
        axisY: {
            title: yAxisUnit,
        },
        data: [{
            type: graphTypeParam,
            yValueFormatString: "#,### Units",
            dataPoints: dataPoints
        }]
    }
    return (
        <div>
            <CanvasJSChart options={options}
                onRef={ref => this.chart = ref}
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
}



export default Graphs;



// gradeVStudentPS() {

//     let titleParam = "Student's Average Grade Over Time";
//     let graphTypeParam = "line";
//     let xAxisUnit = "Assignment";
//     let yAxisUnit = "Average Grade";
//     let chart = this.chart;
//     fetch("Our jason file")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             for (let i = 0; i < data.classroom.students.assignments.assignmentName.length; i++) {
//                 dataPoints.push({
//                     x: data.classroom.students.assignments[i].assignmentName,
//                     y: data.classroom.students.assignments[i].assignmentGrade
//                 });
//             }
//             chart.render();
//         });
// }

// avgGradeVsAssignment() {

//     let titleParam = "Average Grade Per Assignment";
//     let graphTypeParam = "column";
//     let xAxisUnit = "Assignment";
//     let yAxisUnit = "Average Grade";
//     let chart = this.chart;
//     fetch("Our jason file")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {

//             for (let i = 0; i < data.classroom.students.assignments.length; i++) {
//                 let avgAssignGrade = 0;
//                 for (let j = 0; j < data.classroom.students[j].length; i++) {
//                     avgAssignGrade += data.classroom.students[j].assignements[i].assignmentGrade;
//                 }
//                 avgAssignGrade = avgAssignGrade / data.classroom.students.length;
//                 dataPoints.push({
//                     x: data.classroom.students.assignments[i].assignmentName,
//                     y: avgGrade
//                 });
//             }
//             chart.render();
//         });
// }

// avgGradeVsClasses() {

//     let titleParam = "Average Grade Per Class";
//     let graphTypeParam = "column";
//     let xAxisUnit = "Class";
//     let yAxisUnit = "Average Grade";
//     let chart = this.chart;
//     fetch("Our jason file")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             for (let i = 0; i < data.classroom.length; i++) {
//                 let avgClassGrade = 0;
//                 for (let j = 0; j < data.classroom[i].students.length; j++) {
//                     avgClassGrade += data.classroom[i].students[j].averageGrade;
//                 }
//                 avgClassGrade = avgClassGrade / data.classroom[i].students;
//                 dataPoints.push({
//                     x: data.classroom[i].myClassName,
//                     y: avgClassGrade
//                 });
//             }
//             chart.render();
//         });
// };


// improtantn
// let chart = new CanvasJS.Chart("chartContainer", {
//     animationEnabled: true,
//     theme: "light",
//     title: {
//         text: titleParam
//     },
//       axisX: {
//         title: xAxisUnit,
//     },
//     axisY: {
//         title: yAxisUnit,
//     },
//     data: [{
//         type: graphTypeParam,
//         yValueFormatString: "#,### Units",
//         dataPoints: dataPoints
//     }]
// });

// $.getJSON(/*"How do i get this file from form.jsx lol?"*/"", addData);

// function gradeVStudentPS () {

//     let titleParam = "Student's Average Grade Over Time";
//     let graphTypeParam = "line";
//     let xAxisUnit = "Assignment";
//     let yAxisUnit = "Average Grade";
//     function addData(data) {
//         for (let i = 0; i < data.classroom.students.assignments.assignmentName.length; i++) {
//             dataPoints.push({
//                 x: data.classroom.students.assignments[i].assignmentName,
//                 y: data.classroom.students.assignments[i].assignmentGrade
//             });
//         }
//         chart.render();

//     }

// }

// function avgGradeVsAssignment () {

//     let titleParam = "Average Grade Per Assignment";
//     let graphTypeParam = "column";
//     let xAxisUnit = "Assignment";
//     let yAxisUnit = "Average Grade";
//     function addData(data) {
//         for (let i = 0; i < data.classroom.students.assignments.length; i++) {
//             let avgAssignGrade = 0;
//             for(let j = 0; j < data.classroom.students[j].length; i++){
//                 avgAssignGrade += data.classroom.students[j].assignements[i].assignmentGrade;
//             }
//             avgAssignGrade = avgAssignGrade / data.classroom.students.length;
//             dataPoints.push({
//                 x: data.classroom.students.assignments[i].assignmentName,
//                 y: avgGrade
//             });
//         }
//         chart.render();

//     }

// }

// function avgGradeVsClasses () {

//     let titleParam = "Average Grade Per Class";
//     let graphTypeParam = "column";
//     let xAxisUnit = "Class";
//     let yAxisUnit = "Average Grade";
//     function addData(data) {
//         for (let i = 0; i < data.classroom.length; i++) {
//             let avgClassGrade = 0;
//             for(let j = 0; j < data.classroom[i].students.length; j++) {
//                 avgClassGrade += data.classroom[i].students[j].averageGrade;
//             }
//             avgClassGrade = avgClassGrade / data.classroom[i].students;
//             dataPoints.push({
//                 x: data.classroom[i].myClassName,
//                 y: avgClassGrade
//             });
//         }
//         chart.render();

//     }

// }

// function avgGradeOfAll () {

//     let titleParam = "Class' Average Grade Over Time";
//     let graphTypeParam = "line";
//     let xAxisUnit = "Assignment";
//     let yAxisUnit = "Average Grade";
//     function addData(data) {
//         for (let i = 0; i < data.classroom.students.assigments.length; i++) {
//             let avgClassGrade = 0;
//             for(let j = 0; j < data.classroom.students.length; i++) {
//                 avgClassGrade += data.classroom.students.assigments[i].assignmentGrade;
//             }
//             avgClassGrade = avgClassGrade / data.classroom.students.length;
//             dataPoints.push({
//                 x: data.classroom.students.assigments[i].assignmentName,
//                 y: avgClassGrade
//             });
//         }
//         chart.render();

//     }

// }

// this function will make the graphs for all of the above functions (just call them lmao)
// function allGraphs () { 

//     gradeVStudentPS();
//     avgGradeVsAssignment();
//     avgGradeVsClasses();
//     avgGradeOfAll();

// }
