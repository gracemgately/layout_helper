import React, {Component} from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach, drawBSTnodes } from '../components'
import {breadthFirstForEach_, arrayifyBst, groupBstNodes} from '../utils'
import AddBSTNodeForm from './Forms/AddBSTNodeForm';
import DeleteBSTNodeForm from './Forms/DeleteBSTNodeForm';
import bstNode from '../store';
import SaveDSForm from './Forms/SaveDSForm';


/**
 * COMPONENT
 */
class BinarySearchTree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      array: props.array,
      BST: props.BST,
      groups: []
    }
    this.asyncCalls = this.asyncCalls.bind(this);

    console.log('props ', props);
  }



  // // send arrayified bst nodes, get drawings and parentIdx values back
  // let bstDivs = drawBSTnodes(cleanBST);

  // // group the bstDivs by parentIdx groups
  // let groups = groupBstNodes(bstDivs);
  componentDidMount() {
    this.asyncCalls();
    console.log('component mounted');

  }

  componentWillReceiveProps(nextProps) {

    console.log('nextProps ', nextProps);
    if (nextProps.BST !== this.state.BST) {
      console.log('next props...');
      this.setState({ BST: nextProps.BST, array: nextProps.array });
      this.asyncCalls();
    }
  }


  asyncCalls() {
        // send arrayified bst nodes, get drawings and parentIdx values back
    const bstDivs = drawBSTnodes(this.array);

        // group the bstDivs by parentIdx groups

    let groups = groupBstNodes(bstDivs);

    console.log('groups ', groups);

    this.setState({ groups: groups });
  }


  render() {

    console.log('this.props.array.... ', this.props.array);

      return (

        <div>

          <h1> Binary Search Tree </h1>
          <div className='formDisplay' >
            <AddBSTNodeForm />
            <DeleteBSTNodeForm />
            <SaveDSForm content={this.BST} />

          </div>
          <div className="container">
            {
              this.state.array.map((ele, index) => {
                return (
                  <div className={'bstlevel' + index} key={index}>
                    {
                      ele.map((node, idx) => {
                        return (<div key={idx}>{node}</div>)
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
      array: state.cleanBST.arrayBST
    }
  }

  // const mapDispatch = (state) => {
  //   //console.log('here is state', state)
  //   return {
  //     values: state
  //   }
  // }

  export default connect(mapState, null)(BinarySearchTree);
