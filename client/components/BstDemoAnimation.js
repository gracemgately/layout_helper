import React, {Component} from 'react'
import * as d3 from 'd3'
import history from '../history'
import $ from "jquery";


const animate = () => {

    d3.select("body").selectAll(".democircle")
    .each(function (d, i) {
        d3.select(this).transition()
            .duration(250)
            .transition()
            .delay(1000 + this.firstChild.innerHTML * 500)
            .style("background", "orange")

    })

}

const deanimate = () => {

    d3.select("body").selectAll(".democircle")
        .style("background", "yellow")


}

export default class BstDemoAnimation extends Component {

    render() {
        return (
            <div>
                <div>{deanimate()}</div>
                <div>{animate()}</div>
            </div>
        )
    }
}
