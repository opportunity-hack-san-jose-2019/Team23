//import React, { Component } from 'react';
//import { ReactComponent } from '*.svg';

import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let datapoints = [];


class Graphs4 extends Component {



    render() {
        const options = {
            theme: "dark2",
            title: {
                text: "Average grade of the class over time"
            },
            axisX: {
                title: "Assignment Number"
            },
            axisY: {
                title: "Average Grade"
            },
            data: [{
                type: "spline",
                visible: true,
                name: "Classroom 1",
                dataPoints: [
                    { label: 1, y: 90 },
                    { label: 2, y: 85 },
                    { label: 3, y: 85 },
                    { label: 4, y: 90 },
                    { label: 5, y: 85 }
                ]
            }, {
                type: "spline",
                visible: true,
                name: "Classroom 2",
                dataPoints: [
                    { label: 1, y: 28 },
                    { label: 2, y: 30 },
                    { label: 3, y: 25 },
                    { label: 4, y: 15 },
                    { label: 5, y: 10 }
                ]
            }, {
                type: "spline",
                visible: true,
                name: "Classroom 3",
                dataPoints: [
                    { label: 1, y: 40 },
                    { label: 2, y: 41 },
                    { label: 3, y: 39 },
                    { label: 4, y: 45 },
                    { label: 5, y: 50 }
                ]
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef = {ref => this.chart = ref} */
                />
            </div>
        );
    }
}

export default Graphs4;
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
