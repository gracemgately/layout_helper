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
  }

  handleChange(evt) {
    this.setState({ selectedBST: evt.target.value })
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
        <br /><br />
        <div className="container">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500} >

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
          </CSSTransitionGroup>

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
    selectedBST: state.selectedBST
  }
}


export default connect(mapState, null)(BSTType);
