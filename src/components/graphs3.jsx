
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let dataPoints = [];


class Graphs3 extends Component {



    render() {
        const options = {
            title: {
                text: "Average Grade per Class"
            },
            axisX: {
                title: "Class"
            },
            axisY: {
                title: "Average Grade"
            },
            data: [{
                type: "column",
                dataPoints: [
                    { label: "Class 1", y: 10 },
                    { label: "Class 2", y: 15 },
                    { label: "Class 3", y: 25 },
                    { label: "Class 4", y: 30 },
                    { label: "Class 5", y: 28 }
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

export default Graphs3;

// function graph1(props) {
//     const options = {
//         title: {
//             text: "Basic Column Chart in React"
//         },
//         data: [{
//             type: "column",
//             dataPoints: [
//                 { label: "Apple", y: 10 },
//                 { label: "Orange", y: 15 },
//                 { label: "Banana", y: 25 },
//                 { label: "Mango", y: 30 },
//                 { label: "Grape", y: 28 }
//             ]
//         }]
//     }

//     return (
//         <div>
//             <CanvasJSChart options={options}
//             /* onRef = {ref => this.chart = ref} */
//             />
//         </div>
//     );
// }
// function graph2(props) {
//     

//     return (
//         <div>
//             <CanvasJSChart options={options}
//             /* onRef = {ref => this.chart = ref} */
//             />
//         </div>
//     );
// }
// function graph3(props) {
//     const options = {
//         title: {
//             text: "Basic Column Chart in React"
//         },
//         data: [{
//             type: "column",
//             dataPoints: [
//                 { label: "no link", y: 10 },
//                 { label: "i wish this worked", y: 15 },
//                 { label: "scik", y: 25 },
//                 { label: "ifwo", y: 30 },
//                 { label: "asdfasd", y: 28 }
//             ]
//         }]
//     }

//     return (
//         <div>
//             <CanvasJSChart options={options}
//             /* onRef = {ref => this.chart = ref} */
//             />
//         </div>
//     );
// }