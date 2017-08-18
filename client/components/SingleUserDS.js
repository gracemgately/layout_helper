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
    store.dispatch(FetchUserDS(this.props.user.id));
  }

  render() {

    const { user, userBST, userLL } = this.props;
    console.log("BSTS", userBST);
    console.log("LLs", userLL);


    // const userBSTS = user.BinarySearchTrees;
    // const userLLS = user.LinkedLists;
    // const userQueues = user.Queues;
    // const userStacks = user.Stacks;

    return (
      <div>
        <div> My Binary Search Trees </div>
        <div>{
          userBST.map((el, idx) => {
            return (
              <div key={idx}>
                <Link to={{pathname: '/binary-search-tree', query: el.content }}>{el.name}</Link>
              </div>
            )
          })
        }
        </div>
        <div> My Linked Lists </div>
        <div>{
            userLL.map((el, idx) => {
              return (
                <div key={idx}>
                  {el.name}
                </div>
              )
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
  console.log("STATE", state)

  return {
    user: state.user,
    userBST: state.singleuserds.BinarySearchTrees,
    userLL: state.singleuserds.LinkedLists
  }
}



// const mapDispatch = (dispatch) => {

// return {
//   values: state
// }
// }

export default connect(mapState, null)(SingleUserDS);


 /*<div> My Queues </div>
        <div>{
          userQueues.map((el, idx) => {
            return (
              <div key={idx}>
                {el}
              </div>
            )
          })
        }
        </div>
        <div> My Stacks </div>
        <div>{
          userStacks.map((el, idx) => {
            return (
              <div key={idx}>
                {el}
              </div>
            )
          })
        }
        </div>*/