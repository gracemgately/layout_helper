import React from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach } from '../components'
import AddBSTNodeForm from './Forms/AddBSTNodeForm';
import DeleteBSTNodeForm from './Forms/DeleteBSTNodeForm';
import bstNode from '../store';
import SaveDSForm from './Forms/SaveDSForm';


/**
 * COMPONENT
 */
const BinarySearchTree = (props) => {

  const { BST } = props;
  const bstArr = breadthFirstForEach(BST);
  // bstArr.sort((a, b) => {
  //   return a.level - b.level;
  // })

  let groups = []; // initialize array
  // [[node],[node, node],[node, node]] // each index is level

  bstArr.map(([node, level]) => {
    if (!groups[level]) groups[level] = [];
    groups[level].push(node);
  })

  // console.log('groups ', groups);
  return (

    <div>
      <h1> Binary Search Tree </h1>
      <div>
      <AddBSTNodeForm />
      <SaveDSForm content={BST} />
      <DeleteBSTNodeForm />
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
    NodeCount: state.bstNode.BSTNodeCount
  }
}

// const mapDispatch = (state) => {
//   //console.log('here is state', state)
//   return {
//     values: state
//   }
// }

export default connect(mapState, null)(BinarySearchTree);
