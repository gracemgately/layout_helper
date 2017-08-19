import React from 'react'
import { connect } from 'react-redux'
import { writeNode, addSingleBSTNode, cleanBST } from '../../store'
import history from '../../history'


const AddBSTNodeForm = (props) => {
      function handleChange(evt) {
        props.writeNode(Number(evt.target.value));
      }
      function handleSubmit(evt) {
        evt.preventDefault();
        var nodeValue = Number(evt.target.node.value);
          props.addSingleBSTNode(nodeValue);
          props.writeNode('');
        // pass BST class to cleanBST everytime 'Add Me!' is clicked, i.e. new node is added.  we create an arrayified tree at every node change.
          console.log('props.bstNode ', props.bstNode);
          props.callCleanBST(props.bstNode);
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
      newNode: state.newNode,
      bstNode: state.bstNode
    }
  }

const mapDispatch = (dispatch) => {
    return {
      writeNode:  (value) => dispatch(writeNode(value)),
      addSingleBSTNode: (value) => dispatch(addSingleBSTNode(value)),
      callCleanBST: (BST) => dispatch(cleanBST(BST))

    }
  }

  export default connect(mapState, mapDispatch)(AddBSTNodeForm);
