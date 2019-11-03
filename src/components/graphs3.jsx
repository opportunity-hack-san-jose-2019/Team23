
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
