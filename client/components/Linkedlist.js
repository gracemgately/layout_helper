import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawNode } from '../components'
import InsertNodeForm from './Forms/InsertNodeForm';
import DeleteNodeForm from './Forms/DeleteNodeForm';

/**
 * COMPONENT
 */
class Linkedlist extends Component {

  render() {

    const { nodes } = this.props;

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
            (nodeArr.map((node, index) => {
              return (
                <div className="basicnode" key={index}>
                  {drawNode(node)}
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
 // console.log('state', state)
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
