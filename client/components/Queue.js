import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawNode } from '../components'
import QueueForm from './QueueForm';
import DeleteNodeForm from './DeleteNodeForm';

/**
 * COMPONENT
 */
class Queue extends Component {
  constructor(){
    super(props);
    this.state = {
      queue: []
    }
  }

  render() {

    const { nodes } = this.props;
    const nodeArr = [];
    let oldHead = nodes.head; // this is startpoint

    while (oldHead !== null && oldHead !== undefined) {
      nodeArr.push(oldHead);
      oldHead = oldHead.next || null;
    }
    return (
      <div>
        <h1> Queue </h1>
        <div>
          <QueueForm />
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
  return {
    nodes: state.node,
  }
}


export default connect(mapState)(Queue);
