import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import { UpArrow, DownArrow, RightArrow, SouthEastArrow, SouthWestArrow } from '../components'
import {removeEmptyChildren} from '../utils'

export const drawNode = (node, fill = "none") => {
  return (
    <div className="basicnode">
    <svg>
      <circle fill={fill} className="circle1" cx="25" cy="25" r="25"> </circle>

        <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf " strokeWidth="2px" dy=".3em">{node.value}</text>
      </svg>
      {(node.next !== null) ? RightArrow(node.value) : null}
    </div>
  );
}

export const drawQueueNode = (node, fill = "none") => {
  return (
    <div className="queue-container">
      <div className="basicnode">
        <svg>
          <circle fill={fill} className="circle1" cx="25" cy="25" r="25"> </circle>

          <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf " strokeWidth="2px" dy=".3em">{node.value}</text>
        </svg>
      </div>
      <div id="down-arrow">
        {(node.next !== null) ? DownArrow(node.value) : null}
      </div>
    </div>
  );
}

export const drawStackNode = (node, fill = "none") => {
  return (
    <div className="queue-container">
      <div id="down-arrow">
        {(node.next !== null) ? DownArrow(node.value) : null}
      </div>
      <div className="basicnode">
        <svg>
          <circle fill={fill} className="circle1" cx="25" cy="25" r="25"> </circle>

          <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf " strokeWidth="2px" dy=".3em">{node.value}</text>
        </svg>
      </div>
    </div>
  );
}


export const drawBSTNode2 = (node, fill = 'none') => {
  console.log('githere', fill, node.value)
  return (
    <div className="basicnode">
    {(node.left !== null) ? SouthWestArrow(node.value) : null}
      <svg>
        <circle className="circle1" fill={fill} cx="25" cy="25" r="25"> </circle>
        <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf " strokeWidth="2px" dy=".3em">{node.value}</text>
      </svg>

      {(node.right !== null) ? SouthEastArrow(node.value) : null}
    </div>
  )
}

export const drawBSTNode3 = (node, idx) => {

  console.log('node in drawBSTNode3 ', node)
  console.log('idx in drawBSTNode3 ', idx)
  if (!node.value) {
    return (
      <div className="basicnode">
      <svg>
      <circle className="circle-empty" fill="none" cx="25" cy="25" r="25"> </circle>
      <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf " strokeWidth="2px" dy=".3em"></text>
    </svg>
      </div>
    )
  }

  return (
    <div className="basicnode">
    {(node.left !== null) ? SouthWestArrow(node.value) : null}
    <svg id={idx}>
        <circle className="circle1" fill="none" cx="25" cy="25" r="25"> </circle>
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


// takes user bst and calls drawBST() to render the nodes in full tree form
export const userBST = (cleanbst) => {

  cleanbst = removeEmptyChildren(cleanbst);
  const collection = [];

  cleanbst.map( (node, idx) => {
    let parentIdx = node.parent;
    if (node.parent === null) parentIdx = "root";
    collection.push([drawBSTNode3(node, idx), parentIdx]);
  })

  return collection;
}


// takes user bst and calls drawBST() to render the nodes in full tree form
export const drawBSTnodes = (cleanbst) => {

    cleanbst = removeEmptyChildren(cleanbst);
    const collection = [];

    cleanbst.map( (node, idx) => {
      let parentIdx = node.parent;
      if (node.parent === null) parentIdx = "root";
      collection.push([drawBSTNode3(node, idx), parentIdx]);
    })

    return collection;
  }
