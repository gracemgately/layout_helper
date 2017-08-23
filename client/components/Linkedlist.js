import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawNode} from '../components'
import InsertNodeForm from './Forms/InsertNodeForm';
import DeleteNodeForm from './Forms/DeleteNodeForm';
import SaveLLForm from './Forms/SaveLLForm';
import UploadCSV from './Forms/UploadCSV'
import { nodeArray_ } from '../utils';
import InsertionTime from './InsertionTime';
import { cleanState } from '../store'

/**
 * COMPONENT
 */
class Linkedlist extends Component {
  //use componentWillUnmount to clean the state of any carryover
  //values that otherwise would cause the LL to rerender as a Queue
  //or Stack when switching between components
  componentWillUnmount(){
      this.props.cleanStateValues();
  }


  render() {

    const { nodes, user } = this.props;
    // node:LinkedList {head: Node, tail: Node}...
    const nodeArr = (this.props.location.query) ? (this.props.location.query.content) : (nodeArray_(nodes));

    return (
      <div>
        {//only render forms to edit DS if it is not a previously-saved one
          this.props.location.query ?
          <div>
              <h2> Linked List </h2>
              <h2>Name: {this.props.location.query.name}</h2>
            </div>
            :
            <div className='main-container-controls'>
              <h2> Linked List </h2>
              <InsertNodeForm />
              <DeleteNodeForm />
              <UploadCSV DSType={'linkedlist'} />
              {user.id ? 
                <div className="save-form">
                Save Your Linked List:
                <SaveLLForm type={'linkedlists'} content={nodeArr} user={user} /> 
                </div>
                : null}
            </div>
        }

        <div className="container">
          {
            (nodeArr.map((node, index) => {
              return (
                <div className="basicnode-linkedlist" key={index}>
                  {drawNode(node)}
                </div>
              )
            }))

          }
        </div>
        <InsertionTime />
      </div>
    )
  }
}


/*
 * CONTAINER
 */

const mapState = (state) => {
  return {
    nodes: state.node,
    user: state.user
  }
}


const mapDispatch = (dispatch) => {
  return {
    cleanStateValues(){
      dispatch(cleanState())
    }
  }
}

export default connect(mapState, mapDispatch)(Linkedlist);
