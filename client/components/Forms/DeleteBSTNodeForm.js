import React from 'react';
import { connect } from 'react-redux'
import { removeSingleBSTNode, writeNode, arrayifyClassBST } from '../../store'

const DeleteBSTNodeForm = (props) => {

  const { bstNode } = props;

  return (
    <div>
      <form id="form-group" onSubmit={(evt) => props.handleSubmit(evt, bstNode)}>
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
    bstNode: state.bstNode
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange(evt){
      dispatch(writeNode(Number(evt.target.value)));
    },
    handleSubmit(evt, bst) {
      evt.preventDefault();
      var nodeValue = Number(evt.target.node.value);
      dispatch(removeSingleBSTNode(nodeValue))
      dispatch(writeNode(''));
      dispatch(arrayifyClassBST(bst))

    }
  }
}

export default connect(mapState, mapDispatch)(DeleteBSTNodeForm);
