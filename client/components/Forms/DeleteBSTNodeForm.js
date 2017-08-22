import React from 'react';
import { connect } from 'react-redux'
import { breadthFirstForEach } from '../DrawNode'
import { removeSingleBSTNode, writeNode, cleanBST } from '../../store'

const DeleteBSTNodeForm = (props) => {

  const { bstNode } = props;

  return (
    <div>
    Delete a Node:
      <form id="form-group" onSubmit={(evt) => props.handleSubmit(evt, bstNode)}>
        <div>
          <input
            type="text"
            placeholder="delete a node"
            name="node"
            onChange={props.handleChange}
            value={props.newNode}
          />
        <br />
          <button className="btn btn-default" type="submit">Delete Me!</button>
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
      dispatch(cleanBST(bst))

    }
  }
}

export default connect(mapState, mapDispatch)(DeleteBSTNodeForm);
