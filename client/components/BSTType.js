import React, { Component } from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach } from '../components'
import { CSSTransitionGroup } from 'react-transition-group';

/**
 * COMPONENT
 */


class BSTType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBST: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.depthFirstForEach = this.depthFirstForEach.bind(this);
  }

  handleChange(evt) {
    this.setState({ selectedBST: evt.target.value })
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.depthFirstForEach(this.state.selectedBST);
  }

  depthFirstForEach(type){
    if (type === 'Depth First: In-order'){
      const node = this.props.BST.bstDemo;
      console.log('node', node)
      if (node.left) {
        console.log('node.left', node.left)
        node.left.depthFirstForEach(type);
      }
      console.log('node.value', node.value);
      if (node.right){
        node.right.depthFirstForEach( type);
      }
    }
  }

  render() {
    console.log('state', this.state);
    const { BST } = this.props;
    console.log('props', this.props);
    let groups = [];
    const bstArr = breadthFirstForEach(BST.bstDemo);
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
          <button onClick={(evt) => this.handleSubmit(evt)}
          >Start Demo!
          </button>
        </div>
        <br /><br />
        <div className="container">
          {
            groups.map((ele, index) => {
              return (
                <div className={'bstlevel' + index} key={index}>
                  {
                    ele.map((node, idx) => {
                      return (
                        <div key={idx}>
                          {node}
                        </div>)
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
  }
}


export default connect(mapState, null)(BSTType);



  // if (type === 'pre-order') {
  //   (this.value);
  //   if (this.left) {this.left.depthFirstForEach(func, type);}
  //   if (this.right) {this.right.depthFirstForEach(func, type);}
  // }

  // if (type === 'post-order') {
  //   if (this.left) {this.left.depthFirstForEach(func, type);}
  //   if (this.right) {this.right.depthFirstForEach(func, type);}
  //   func(this.value);
  // }

