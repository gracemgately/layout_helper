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
  console.log("QUERY", props.location.query);
  // bstArr.sort((a, b) => {
  //   return a.level - b.level;
  // })

  let groups = []; // initialize array
  // [[node],[node, node],[node, node]] // each index is level

  // const bstArr = props.location.query ? props.location.query : breadthFirstForEach(BST);

//NOTE: we will rewrite this once we determine the mathematical pattern
  //if (props.location.query) {
  //   groups[1] = [];
  //   groups[2] = [];
  //   groups[3] = [];
  //   props.location.query.map((node) => {
  //     if (node.parent === null) {
  //       groups[0] = [];
  //       groups[0].push(node);
  //     } else if (node.parent === 0) {
  //       groups[1].push(node);
  //     } else if (node.parent === 1 || node.parent === 2) {
  //       groups[2].push(node);
  //     } else if (node.parent === 3 || node.parent === 2 || (node.parent === 1 || node.parent === 2))


  //     if (!groups[level]) groups[level] = [];
  //     groups[level].push(node);
  //   })
  // } else {
    const bstArr = breadthFirstForEach(BST);

    bstArr.map(([node, level]) => {
      if (!groups[level]) groups[level] = [];
      groups[level].push(node);
    })
  // }



  // console.log('groups ', groups);
  return (

      <div>

        <h1> Binary Search Tree </h1>
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
