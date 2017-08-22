import React, {Component} from 'react'
import {Router} from 'react-router'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as d3 from 'd3'
import history from '../history'
import $ from "jquery";


const animate = () => {


    var circle = d3.select("body").selectAll("circle")

      circle.style("fill", "steelblue");
      circle.attr("r", 30);


      console.log('circle ', circle);

   // ----------------------


              //Make an SVG Container
var svgContainer = d3.select("body").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);

 //Draw the line
 var circleeee = svgContainer.append("line")
                          .attr("x1", 5)
                          .attr("y1", 5)
                         .attr("x2", 50)
                         .attr("y2", 50)
                         .attr("stroke-width", 2)
                         .attr("stroke", "black");



}

export default class D3render extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     timeblocks: []
        // };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {

    }

    render() {

        return (
            <div className="center">
                <div>{animate()}</div>

            </div>
        )
    }
}
