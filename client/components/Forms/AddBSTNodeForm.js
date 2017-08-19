import React from 'react'
import { connect } from 'react-redux'
import { writeNode, addSingleBSTNode } from '../../store'
import history from '../../history'


const AddBSTNodeForm = (props) => {


  return (
    <div>
      <form id="form-group" >
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
            <button
              onClick={(evt) => props.handleSubmit(evt, props.newNode)}
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
    newNode: state.writeNode.newNode,
    bstNode: state.bstNode
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange(evt) {
      dispatch(writeNode(Number(evt.target.value)));
    },
    handleSubmit(evt, value){
      evt.preventDefault();
      dispatch(addSingleBSTNode({value: +value}))
      dispatch(writeNode(''))
    }
  }
}

export default connect(mapState, mapDispatch)(AddBSTNodeForm);
