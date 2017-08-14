import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawNode } from '../components'
import InsertNodeForm from './InsertNodeForm';
import DeleteNodeForm from './DeleteNodeForm';

/**
 * COMPONENT
 */
class Linkedlist extends Component {

  render() {

    const { nodes } = this.props;
    console.log('Nodes in linkedlist ', nodes);

    // node:LinkedList {head: Node, tail: Node}...

    // create an array of linked list from 'nodes' class(object)

    const nodeArr = []; // initialize empty nodeArr.  important!
    let oldHead = nodes.head; // this is startpoint


    // push nodes into arr until there is no more 'oldHead'
    while (oldHead !== null && oldHead !== undefined) {
      nodeArr.push(oldHead);
      oldHead = oldHead.next || null;
    }
    return (
      <div>
        <h1> Linked List </h1>
        <div>
          <InsertNodeForm />
          <DeleteNodeForm />
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


// const mapDispatch = (dispatch) => {

// return {
//   values: state
// }
// }

export default connect(mapState)(Linkedlist);
