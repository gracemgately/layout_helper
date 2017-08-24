//LIBRARIES
import React from 'react'
import { connect } from 'react-redux'
import history from '../../history'

//UTILS & STORE
import { writeNode, addSingleBSTNode, arrayifyClassBST } from '../../store'



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
          props.callArrayfyBST(props.bstNode);

      }
      return (

    <div>
     &nbsp;&nbsp;&nbsp;Add a Node:
      <form id="form-group" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="add a node"
            name="node"
            value={props.newNode}
            size="12"
          />
          <br />
          <button className="buttonstyle" type="submit">Add Me!</button>
        </div>
      </form>
    </div>
  )
}

const mapState = (state) => {
    return {
      newNode: state.newNode,
      bstNode: state.bstNode,
      array: state.bstNode.array
    }
  }

const mapDispatch = (dispatch) => {
    return {
      writeNode:  (value) => dispatch(writeNode(value)),
      addSingleBSTNode: (value) => dispatch(addSingleBSTNode(value)),
      callArrayfyBST: (BST) => dispatch(arrayifyClassBST(BST))

    }
  }

  export default connect(mapState, mapDispatch)(AddBSTNodeForm);
