import React, { Component } from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach } from '../components'
import { traverseTree, getArray } from '../store'
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

  render() {
    console.log('state', this.state);
    const { BST } = this.props;
    console.log('props', BST.bstDemo);

    let groups = [];
    const bstArr = breadthFirstForEach(BST.bstDemo);

    bstArr.map(([node, level]) => {
      if (!groups[level]) groups[level] = [];
      groups[level].push(node);
    })
    const type = this.state.selectedBST;
    const JSXArr =  groups;
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
          <button onClick={(evt) => this.props.handleSubmit(evt, type, this.props, JSXArr)}
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
                        <div key={idx} className={ node.colored ? 'yellow' : 'none'}>
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
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt, BSTtype, props, JSXArr){
      evt.preventDefault();
      // dispatch(getArray({ JSXArr }))
      dispatch(traverseTree( { BSTtype } ))

    }
  }

}


export default connect(mapState, mapDispatch)(BSTType);

