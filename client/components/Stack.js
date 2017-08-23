import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group';

import StackForm from './Forms/StackForm'
import UploadCSV from './Forms/UploadCSV'
import { drawStackNode } from '../components'
import SaveLLForm from './Forms/SaveLLForm';

import { nodeArray_ } from '../utils';
import { cleanState } from '../store'


/**
 * COMPONENT
 */
class Stack extends Component {
    //use componentWillUnmount to clean the state of any carryover
    //values that otherwise would cause the LL to rerender as a Queue
    //or Stack when switching between components
    componentWillUnmount() {
        this.props.cleanStateValues();
    }

    render() {

        const { user, nodes, highlightIndex } = this.props

        const nodeArr = (this.props.location.query) ? (this.props.location.query.content) : (nodeArray_(nodes));

        return (
            <div className='main-container-display'>
                {//only render forms to edit DS if it is not a previously-saved one
                    this.props.location.query ?
                        <div>
                            <h2> Stack </h2>
                            <h2>Name: {this.props.location.query.name}</h2>
                        </div>
                        :
                        <div className='main-container-controls'>
                            <h2> Stack </h2>
                            <StackForm nodeArr={nodeArr} />
                            <UploadCSV DSType={'stack'} />
                            {user.id ? 
                                <div className="save-form">
                                     Save Your Stack:
                                <SaveLLForm type={'stacks'} content={nodeArr} user={user} /> 
                                </div>: 
                                null}
                        </div>
                }
                <div className="container">
                    <div className="stack-container">
                        {//display 'Head' if there are values to display
                            nodeArr.length ? <div>Tail</div> : <div></div>
                        }
                        {
                            (nodeArr.map((node, index) => {
                                var highlight = (index === highlightIndex) ? "yellow" : "none"
                                return (
                                    <div className="basicnode" key={index}>
                                        {drawStackNode(node, highlight)}
                                    </div>
                                )
                            }))
                        }
                        {//display 'Tail' if there are values to display
                            nodeArr.length ? <div>Head</div> : <div></div>
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

export default connect(mapState, mapDispatch)(Stack);
