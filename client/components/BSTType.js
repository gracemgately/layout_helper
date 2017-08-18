import React from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach } from '../components'
import AddBSTNodeForm from './Forms/AddBSTNodeForm';
import DeleteBSTNodeForm from './Forms/DeleteBSTNodeForm';
import bstNode from '../store';
import SaveDSForm from './Forms/SaveDSForm';
import { CSSTransitionGroup } from 'react-transition-group';


/**
 * COMPONENT
 */
const BSTTypes = (props) => {

  const { BST } = props;
  console.log("QUERY", props.location.query);
  // bstArr.sort((a, b) => {
  //   return a.level - b.level;
  // })

  let groups = [1,2,3,4,5,6];
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


/*
 * CONTAINER
 */

const mapState = (state) => {
  return {
    BST: state.bstNode,
    NodeCount: state.bstNode.BSTNodeCount
  }
}



export default connect(mapState, null)(BSTTypes);
