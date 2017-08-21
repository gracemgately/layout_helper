import React, { Component } from 'react'
import { connect } from 'react-redux'
import { drawQueueNode } from '../components'
import QueueForm from './Forms/QueueForm'
import SaveLLForm from './Forms/SaveLLForm'
import UploadCSV from './Forms/UploadCSV'

import { nodeArray_ } from '../utils'
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

    const { user, nodes, highlightIndex } = this.props;
    
    const nodeArr = (this.props.location.query) ? (this.props.location.query.content) : (nodeArray_(nodes));

    return (
      <div>
        <h2> Queue </h2>
        {//only render forms to edit DS if it is not a previously-saved one
          this.props.location.query ?
            <h2>Name: {this.props.location.query.name}</h2>
            :
            <div className='formDisplay'>
              <QueueForm nodeArray={nodeArr} />
              <UploadCSV DSType={'queue'} />
              {user.id ? <SaveLLForm type={'queues'} content={nodeArr} user={user} /> : null}
            </div>
        }
        <div className="container">
          <div className="queue-container">
          {//display 'Head' if there are values to display
            nodeArr.length ? <div>Head</div> : <div></div>
          }
          {
            (nodeArr.map((node, index) => {
              var highlight = (index === highlightIndex) ? "yellow" : "none"
              return (
                <div className="basicnode" key={index}>
                  {drawQueueNode(node, highlight)}
                </div>
              )
            }))

          }
          {//display 'Tail' if there are values to display
            nodeArr.length ? <div>Tail</div> : <div></div>
          }
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
    nodes: state.node,
    highlightIndex: state.node.highlightIdx,
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
