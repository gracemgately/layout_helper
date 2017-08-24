//LIBRARIES
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

//UTILS & STORE
import { deleteNodeFromHead, deleteNodeFromTail, deleteAtIndex, writeDeleteIndex } from '../../store'

const DeleteNodeForm = (props) => {

  return (
    <div>
      &nbsp;&nbsp;&nbsp;Delete a Node:
      <form id="form-group"  >
        <span id="form-group-left">
          <button type="click" className="buttonstyle" onClick={(evt) => props.handleHeadDelete(evt)} >Delete Node <br/> from Head</button>
          <button type="click" className="buttonstyle" onClick={(evt) => props.handleTailDelete(evt)} > Delete Node <br/>  from Tail</button>
        </span>
        <br />
        <div>
          <input
            type="text"
            onChange={props.handleIdxChange}
            placeholder="specify index.."
            name="delete-index"
            size="12"
          />
          <br/>
          <button type="click" className="buttonstyle" onClick={(evt) => props.handleIndexSubmit(evt, props.index)} > Delete at specific index</button>
        </div>
      </form>
    </div>
  )
}

const mapState = (state) => {
    return {
      nodes: state.node,
      index: state.writeNode.index
    }
  }

const mapDispatch = (dispatch) => {
  return {
    handleHeadDelete(evt) {
      evt.preventDefault();
      dispatch(deleteNodeFromHead())
    },
    handleTailDelete(evt){
      evt.preventDefault();
      dispatch(deleteNodeFromTail())
    },
    handleIdxChange(evt) {
      dispatch(writeDeleteIndex(Number(evt.target.value)));
    },
    handleIndexSubmit(evt, index){
      evt.preventDefault();
      dispatch(deleteAtIndex({ index: +index }))
    }
  }
}

  export default connect(mapState, mapDispatch)(DeleteNodeForm);
