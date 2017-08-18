import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import { RightArrow, SouthEastArrow, SouthWestArrow } from '../components'
import { removeEmptyChildren } from '../utils'

export const drawNode = (node, fill="none") => {
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


export const drawBSTNode2 = (node) => {
  return (
    <div className="basicnode">
    {(node.left !== null) ? SouthWestArrow(node.value) : null}
      <svg>
        <circle className="circle1" fill="none" cx="25" cy="25" r="25"> </circle>
        <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf " strokeWidth="2px" dy=".3em">{node.value}</text>
      </svg>

      {(node.right !== null) ? SouthEastArrow(node.value) : null}
    </div>
  )
}

export const drawBSTNode3 = (node) => {

  console.log('node in drawBSTNode3 ', node);

  if (!node.value) {
    return (
      <div className="basicnode">
      <svg>
      <circle className="circle-empty" fill="none" cx="25" cy="25" r="25"> </circle>
      <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf " strokeWidth="2px" dy=".3em">empty</text>
    </svg>
      </div>
    )
  }

  return (
    <div className="basicnode">
    {(node.left !== null) ? SouthWestArrow(node.value) : null}
      <svg>
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
export const userBST = () => {

  // work with preformatted testArr -> field name quotes removed manually "value"
  let testArr = [
    {
    value: 5,
    left: 1,
    right: 2,
    parent: null
    },
    {
    value: 2,
    left: 3,
    right: 4,
    parent: 0
    },
    {
    value: 50,
    left: 5,
    right: 6,
    parent: 0
    },
    {
    left: 7,
    right: 8,
    parent: 1
    },
    {
    left: 9,
    right: 10,
    parent: 1
    },
    {
    value: 40,
    left: 11,
    right: 12,
    parent: 2
    },
    {
    value: 100,
    left: 13,
    right: 14,
    parent: 2
    }
    ]

  console.log('userBST is called with this arr ', testArr);



  testArr = removeEmptyChildren(testArr);
  const collection = [];

  testArr.map(node => {
    console.log('node in testArr in userBST ', node);
    let parentIdx = node.parent;
    if (node.parent === null) parentIdx = "root";
    collection.push([drawBSTNode3(node), parentIdx]);
  })

  return collection;
}

