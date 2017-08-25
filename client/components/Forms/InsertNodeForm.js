//LIBRARIES
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

//UTILS & STORE
import store, { writeNode, writeIndex, addNodeToTail, addNodeToHead, searchNode } from '../../store'

class InsertNodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dirty: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleTailSubmit = this.handleTailSubmit.bind(this);
  }
  //added individual handleSubmit functions for inserting at head and at tail

  handleChange(evt) {
    store.dispatch(writeNode(Number(evt.target.value)));
    this.setState({
      dirty: true
    })
  }

  handleHeadSubmit(evt, nodeValue) {
    evt.preventDefault();
    store.dispatch(addNodeToHead({ value: +nodeValue }))
    store.dispatch(writeNode(''))
    this.setState({
      dirty: false
    })
  }

  handleTailSubmit(evt, nodeValue) {
    evt.preventDefault();
    store.dispatch(addNodeToTail({ value: +nodeValue }))
    store.dispatch(writeNode(''))
    this.setState({
      dirty: false
    })
  }

  render() {
    const numerified = Number(this.props.newNode);
    console.log(numerified);
    const noNumbers = /^[0-9]+$/;
    console.log(noNumbers.test('yes'));

    return (
      <div>
        &nbsp;&nbsp;&nbsp;Add a Node:
      <form id="form-group">
          <div>
            {(Number.isNaN(numerified) || numerified === 0) && this.state.dirty ? <div className="alert alert-warning">Please enter a number</div> : null
            }
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="add a node"
              name="node"
              value={this.props.newNode}
              size="12"
            />
            <br />
            <button
              className="buttonstyle"
              type="click"
              disabled={numerified === 0 || Number.isNaN(numerified)} onClick={(evt) => this.handleHeadSubmit(evt, this.props.newNode)}
              onClick={(evt) => this.handleHeadSubmit(evt, this.props.newNode)} >Add Node to <br /> Head
            </button>
            <button
              className="buttonstyle"
              type="click"
              disabled={numerified === 0 || Number.isNaN(numerified)} onClick={(evt) => this.handleTailSubmit(evt, this.props.newNode)}
              onClick={(evt) => this.handleTailSubmit(evt, this.props.newNode)} > Add Node to <br /> Tail
            </button>
          </div>
          <br />
          <div>
            <input
              type="text"
              onChange={this.props.handleIdxChange}
              placeholder="specify index.."
              name="index"
              size="12"
            />
            <br />
            <button className="buttonstyle" type="click" onClick={(evt) => this.props.handleIndexSubmit(evt, this.props.newNode, this.props.index)} > Add at specific index</button>
          </div>
        </form>
      </div>
    )
  }
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
    handleIdxChange(evt) {
      dispatch(writeIndex(Number(evt.target.value)));
    },
    handleIndexSubmit(evt, nodeValue, index) {
      evt.preventDefault();
      dispatch(searchNode({ value: +nodeValue, index: +index }))
      dispatch(writeNode(''))
    }
  }
}

export default connect(mapState, mapDispatch)(InsertNodeForm);
