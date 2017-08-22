import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import { RightArrow, SouthEastArrow, SouthWestArrow } from '../components'




export const drawNode = (node, toggled, index, highlightIndex) => {
  console.log('toggled', toggled, index, highlightIndex);
  return (
    <div className={toggled === "true" ? "yellow" : "none" }>
    <svg>
      <circle  className={toggled === true && index === highlightIndex ? "yellow" : "none" } key={index} cx="25" cy="25" r="25"> </circle>

        <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf " strokeWidth="2px" dy=".3em">{node.value}</text>
      </svg>
      {(node.next !== null) ? RightArrow(node.value) : null}
    </div>
  );
}


export const drawBSTNode2 = (node, fill) => {
  console.log('githere', fill, node)
  const color = fill === 'yellow' ? 'yellow' : 'none';
  console.log('color', color);
  return (
    <div className="basicnode">
    {(node.left !== null) ? SouthWestArrow(node.value) : null}
      <svg>
        <circle className={color}  cx="25" cy="25" r="25"> </circle>
        <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf " strokeWidth="2px" dy=".3em">{node.value}</text>
      </svg>

      {(node.right !== null) ? SouthEastArrow(node.value) : null}
    </div>
  )
}


export const breadthFirstForEach = (node) => {
  var queue = [node];
  var collection = [];
  var tree;

  while (queue.length) {
    tree = queue.shift();
    // console.log("tree", tree);
    let level = treeLevel(tree);
    // console.log("LEVEL", level);
    if (node.value) collection.push([drawBSTNode2(tree), level]);

    if (tree.left) queue.push(tree.left)
    if (tree.right) queue.push(tree.right)
  }
  return collection;
}

function treeLevel(node) {
  var counter = 0;
  let parent = node.parent || null;
  while (parent !== null) {
    counter++;
    parent = parent.parent || null;
  }
  return counter;
}

const mapState = (state) => {
  return {
    toggled: state.node.toggledStatus
  }
}

export default connect(mapState, null)(drawNode);
