import React from 'react'
import { connect } from 'react-redux'
import { writeNode, addSingleBSTNode } from '../../store'
import history from '../../history'


const AddBSTNodeForm = (props) => {
      function handleChange(evt) {
        props.writeNode(Number(evt.target.value));
      }
      function handleSubmit(evt) {
        evt.preventDefault();
        var nodeValue = Number(evt.target.node.value);
          props.addSingleBSTNode(nodeValue);
        props.writeNode('')
      }

  return (
    <div>
      <form id="form-group" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="add a node"
            name="node"
            value={props.newNode}
          />
        </div>
        <br />
        <div className="input-group-btn">
          <button
            className="btn btn-default"
            type="submit">Add Me!
          </button>
        </div>
      </form>
    </div>
  )
}

const mapState = (state) => {
    return {
      nodes: state.node,
      newNode: state.newNode,
      bstNode: state.bstNode
    }
  }

const mapDispatch = (dispatch) => {
    return {
      writeNode:  (value) => dispatch(writeNode(value)),
      addSingleBSTNode: (value) => dispatch(addSingleBSTNode(value))

    }
  }

  export default connect(mapState, mapDispatch)(AddBSTNodeForm);
