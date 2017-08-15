import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawBSTNode, breadthFirstForEach } from '../components'
import AddBSTNodeForm from './AddBSTNodeForm';
import DeleteNodeForm from './DeleteNodeForm';
import bstNode from '../store';

/**
 * COMPONENT
 */
const BinarySearchTree = (props) => {
  //console.log('props', props);

  const { BST } = props
console.log("BST", BST)
  return (

    <div>
      <h1> Binary Search Tree </h1>
      <div>
      <AddBSTNodeForm />
      <DeleteNodeForm />
      </div>
      <div className="container">
      {
        breadthFirstForEach(BST)
          //drawBSTNode({value: 22, magnitude: 1, left: null, right: null})
          /*BST ? BST.(drawBSTNode) : <div />*/

      }
      </div>
    </div>
  )


}


/*
 * CONTAINER
 */

const mapState = (state) => {
  console.log('state', state);
  return {
    BST: state.bstNode,
    NodeCount: state.bstNode.BSTNodeCount
  }
}

// const mapDispatch = (state) => {
//   //console.log('here is state', state)
//   return {
//     values: state
//   }
// }

export default connect(mapState, null)(BinarySearchTree);
