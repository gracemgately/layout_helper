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

    //const { user, nodes, highlightIndex, toggled } = props
    render() {

        const { user, nodes, highlightIndex, toggled } = this.props

        const nodeArr = (this.props.location.query) ? (this.props.location.query.content) : (nodeArray_(nodes));

        return (
            <div>
                <h2> Stack </h2>
                {//only render forms to edit DS if it is not a previously-saved one
                    this.props.location.query ?
                        <h2>Name: {this.props.location.query.name}</h2>
                        :
                        <div className='formDisplay'>
                            <StackForm nodeArr={nodeArr} />
                            <UploadCSV DSType={'stack'} />
                            {user.id ? <SaveLLForm type={'stacks'} content={nodeArr} user={user} /> : null}
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
                                            {drawStackNode(node, toggled, index, highlightIndex)}
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

export default connect(mapState, mapDispatch)(Stack);
