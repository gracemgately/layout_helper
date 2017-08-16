import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import StackForm from './Forms/StackForm'

import { drawNode } from '../components'
import { writeNode, addNodeToTail, deleteNodeFromTail, searchNode, highlightNodeAtIndex } from '../store'



const Stack = (props) => {

    const { nodes, highlightIndex } = props

    const nodeArr = []; // initialize empty nodeArr.  important!
    let oldHead = nodes.head; // this is startpoint


    // push nodes into arr until there is no more 'oldHead'
    while (oldHead !== null && oldHead !== undefined) {
        nodeArr.push(oldHead);
        oldHead = oldHead.next || null;
    }

    return (
        <div>
            <h1> Stack </h1>
            <div><StackForm nodeArr={nodeArr} /></div>

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
    nodes: state.node,
    highlightIndex: state.node.highlightIdx,
  }
}




export default connect(mapState)(Stack);
