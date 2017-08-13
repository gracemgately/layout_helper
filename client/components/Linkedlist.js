import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawNode } from '../components'
import AddNodeForm from './AddNodeForm';

/**
 * COMPONENT
 */
class Linkedlist extends Component {

  componentDidMount() {


  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.nodes !== nextProps.nodes || nextState.nodes !== this.state.nodes
  }

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

          // console.log('nodeArr ', nodeArr);


    return (
      <div>
        <div>
          <AddNodeForm />
        </div>
        <div className="container">
          {
            (nodeArr.map((node) => {
              return (
                <div key={node.value}>
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
