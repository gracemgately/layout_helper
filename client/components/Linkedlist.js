import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawNode} from '../components'
import InsertNodeForm from './Forms/InsertNodeForm';
import DeleteNodeForm from './Forms/DeleteNodeForm';
import SaveLLForm from './Forms/SaveLLForm';
import { nodeArray_ } from '../utils'


/**
 * COMPONENT
 */
class Linkedlist extends Component {
  
  render() {

    const { nodes, user } = this.props;
    // node:LinkedList {head: Node, tail: Node}...

    const nodeArr = nodeArray_(nodes)

    return (
      <div>
        <h1> Linked List </h1>
        <div className='formDisplay'>
          <InsertNodeForm />
          <DeleteNodeForm />
          {user.id ? <SaveLLForm content={nodeArr} user={user}/> : null}
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
    user: state.user
  }
}


export default connect(mapState, null)(Linkedlist);
