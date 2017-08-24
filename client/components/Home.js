//COMPONENTS
import React, { Component } from 'react'

//LIBRARIES
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="textBar" >
                    <div className="textTextBar" >
                        <span> A data structures visualization tool </span>
                    </div>
                </div>

                <div className="flex-container" >
                     <Link to={`/linked-list`}>
                            <div className="card">
                                        <img className='img-size' src="/images/ll.png"></img>
                                        Linked List
                            </div>
                    </Link>


                    <Link to={`/binary-search-tree`}>
                            <div className="card">

                                        <img className='img-size' src="/images/bst.png"></img>
                                        Binary Search Tree

                            </div>
                    </Link>

                    <Link to={`/queue`}>
                            <div className="card">
                                        <img className='img-size' src="/images/queue.png"></img>
                                        Queue
                             </div>
                    </Link>

                    <Link to={`/stack`}>
                        <div className="card">
                            <img className='img-size' src="/images/stack.png"></img>Stack
                        </div>
                    </Link>
                </div>
            </div>

        )
    }
}
