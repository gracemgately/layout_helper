import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import StackForm from './Forms/StackForm'

import { drawNode } from '../components'
import { writeNode, addNodeToTail, deleteNodeFromTail, searchNode, highlightNodeAtIndex } from '../store'

import SaveLLForm from './Forms/SaveLLForm';
import { nodeArray_ } from '../utils';


const Stack = (props) => {

    const { user, nodes, highlightIndex } = props

    const nodeArr = (props.location.query) ? (props.location.query) : (nodeArray_(nodes));

    return (
        <div>
            <h2> Stack </h2>
            <div><StackForm nodeArr={nodeArr} /></div>
             {user.id ? <SaveLLForm type={'stacks'} content={nodeArr} user={user}/> : null}
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

export default connect(mapState)(Stack);
