
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
}

export default Graphs3;
