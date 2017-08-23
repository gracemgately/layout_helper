//LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'

//UTILS & STORE
import {getRandomBst, arrayifyClassBST} from '../../store'

const RandomBSTForm = (props) => {

  return (
    <div>
          <button type="click" onClick={(evt) => props.handleSubmit(evt, props.bstNode)} > Get a random BST</button>

    </div>
  )
}

const mapState = (state) => {
  return {
    bstNode: state.bstNode
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt, bst) {
      evt.preventDefault();
      dispatch(getRandomBst())
      dispatch(arrayifyClassBST(bst))
    }
  }
}

  export default connect(mapState, mapDispatch)(RandomBSTForm);
