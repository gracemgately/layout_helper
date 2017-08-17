import React from 'react';
import { connect } from 'react-redux'
import { breadthFirstForEach } from '../DrawNode'
import { removeSingleBSTNode, writeNode } from '../../store'

const DeleteBSTNodeForm = (props) => {

  // const arrayCreator = () => {
  //   const initialTree =
  //   if (!initialTree.contains(props.bstNode.value)) {
  //     return false;
  //   } else {
  //     const { BST } = props;
  //     const bstArr = breadthFirstForEach(BST);
  //     const valRemovedArr = [];
  //     bstArr.map(el => {
  //       if (el !== props.bstNode.value){
  //         valRemovedArr.push(el);
  //       }
  //     })

  //   }
  // }

  return (
    <div>
      <form id="form-group" onSubmit={props.handleSubmit}>
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
    handleSubmit(evt) {
      evt.preventDefault();
      var nodeValue = Number(evt.target.node.value);
      console.log('nodeValue', nodeValue);
      dispatch(removeSingleBSTNode(nodeValue))
      dispatch(writeNode(''));
    }
  }
}

export default connect(mapState, mapDispatch)(DeleteBSTNodeForm);
