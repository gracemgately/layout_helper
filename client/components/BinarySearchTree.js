import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawNode } from '../components'
import AddBSTNodeForm from './AddBSTNodeForm';
import DeleteNodeForm from './DeleteNodeForm';
import bstNode from '../store';

/**
 * COMPONENT
 */
const BinarySearchTree = (props) => {


  return (


    <div>
      <h1> Binary Search Tree </h1>
      <div>
      <AddBSTNodeForm />
      <DeleteNodeForm />
      </div>
      <div className="container">
      {
        /*(nodeArr.map((node) => {
          return (
            <div className="basicnode" key={node.value}>
              {drawNode(node)}
              {console.log('node.value ', node.value)}
            </div>
          )
        }))*/

      }
      </div>
    </div>
  )


}


/*
 * CONTAINER
 */

const mapState = (state) => {
  console.log('state', state)
  return {
    nodes: state.node,
  }
}


// const mapDispatch = (state) => {
//   //console.log('here is state', state)
//   return {
//     values: state
//   }
// }

export default connect(mapState)(BinarySearchTree);
