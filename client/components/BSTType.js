//COMPONENTS
import React, { Component } from 'react'
import { breadthFirstForEach, breadthFirstForEachDemo } from '../components'
import BstDemoAnimation from '../components/BstDemoAnimation'

//LIBRARIES
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group';

/**
 * COMPONENT
 */

class BSTType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBST: '',
      toggled: false

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(evt) {
    this.setState({ selectedBST: evt.target.value })
  }

  handleSubmit(evt, type, node, flip) {
    evt.preventDefault();
    if (type === "Depth First: Pre-order") {
      node.value = 1;
      node.left.value = 2;
      node.left.left.value = 3;
      node.left.right.value = 4;
      node.right.value = 5;
      node.right.left.value = 6;
      node.right.right.value = 7;
    } else if (type === "Depth First: In-order") {
      node.left.left.value = 1;
      node.left.value = 2;
      node.left.right.value = 3;
      node.value = 4;
      node.right.left.value = 5;
      node.right.value = 6;
      node.right.right.value = 7;
    } else if (type === "Depth First: Post-order") {
      node.left.left.value = 1;
      node.left.right.value = 2;
      node.left.value = 3;
      node.right.left.value = 4;
      node.right.right.value = 5;
      node.right.value = 6;
      node.value = 7;
    } else {
      node.value = 1;
      node.left.value = 2;
      node.right.value = 3;
      node.left.left.value = 4;
      node.left.right.value = 5;
      node.right.left.value = 6;
      node.right.right.value = 7;
    }

    this.setState({ toggled: flip })
    const preOrder = [16, 12, 8, 14, 20, 18, 22];
    breadthFirstForEach(node, preOrder)
  }


  render() {
    const { BST } = this.props;
    let groups = [];
    const bstArr = breadthFirstForEach(BST.bstDemo);
    bstArr.map(([node, level]) => {
      if (!groups[level]) groups[level] = [];
      groups[level].push(node);
    })
    const type = this.state.selectedBST;
    return (
      <div >
        <div className='main-container-controls'>
          <h2> Binary Search Tree Types</h2>
          <div className="bst-type-form">
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
          <div className="bst-type-form buttonstyle">
            <button onClick={(evt) => this.handleSubmit(evt, type, BST.bstDemo, !this.state.toggled)}
            >Start Demo!
          </button>
          </div>
        </div>
        <div className="container">
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
        <BstDemoAnimation />
      </div>
    )
  }
}


/*
 * CONTAINER
 */

const mapState = (state) => {
  return {
    BST: state.bstNode
  }
}

export default connect(mapState, null)(BSTType);

