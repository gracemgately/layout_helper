import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { writeNode, addNodeToTail, addNodeToHead } from '../store'

const InsertNodeForm = (props) => {

  return (
    <div>
      <form id="form-group" onSubmit={props.handleSubmit}>
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
          <button type="submit" name="head" onClick={props.handleSubmit}>Add Node to Head</button>
          <button type="submit" name="tail"> Add Node to Tail</button>
        </div>
      </form>
    </div>
  )
}

const mapState = (state) => {
  return {
    nodes: state.node,
    newNode: state.newNode
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange(evt) {
      console.log('event target ', evt.target.value);
      dispatch(writeNode(Number(evt.target.value)));
    },
    handleSubmit(evt) {
      evt.preventDefault();
      const position = event.target.name;
      // console.log('new node', this.props);
      //const nodeValue = Number(evt.target.node.value);

      if (position === "head") {
        dispatch(addNodeToHead({ value: nodeValue }))
      } else {
        dispatch(addNodeToTail({ value: nodeValue }))
      }
      dispatch(writeNode(''))

    }
  }
}

export default connect(mapState, mapDispatch)(InsertNodeForm);
