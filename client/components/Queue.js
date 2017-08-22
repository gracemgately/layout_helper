import React, { Component } from 'react'
import { connect } from 'react-redux'
import { drawNode } from '../components'
import QueueForm from './Forms/QueueForm';
import SaveLLForm from './Forms/SaveLLForm';
import UploadCSV from './Forms/UploadCSV'
import { nodeArray_ } from '../utils'


/**
 * COMPONENT
 */
class Queue extends Component {

  render() {
    const { user, nodes, highlightIndex, toggled } = this.props;
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
          {
            (nodeArr.map((node, index) => {
              return (
                <div className='basicNode' >
                  {drawNode(node, toggled,  index, highlightIndex)}
                </div>
              )
            }))

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
  return {
    user: state.user,
    nodes: state.node,
    highlightIndex: state.node.highlightIdx,
    toggled: state.node.toggledStatus
  }
}

export default connect(mapState)(Queue);
