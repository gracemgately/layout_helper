import * as d3 from 'd3'

export const drawD3Lines = () => {


  var circle = d3.select("body").selectAll("circle")

  circle.style("fill", "steelblue");
  circle.attr("r", 30);


  console.log('circle ', circle);


  // let x = document.getElementById("0");
  // console.log('x ', x)
  // if (x) x.innerHTML = "Hello World";

  // let k = document.getElementById("1");
  // console.log('k ', k)
  // if (k) k.innerHTML = "Hello World";

  // let z = document.getElementById("2");
  // console.log('z ', z)
  // if (z) x.innerHTML = "Hello World";


}
