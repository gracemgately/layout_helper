import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import store, { getAllUserDS } from '../store'
import { FetchUserDS } from '../store'
import DeleteSingleUserDS from './Forms/DeleteSingleUserDS'

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
            <div id="DSTitle"> My Binary Search Trees </div>
            <div>{
              userBST.map((el, idx) => {
                return (
                  <div id="singleDS" key={idx}>
                    <DeleteSingleUserDS DSId={el.id} DSType={'binarysearchtrees'}/>
                    <Link to={{ pathname: '/binary-search-tree', query: el }}>{el.name} Date Created: {_Time(el.createdAt)}</Link>
                  </div>
                )
              })
            }
            </div>
          </div>
          <div id="userDSitem">
            <div id="DSTitle"> My Linked Lists </div>
            <div>{
              userLL.map((el, idx) => {
                return (
                  <div id="singleDS" key={idx}>
                    <DeleteSingleUserDS DSId={el.id} DSType={'linkedlists'}/>
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
            <div id="DSTitle"> My Queues </div>
            <div>{
              userQueues.map((el, idx) => {
                return (
                  <div id="singleDS" key={idx}>
                    <DeleteSingleUserDS DSId={el.id} DSType={'queues'}/>
                    <Link to={{ pathname: '/queue', query: el }}>{el.name} Date Created: {_Time(el.createdAt)}</Link>
                  </div>
                )
              })
            }
            </div>
          </div>
          <div id="userDSitem">
            <div id="DSTitle"> My Stacks </div>
            <div>{
              userStacks.map((el, idx) => {
                return (
                  <div id="singleDS" key={idx}>
                    <DeleteSingleUserDS DSId={el.id} DSType={'stacks'}/>
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


 
