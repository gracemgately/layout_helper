import React, { Component } from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach, drawBSTNode2 } from '../components'
import { traverseTree, highlightBSTNodeAtIndex } from '../store'
import { CSSTransitionGroup } from 'react-transition-group';

/**
 * COMPONENT
 */


class BSTType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBST: '',
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(evt) {
    this.setState({ selectedBST: evt.target.value })
  }

  depthFirstForEach(type) {
    const fill = 'yellow';

    if (type === 'Depth First: In-order') {

        if (this.left) this.left.depthFirstForEach(type);
        drawBSTNode2(this, this.props.toggled, index, this.props.highlightIndex);

        // drawBSTNode2(this, fill);
        // console.log('this node', this);
        //idea is that once the node is processed, the drawBSTNode function will be triggered with a fill setting andthe node will be redrawn with yellow fill, much like in the peek functions of stack and queue....


        if (this.right) this.right.depthFirstForEach(type);
    }
    if (type === 'Depth First: Pre-order') {
        this.colored = true;

        drawBSTNode2(this, fill)

        if (this.left) { this.left.depthFirstForEach(type); }
        if (this.right) { this.right.depthFirstForEach(type); }
    }

    if (type === 'Depth First: Post-order') {
        if (this.left) { this.left.depthFirstForEach(type); }
        if (this.right) { this.right.depthFirstForEach(type); }

        drawBSTNode2(this, fill)
    }
}

  render() {
    console.log('state', this.state);
    const { BST, highlightIndex, toggled } = this.props;
    console.log('props', this.props);

    let groups = [];
    const bstArr = breadthFirstForEach(BST.bstDemo, toggled, highlightIndex);

    bstArr.map(([node, level]) => {
      if (!groups[level]) groups[level] = [];
      groups[level].push(node);
    })
    const type = this.state.selectedBST;
    return (

      <div>
        <h1> Binary Search Tree Demo</h1>
        <div>
          <select
            form="bst-type-form"
            name="type"
            onChange={this.handleChange}
          >
            <option>Depth First: Pre-order</option>
            <option>Depth First: In-order</option>
            <option>Depth First: Post-order</option>
            <option>Breadth First</option>
          </select>
        </div>
        <div className="input-group-btn">
          <button onClick={(evt) => this.props.handleSubmit(evt, type, this.props)}
          >Start Demo!
          </button>
        </div>
        <br /><br />
        <div className="container2">
          {
           groups.map((ele, index) => {

              return (
                <div className={'bstlevel' + index} key={index}>
                  {
                    ele.map((node, idx) => {

                      return (
                        <div key={idx} >
                          {node}
                        </div>
                        )
                    })
                  }

                </div>)
            })
          }
        </div>
      </div>
    )
  }
}


/*
 * CONTAINER
 */

const mapState = (state) => {
  return {
    BST: state.bstNode,
    highlightIndex: state.node.highlightIdx,
    toggled: state.node.toggledStatus
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt, BSTtype){
      evt.preventDefault();
      dispatch(traverseTree( { BSTtype } ))
      dispatch(highlightBSTNodeAtIndex())
    }
  }

}


export default connect(mapState, mapDispatch)(BSTType);

