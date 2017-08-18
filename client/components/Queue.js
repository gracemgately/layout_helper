import React, { Component } from 'react'
import { connect } from 'react-redux'
import { drawNode } from '../components'
import QueueForm from './Forms/QueueForm';
import SaveLLForm from './Forms/SaveLLForm';
import { nodeArray_ } from '../utils'

/**
 * COMPONENT
 */
class Queue extends Component {

  render() {

    const { user, nodes, highlightIndex } = this.props;
    
    const nodeArr = (this.props.location.query) ? (this.props.location.query) : (nodeArray_(nodes));

    return (
      <div>
        <h2> Queue </h2>
        <div>
          <QueueForm nodeArray={nodeArr} />
        {user.id ? <SaveLLForm type={'queues'} content={nodeArr} user={user}/> : null}
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
    user: state.user,
    nodes: state.node,
    highlightIndex: state.node.highlightIdx,
  }
}




export default connect(mapState)(Queue);
