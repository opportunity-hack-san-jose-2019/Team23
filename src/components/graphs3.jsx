
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
                    { label: "Class 1", y: 90 },
                    { label: "Class 2", y: 95 },
                    { label: "Class 3", y: 80 },
                    { label: "Class 4", y: 75 },
                    { label: "Class 5", y: 88 }
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
