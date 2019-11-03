//import React, { Component } from 'react';
//import { ReactComponent } from '*.svg';

import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let dataPoints = [];


// classroom: [
//     {
//         id: 12312,
//         myClassName: "Class mane",
//         mentor: "Joe Mentor",
//         students: [
//             {
//                 student: "Billy Bob",
//                 averageGrade: "94",
//                 assignments: [
//                     {
//                         assignmentName: "homework 1",
//                         assignmentGrade: 94
//                     }
//                 ]
//             },
//             {
//                 student: "Billy Bob Joe",
//                 averageGrade: "50",
//                 assignments: [
//                     {
//                         assignmentName: "homework 1",
//                         assignmentGrade: 50
//                     }
//                 ]
//             },
//             {
//                 student: "John Bob Joe",
//                 averageGrade: "120",
//                 assignments: [
//                     {
//                         assignmentName: "homework 1",
//                         assignmentGrade: 120
//                     }
//                 ]
//             }
//         ]
//     }
// ]

function graph1(props) {
    const options = {
        title: {
            text: "Basic Column Chart in React"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Apple", y: 10 },
                { label: "Orange", y: 15 },
                { label: "Banana", y: 25 },
                { label: "Mango", y: 30 },
                { label: "Grape", y: 28 }
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
function graph2(props) {
    const options = {
        title: {
            text: "Basic Column Chart in React"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Chicken", y: 10 },
                { label: "Alfredo", y: 15 },
                { label: "Chicken", y: 25 },
                { label: "Alfredo", y: 30 },
                { label: "hahah", y: 28 }
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
function graph3(props) {
    const options = {
        title: {
            text: "Basic Column Chart in React"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "no link", y: 10 },
                { label: "i wish this worked", y: 15 },
                { label: "scik", y: 25 },
                { label: "ifwo", y: 30 },
                { label: "asdfasd", y: 28 }
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
function graph4(props) {
    const options = {
        title: {
            text: "Basic Column Chart in React"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "mane", y: 10 },
                { label: "nei thry", y: 15 },
                { label: "looordie", y: 25 },
                { label: "yes", y: 30 },
                { label: "ok", y: 28 }
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
const Graphs = (props) => {

    return ({
        var a = 10;

        if(a === 16) {
        return ({
            graph1,
            graph2,
            graph3,
            graph4
        });

    }
    if (a === 15) {

    }
    if (a === 14) {

    }
    if (a === 13) {

    }
    if (a === 12) {

    }
    if (a === 11) {

    }
    if (a === 10) {
        return ({
            graph1(props)
                graph3(props)
        });
    }
    if (a === 9) {

    }
    if (a === 8) {

    }
    if (a === 7) {

    }
    if (a === 6) {

    }
    if (a === 5) {

    }
    if (a === 4) {

    }
    if (a === 3) {

    }
    if (a === 2) {

    }
    if (a === 1) {

    }


});

    }
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
