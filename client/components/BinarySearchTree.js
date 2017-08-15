import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawBSTNode } from '../components'
import AddBSTNodeForm from './AddBSTNodeForm';
import DeleteNodeForm from './DeleteNodeForm';
import bstNode from '../store';

/**
 * COMPONENT
 */
const BinarySearchTree = (props) => {
  //console.log('props', props);

  const { BST } = props

  return (

    <div>
      <h1> Binary Search Tree </h1>
      <div>
      <AddBSTNodeForm />
      <DeleteNodeForm />
      </div>
      <div className="container">
      {
          //drawBSTNode({value: 22, magnitude: 1, left: null, right: null})
          BST ? BST.breadthFirstForEach(drawBSTNode) : <div />

      }
      </div>
    </div>
  )


}


/*
 * CONTAINER
 */

const mapState = (state) => {
  //console.log('state', state);
  return {
    BST: state.bstNode.initialTree,
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
