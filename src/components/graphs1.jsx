
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let dataPoints = [];


class Graphs1 extends Component {



    render() {

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
}

export default Graphs1;

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
