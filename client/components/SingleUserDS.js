import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import store, { getAllUserDS } from '../store'
import { FetchUserDS } from '../store'

/**
 * COMPONENT
 */
class SingleUserDS extends Component {

  componentDidMount() {
    store.dispatch(FetchUserDS());
  }

  render() {

    const { user } = this.props;
    console.log("USER", user)
    // const userBSTS = user.BinarySearchTrees;
    // const userLLS = user.LinkedLists;
    // const userQueues = user.Queues;
    // const userStacks = user.Stacks;

    return (
      <div>hi!</div>
//         <div>user DS here</div>
//         <div> My Binary Search Trees </div>
//         <div>{
//           userBSTS.map((el, idx) => {
//             return (
//               <div key={idx}>
//                 {el}
//               </div>
//             )
//           })
//         }
//         </div>
//         <div> My Linked Lists </div>
//         <div>{
//           userLLS.map((el, idx) => {
//             return (
//               <div key={idx}>
//                 {el}
//               </div>
//             )
//           })
//         }
//         </div>*/
//         {/*<div> My Queues </div>
//         <div>{
//           userQueues.map((el, idx) => {
//             return (
//               <div key={idx}>
//                 {el}
//               </div>
//             )
//           })
//         }
//         </div>*/}
//         {/*<div> My Stacks </div>
//         <div>{
//           userStacks.map((el, idx) => {
//             return (
//               <div key={idx}>
//                 {el}
//               </div>
//             )
//           })
//         }
//         </div>*/}
//       </div>
    )
  }
}

/*
 * CONTAINER
 */

const mapState = (state) => {
  return {
          user: state.user,
  }
}


// const mapDispatch = (dispatch) => {

// return {
//   values: state
// }
// }

export default connect(mapState, null)(SingleUserDS);