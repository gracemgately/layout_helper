import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { writeNode, addNodeToTail, addNodeToHead, searchNode } from '../store'

const InsertNodeForm = (props) => {
//added individual handleSubmit functions for inserting at head and at tail
  return (
    <div>
      <form id="form-group"  >
        <div>
          <input
            type="text"
            onChange={props.handleChange}
            placeholder="add a node"
            name="node"
            value={props.newNode}
          />
        </div>
        <br />
        <div className="input-group-btn">
          <button type="click" name="head" onClick={(evt) => props.handleHeadSubmit(evt, props.newNode)} >Add Node to Head</button>
          <button type="click" name="tail" onClick={(evt) => props.handleTailSubmit(evt, props.newNode)} > Add Node to Tail</button>
          <button type="click" onClick={(evt) => props.handleSearchSubmit(evt, props.newNode)} > Search Node</button>
        </div>
      </form>
    </div>
  )
}

//newNode is mounted off writeNode in the reducer
const mapState = (state) => {
  return {
    nodes: state.node,
    newNode: state.writeNode.newNode
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange(evt) {
      //console.log('event target ', evt.target.value);
      dispatch(writeNode(Number(evt.target.value)));
    },
    handleHeadSubmit(evt, nodeValue) {

      evt.preventDefault();
      dispatch(addNodeToHead({ value: +nodeValue }))
      //type coerced nodeValue to a number
      dispatch(writeNode(''))
    },
    handleTailSubmit(evt, nodeValue){
      evt.preventDefault();
      dispatch(addNodeToTail({ value: +nodeValue }))
      dispatch(writeNode(''))
    },
    handleSearchSubmit(evt, nodeValue){
      evt.preventDefault();
      dispatch(searchNode({ value: +nodeValue }))
      dispatch(writeNode(''))
    }
  }
}

export default connect(mapState, mapDispatch)(InsertNodeForm);
