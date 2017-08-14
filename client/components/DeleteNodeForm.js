import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { removeNode, removeSingleLLNode } from '../store'

const DeleteNodeForm = (props) => {

  return (
    <div>
      <form id="form-group" onSubmit={props.handleSubmit}>
        <div>
          <input
            type="text"
            onChange={props.handleChange}
            placeholder="delete a node"
            name="node"
            value={props.nodeToDelete}
          />
        </div>
        <br />
        <div className="input-group-btn">
          <button
            className="btn btn-default"
            type="submit">Delete a Node at Selected Index
          </button>
        </div>
      </form>
    </div>
  )
}

const mapState = (state) => {
    return {
      nodes: state.node,
      // newNode: state.newNode
    }
  }

const mapDispatch = (dispatch) => {
    return {
      handleChange(evt) {
        dispatch(removeNode(evt.target.value));
      },
      handleSubmit(evt) {
        evt.preventDefault();
        const nodeValue = evt.target.node.value;
        // console.log('nodeValue ', nodeValue)
        dispatch(removeSingleLLNode({ value: nodeValue }))
        dispatch(removeNode(''))

      }
    }
  }

  export default connect(mapState, mapDispatch)(DeleteNodeForm);
