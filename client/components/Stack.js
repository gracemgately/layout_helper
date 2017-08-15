import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

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
                            <button type="click" onClick={(evt) => props.handlePeek(evt, nodeArr.length - 1)} > PEEK </button>
                        </div>
                    </form>
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
        </div>
    )
}

const mapState = (state) => {
    return {
        nodes: state.node,
        newNode: state.writeNode.newNode,
        highlightIndex: state.node.highlightIdx
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

        },
        handlePeek(evt, index){
            evt.preventDefault();
            console.log(index);
            dispatch(highlightNodeAtIndex(index));
        }
    }
}

export default connect(mapState, mapDispatch)(Stack);

