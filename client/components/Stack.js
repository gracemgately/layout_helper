import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { drawNode } from '../components'
import { writeNode, addNodeToTail, deleteNodeFromTail, searchNode } from '../store'



const Stack = (props) => {

    const { nodes } = props

    const nodeArr = []; // initialize empty nodeArr.  important!
    let oldHead = nodes.head; // this is startpoint


    // push nodes into arr until there is no more 'oldHead'
    while (oldHead !== null && oldHead !== undefined) {
      nodeArr.push(oldHead);
      oldHead = oldHead.next || null;
    }

    console.log('nodeArr', nodeArr);

    return (
        <div>
            <h1> Stack </h1>
            <div>
                <div>
                    <form id="form-group"  >
                        <div>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                placeholder="add item to stack"
                                name="node"
                            />
                        </div>
                        <br />
                        <div className="input-group-btn">
                            <button type="click" name="head" onClick={(evt) => props.handleTailSubmit(evt, props.newNode)} >Add Item to Stack</button>
                            <button type="click" name="tail" onClick={(evt) => props.handlePopSubmit(evt, nodeArr[nodeArr.length - 1])} > Pop Item Off Stack</button>
                            {/*<button type="click" onClick={(evt) => props.handleIndexSubmit(evt, props.newNode, props.index)} > PEEK </button>*/}
                        </div>
                    </form>
                </div>
                <div className="container">
                    {
                        (nodeArr.map((node) => {
                            return (
                                <div className="basicnode" key={node.value}>
                                    {drawNode(node)}
                                </div>
                            )
                        }))

                    }
                </div>
            </div>
        </div>
    )
}

const mapState = (state) => {
    console.log('state', state);
    return {
        nodes: state.node,
        newNode: state.writeNode.newNode,
    }
}

const mapDispatch = (dispatch) => {
    return {
    handleChange(evt) {
      dispatch(writeNode(Number(evt.target.value)));
    },
    handleTailSubmit(evt, nodeValue){
      evt.preventDefault();
      dispatch(addNodeToTail({ value: +nodeValue }))
      dispatch(writeNode(''))
    }, 
    handlePopSubmit(evt, lastNode) {
        evt.preventDefault();
        dispatch(deleteNodeFromTail());

      }
    }
}

export default connect(mapState, mapDispatch)(Stack);

