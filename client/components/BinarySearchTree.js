import React from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach, userBST } from '../components'
import {breadthFirstForEach_} from '../utils'
import AddBSTNodeForm from './Forms/AddBSTNodeForm';
import DeleteBSTNodeForm from './Forms/DeleteBSTNodeForm';
import bstNode from '../store';
import SaveDSForm from './Forms/SaveDSForm';


/**
 * COMPONENT
 */
const BinarySearchTree = (props) => {

  const { BST } = props;

  // const bstArr = breadthFirstForEach(BST);

  //console.log("QUERY", props.location.query);

  // bstArr.sort((a, b) => {
  //   return a.level - b.level;
  // })


  // returns test arr
  const testArr = userBST();

  let groups = []; // initialize array
  // bstArr.map(([node, level]) => {
  //   if (!groups[level]) groups[level] = [];
  //   groups[level].push(node);
  // })


  /* [...Array(10).keys()]
  //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  */




  const level = [
    ["root"],
    [0],
    [1, 2],
    [...Array(8).keys()].slice(3, 7), // 3.. 6
    [...Array(16).keys()].slice(7, 15), // 7...14
    [...Array(31).keys()].slice(15, 31) // 15...30
  ]
  console.log('level ', level);

  console.log('testArr ', testArr )

  testArr.map(([node, parentIdx]) => {
    const foundLevel = level.findIndex( (el) => {
      return el.includes(parentIdx);
    })
    if (!groups[foundLevel]) {
      groups[foundLevel] = [node];
    } else {
      groups[foundLevel].push(node);
    }
  })

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


>>>>>>> master




  console.log('groups ', groups);
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
