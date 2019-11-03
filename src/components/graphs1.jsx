
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let dataPoints = [];


class Graphs1 extends Component {
    render() {
        const options = {
            animationEnabled: true,
            axisY: {
                title: "Score",
            },
            axisX: {
                title: "Assignments",
            },
            title: {
                text: "Grade of assignments"
            },
            data: [{
                type: "column",
                dataPoints: [
                    { label: "HW 1", y: 80 },
                    { label: "HW 2", y: 85 },
                    { label: "HW 3", y: 95 },
                    { label: "HW 4", y: 90 },
                    { label: "HW 5", y: 98 }
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

