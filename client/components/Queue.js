import React, { Component } from 'react'
import { connect } from 'react-redux'
import { drawQueueNode } from '../components'
import QueueForm from './Forms/QueueForm'
import SaveLLForm from './Forms/SaveLLForm'
import UploadCSV from './Forms/UploadCSV'
import { CSSTransitionGroup } from 'react-transition-group';

import { nodeArray_ } from '../utils'
import InsertionTime from './InsertionTime';
import { cleanState } from '../store'


/**
 * COMPONENT
 */
class Queue extends Component {
    //use componentWillUnmount to clean the state of any carryover
    //values that otherwise would cause the LL to rerender as a Queue
    //or Stack when switching between components
    componentWillUnmount() {
        this.props.cleanStateValues();
    }

  render() {
    const { user, nodes, highlightIndex, toggled } = this.props;
    const nodeArr = (this.props.location.query) ? (this.props.location.query.content) : (nodeArray_(nodes));

    return (
      <div className='main-container-display'>
        {//only render forms to edit DS if it is not a previously-saved one
            this.props.location.query ?
              <div>
                <h2> Queue </h2>
                <h2>Name: {this.props.location.query.name}</h2>
              </div>
              :
              <div className='main-container-controls'>
                <h2> Queue </h2>
                <QueueForm nodeArray={nodeArr} />
                <UploadCSV DSType={'queue'} />
                {user.id ?
                  <div className="save-form">
                    Save Your Queue:
                <SaveLLForm type={'queues'} content={nodeArr} user={user} />
                  </div>
                  : null}
              </div>
          }
        <div className="container">
          <div className="queue-container">
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500} >
          {//display 'Head' if there are values to display
            nodeArr.length ? <div>Head</div> : <div></div>
          }
          {
            (nodeArr.map((node, index) => {
              return (
                <div className="basicnode" key={index}>
                  {drawQueueNode(node, toggled,  index, highlightIndex)}
                </div>
              )
            }))

          }
          {//display 'Tail' if there are values to display
            nodeArr.length ? <div>Tail</div> : <div></div>
          }
          </CSSTransitionGroup>

        </div>
        </div>
        {this.props.location.query ? null: 
          <InsertionTime />
        } 
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
    nodes: state.node,
    highlightIndex: state.node.highlightIdx,
    toggled: state.node.toggledStatus
  }
}

const mapDispatch = (dispatch) => {
    return {
        cleanStateValues() {
            dispatch(cleanState())
        }
    }
}


export default connect(mapState, mapDispatch)(Queue);
