import React, { Component } from 'react'
import { connect } from 'react-redux'
import { drawNode } from '../components'
import QueueForm from './Forms/QueueForm';

/**
 * COMPONENT
 */
class Queue extends Component {

  render() {

    const { nodes, highlightIndex } = this.props;
    const nodeArr = [];
    let oldHead = nodes.head; // this is startpoint

    while (oldHead !== null && oldHead !== undefined) {
      nodeArr.push(oldHead);
      oldHead = oldHead.next || null;
    }

    return (
      <div>
        <h2> Queue </h2>
        <div>
          <QueueForm nodeArray={nodeArr} />
        </div>
        <div className="container">
          {
            (nodeArr.map((node, index) => {
              var highlight = (index === highlightIndex) ? "yellow" : "none"
              return (
                <div className="basicnode" key={index}>
                  {drawNode(node, highlight)}
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
  return {
    nodes: state.node,
    highlightIndex: state.node.highlightIdx,
  }
}




export default connect(mapState)(Queue);
