import React from 'react'
import { connect } from 'react-redux'
import { writeNode, addNodeToTail, deleteNodeFromHead } from '../store'

const QueueForm = (props) => {
 console.log('props', props.nodes.head);
 const head = props.nodes.head
  return (
    <div>
      <form id="form-group"  >
        <div>
          <input
            type="text"
            onChange={props.handleChange}
            placeholder="add a node value"
            name="node"
            value={props.newNode}
          />
        </div>
        <br />
        <div className="input-group-btn">
          <button type="click" name="head" onClick={(evt) => props.handleTailSubmit(evt, props.newNode)} >Enqueue</button>
          <button type="click" name="tail" onClick={(evt) => props.handleHeadDelete(evt, props.newNode)} > Dequeue</button>
          <button type="click"  onClick={(evt) => highlightHead(evt, head)} > Peek</button>
        </div>
      </form>
    </div>
  )
}

const highlightHead = (evt, head) => {
  evt.preventDefault();
  head['activated'] = true;
  console.log('head here', head);
}

//newNode is mounted off writeNode in the reducer
const mapState = (state) => {
  return {
    nodes: state.node,
    newNode: state.writeNode.newNode,
    index: state.writeNode.index
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange(evt) {
      dispatch(writeNode(Number(evt.target.value)));
    },
    handleTailSubmit(evt, nodeValue){
      evt.preventDefault();
      dispatch(addNodeToTail({ value: +nodeValue }))
      dispatch(writeNode(''))
    },
    handleHeadDelete(evt) {
      evt.preventDefault();
      dispatch(deleteNodeFromHead())
    }
  }
}

export default connect(mapState, mapDispatch)(QueueForm);
