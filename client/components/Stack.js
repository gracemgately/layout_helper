import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import StackForm from './Forms/StackForm'
import UploadCSV from './Forms/UploadCSV'
import { drawNode } from '../components'
import SaveLLForm from './Forms/SaveLLForm';
import { nodeArray_ } from '../utils';


const Stack = (props) => {

    const { user, nodes, highlightIndex, toggled } = props

    const nodeArr = (props.location.query) ? (props.location.query.content) : (nodeArray_(nodes));

    return (
        <div>
            <h2> Stack </h2>
            {//only render forms to edit DS if it is not a previously-saved one
                props.location.query ?
                    <h2>Name: {props.location.query.name}</h2>
                    :
                    <div className='formDisplay'>
                        <StackForm nodeArr={nodeArr} />
                        <UploadCSV DSType={'stack'} />
                        {user.id ? <SaveLLForm type={'stacks'} content={nodeArr} user={user} /> : null}
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

export default connect(mapState)(Stack);
