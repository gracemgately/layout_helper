import React from 'react';
import { connect } from 'react-redux'
import { breadthFirstForEach } from '../DrawNode'
import { removeSingleBSTNode, writeNode, cleanBST } from '../../store'

const DeleteBSTNodeForm = (props) => {

 const clean = props.cleanBST;

  return (
    <div>
      <form id="form-group" onSubmit={(evt) => props.handleSubmit(evt, clean)}>
        <div>
          <input
            type="text"
            placeholder="delete a node"
            name="node"
            onChange={props.handleChange}
            value={props.newNode}
          />
        </div>
        <br />
        <div className="input-group-btn">
          <button
            className="btn btn-default"
            type="submit">Delete Me!
      </button>
        </div>
      </form>
    </div>
  )
}

const mapState = (state) => {
  return {
    nodes: state.node,
    bstNode: state.bstNode,
    cleanBST: state.cleanBST.arrayBST
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange(evt){
      dispatch(writeNode(Number(evt.target.value)));
    },
    handleSubmit(evt, arr) {
      evt.preventDefault();
      var nodeValue = Number(evt.target.node.value);
      console.log('nodeValue', nodeValue);
      dispatch(removeSingleBSTNode(nodeValue))
      dispatch(writeNode(''));
      dispatch(cleanBST(arr))

    }
  }
}

export default connect(mapState, mapDispatch)(DeleteBSTNodeForm);
