import React, { Component } from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach, breadthFirstForEachDemo, drawBSTNode2 } from '../components'
import store, { toggleBSTColor, traverseTree, highlightBSTNodeAtIndex } from '../store'
import { CSSTransitionGroup } from 'react-transition-group';
import { bstType } from '../utils/BSTHelperFunctions'

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

  handleSubmit(evt, type, node, flip){
    evt.preventDefault();
    this.setState({toggled: flip})
    // store.dispatch(toggleBSTColor(flip));
    const flipped = this.state.toggled;
    const preOrder = [8, 4, 2, 6, 12, 10, 14]
    breadthFirstForEachDemo(node, preOrder, flipped)
  }


  render() {
    // const toggled = this.props.toggled;
    // console.log('toggled props', this.props.toggled);

    const { BST } = this.props;

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
          <button onClick={(evt) => this.handleSubmit(evt, type, BST.bstDemo, !this.state.toggled)}
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
    toggled: state.node.toggledBSTStatus
  }
}

// const mapDispatch = (dispatch) => {
//   return {
//     handleSubmit(evt, type, node, flip){
//       evt.preventDefault();
//       const preOrder = [8, 4, 2, 6, 12, 10, 14]
//       dispatch(toggleBSTColor(flip))
//       breadthFirstForEachDemo(node, preOrder, flip)

//     }
//   }
// }


export default connect(mapState, null)(BSTType);

