import React, {Component} from 'react';
import {extent as d3ArrayExtent} from 'd3-array';
import {scaleLinear as d3ScaleLinear, scaleTime as d3ScaleTime} from 'd3-scale';
import {line as d3line} from 'd3-shape';
import {timeParse as d3TimeParse} from 'd3-time-format';

class LineChart extends Component {

    selectX(row){
        return d3TimeParse("%Y-%m-%d")(row.date);
    }

    selectY(row){
        return row.price;
    }

    render(){
        const data = this.props.data;
        const xScale = d3ScaleTime()
                .domain(d3ArrayExtent(data, this.selectX))
                .range([0, this.props.width]);
        const yScale = d3ScaleLinear()
                .domain(d3ArrayExtent(data, this.selectY))
                .range([this.props.height,0]);
        const line = d3line()
                .x((row) => {return xScale(this.selectX(row));})
                .y((row) => {return yScale(this.selectY(row));});
        const linepath = line(data);

        return (
            <svg
                className="container"
                height = {this.props.height+"px"}
                width = {this.props.width+"px"}>
                <g className="line">
                    <path d={linepath} stroke={this.props.color}/>
                </g>
            </svg>
        );
    }
}

export default LineChart;