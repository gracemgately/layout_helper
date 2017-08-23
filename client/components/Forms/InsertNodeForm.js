//LIBRARIES
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

//UTILS & STORE
import { writeNode, writeIndex, addNodeToTail, addNodeToHead, searchNode } from '../../store'

const InsertNodeForm = (props) => {
//added individual handleSubmit functions for inserting at head and at tail
  return (
    <div>
    Add a Node:
      <form id="form-group">
        <div>
          <input
            type="text"
            onChange={props.handleChange}
            placeholder="add a node"
            name="node"
            value={props.newNode}
          />   
          <br/>       
          <button className="buttonstyle" type="click" name="head" onClick={(evt) => props.handleHeadSubmit(evt, props.newNode)} >Add Node to <br/> Head</button>
          <button className="buttonstyle" type="click" name="tail" onClick={(evt) => props.handleTailSubmit(evt, props.newNode)} > Add Node to <br/> Tail</button>
        </div>
        <br/>
        <div>
          <input
            type="text"
            onChange={props.handleIdxChange}
            placeholder="specify index.."
            name="index"
          />
        <br />
        <button className="buttonstyle" type="click" onClick={(evt) => props.handleIndexSubmit(evt, props.newNode, props.index)} > Add at specific index</button>
        </div>
      </form>
    </div>
  )
}

//newNode is mounted off writeNode in the reducer
const mapState = (state) => {
  return {
    nodes: state.node,
    newNode: state.writeNode.newNode,
    index: state.writeNode.index
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange(evt) {
      dispatch(writeNode(Number(evt.target.value)));
    },
    handleIdxChange(evt) {
      dispatch(writeIndex(Number(evt.target.value)));
    },
    handleHeadSubmit(evt, nodeValue) {
      evt.preventDefault();
      dispatch(addNodeToHead({ value: +nodeValue }))
      dispatch(writeNode(''))
    },
    handleTailSubmit(evt, nodeValue){
      evt.preventDefault();
      dispatch(addNodeToTail({ value: +nodeValue }))
      dispatch(writeNode(''))
    },
    handleIndexSubmit(evt, nodeValue, index){
      evt.preventDefault();
      dispatch(searchNode({ value: +nodeValue, index: +index }))
      dispatch(writeNode(''))
    }
  }
}

export default connect(mapState, mapDispatch)(InsertNodeForm);
