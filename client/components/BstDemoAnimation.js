import React, {Component} from 'react'
import * as d3 from 'd3'
import history from '../history'
import $ from "jquery";


const animate = () => {




    let hello = d3.select("body").selectAll(".democircle")
        .each(function (d, i) {
            d3.select(this).transition()
                .duration(250)
                .transition()
                .delay(1000 + i * 1000)
                .style("background-color", "red");

        })



}

export default class BstDemoAnimation extends Component {

    render() {

        return (

                <div>{animate()}</div>
        )
    }
}
