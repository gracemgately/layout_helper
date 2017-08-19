import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import store, { getAllUserDS } from '../store'
import { FetchUserDS } from '../store'

import { _Time } from '../utils'

/**
 * COMPONENT
 */
class SingleUserDS extends Component {

  componentDidMount() {
    store.dispatch(FetchUserDS(this.props.user.id));
  }

  render() {

    const { user, userBST, userLL, userQueues, userStacks } = this.props;

    return (
      <div>
        <div id="userDScontainer-left">
          <div id="userDSitem">
            <div> My Binary Search Trees </div>
            <div>{
              userBST.map((el, idx) => {
                return (
                  <div key={idx}>
                    <Link to={{ pathname: '/binary-search-tree', query: el }}>{el.name} Date Created: {_Time(el.createdAt)}</Link>
                  </div>
                )
              })
            }
            </div>
          </div>
          <div id="userDSitem">
            <div> My Linked Lists </div>
            <div>{
              userLL.map((el, idx) => {
                return (
                  <div key={idx}>
                    <Link to={{ pathname: '/linked-list', query: el }}>{el.name} Date Created: {_Time(el.createdAt)}</Link>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
        <div id="userDScontainer-right">
          <div id="userDSitem">
            <div> My Queues </div>
            <div>{
              userQueues.map((el, idx) => {
                return (
                  <div key={idx}>
                    <Link to={{ pathname: '/queue', query: el }}>{el.name} Date Created: {_Time(el.createdAt)}</Link>
                  </div>
                )
              })
            }
            </div>
          </div>
          <div id="userDSitem">
            <div> My Stacks </div>
            <div>{
              userStacks.map((el, idx) => {
                return (
                  <div key={idx}>
                    <Link to={{ pathname: '/stack', query: el }}>{el.name} Date Created: {_Time(el.createdAt)}</Link>
                  </div>
                )
              })
            }
            </div>
          </div>
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
    user: state.user,
    userBST: state.singleuserds.BinarySearchTrees,
    userLL: state.singleuserds.LinkedLists,
    userQueues: state.singleuserds.Queues,
    userStacks: state.singleuserds.Stacks
  }
}

export default connect(mapState, null)(SingleUserDS);


 