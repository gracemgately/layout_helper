//LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'


//UTILS & STORE
import store, { writeNode, addNodeToTail, deleteNodeFromHead, toggleColor, highlightNodeAtIndex } from '../../store'

class QueueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dirty: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleTailSubmit = this.handleTailSubmit.bind(this);
  }

  handleChange(evt) {
    store.dispatch(writeNode(Number(evt.target.value)));
    this.setState({
      dirty: true
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
        <form id="form-group"  >
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
            <button className="buttonstyle" type="click" name="head" disabled={numerified === 0 || Number.isNaN(numerified)} onClick={(evt) => this.handleTailSubmit(evt, this.props.newNode)}
            >Enqueue</button>
            <button className="buttonstyle" type="click" name="tail" onClick={(evt) => this.props.handleHeadDelete(evt, this.props.newNode)} > Dequeue</button>
            <button className="buttonstyle" type="click" onClick={(evt) => this.props.handlePeek(evt, !this.props.toggled)} > PEEK </button>
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
    index: state.writeNode.index,
    toggled: state.node.toggledStatus
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleHeadDelete(evt) {
      evt.preventDefault();
      dispatch(deleteNodeFromHead())
    },
    handlePeek(evt, flip) {

      evt.preventDefault();
      dispatch(toggleColor(flip));
      dispatch(highlightNodeAtIndex(0))

    }
  }
}

export default connect(mapState, mapDispatch)(QueueForm);
