import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawNode } from '../components'
import AddNodeForm from './AddNodeForm';

/**
 * COMPONENT
 */
const Linkedlist = (props) => {

  const { nodes } = props

  // node:LinkedList {head: Node, tail: Node}...

  // create an array of linked list from 'nodes' class(object)

  const nodeArr = []; // initialize empty nodeArr.  important!
  let oldHead = nodes.head; // this is startpoint

  console.log('oldHead ', oldHead);

  // push nodes into arr until there is no more 'oldHead'
  while (oldHead !== null && oldHead !== undefined) {
    nodeArr.push(oldHead);
    oldHead = oldHead.next || null;
  }

  console.log('nodeArr ', nodeArr);

  return (


    <div>
      <div>
      <AddNodeForm />
      </div>
      <div className="container">
      {
        (nodeArr.map((node) => {
          return (
            <div className="basicnode" key={node.value}>
              {drawNode(node)}
              {console.log('node.value ', node.value)}
            </div>
          )
        }))

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

export default connect(mapState)(Linkedlist);
