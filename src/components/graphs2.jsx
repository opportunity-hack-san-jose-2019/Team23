
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let dataPoints = [];


class Graphs2 extends Component {
    render() {
        const options = {
            animationEnabled: true,
            theme:"dark2",
            axisY: {
                title: "Score",
            },
            axisX: {
                title: "Assignments",
            },
            title: {
                text: "average grade of an assignment (classrooms)"
            },
            data: [{
                type: "column",
                dataPoints: [
                    { label: "HW 1", y: 83 },
                    { label: "HW 2", y: 85 },
                    { label: "HW 3", y: 87 },
                    { label: "HW 4", y: 91 },
                    { label: "HW 5", y: 94 }
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


export default Graphs2;

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
