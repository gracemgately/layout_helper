import React, { Component } from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach } from '../components'
import { traverseTree } from '../store'
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
    handleSubmit(evt, BSTtype, props){
      console.log('props here', props.BST.bstDemo);
      evt.preventDefault();
      dispatch(traverseTree( { BSTtype} ))
      //breadthFirstForEach(props.BST.bstDemo)
    }
  }

}


export default connect(mapState, mapDispatch)(BSTType);

