import React from 'react'
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
const BinarySearchTree = (props) => {

  const { cleanBST, BST } = props;

  // send arrayified bst nodes, get drawings and parentIdx values back
  let bstDivs = drawBSTnodes(cleanBST);

  // group the bstDivs by parentIdx groups
  let groups = groupBstNodes(bstDivs);


  return (

      <div>

      <h1> Binary Search Tree </h1>
      <div>BST {BST.magnitude} </div>
        <div className='formDisplay' >
          <AddBSTNodeForm />
          <DeleteBSTNodeForm />
          <SaveDSForm content={BST} />

        </div>
        <div className="container">
          {
            groups.map((ele, index) => {
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


  /*
   * CONTAINER
   */

  const mapState = (state) => {
    return {
      BST: state.bstNode,
      NodeCount: state.bstNode.BSTNodeCount,
      cleanBST: state.cleanBST.arrayBST
    }
  }

  // const mapDispatch = (state) => {
  //   //console.log('here is state', state)
  //   return {
  //     values: state
  //   }
  // }

  export default connect(mapState, null)(BinarySearchTree);
