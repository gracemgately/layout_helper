import React, {Component} from 'react'
import * as d3 from 'd3'
import history from '../history'
import $ from "jquery";


export const animate = () => {


    let hello = d3.select("body").selectAll(".democircle")
    .each(function (d, i) {
        d3.select(this).transition()
            .duration(250)
            .transition()
            .delay(1000 + this.firstChild.innerHTML * 500)
            .style("background-color", "red")

        console.log('this', this)

        console.log('this.firstChild.innerHTML', this.firstChild.innerHTML)
        let val = this.firstChild.innerHTML;

    })


}

export const deanimate = () => {


        let hello = d3.select("body").selectAll(".democircle")
                .style("background-color", "pink")





    }

export default class BstDemoAnimation extends Component {



    render() {

        console.log('bstdemoanimation is called');

        return (
            <div>
            <div>{deanimate()}</div>
            <div>{animate()}</div>
                </div>
        )
    }
}
