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
                    <div className="card">
                        <Link to={`/linked-list`}>
                            <div className="col-xs-10">
                                <img src="/images/ll.png" alt="Avatar" style={{ width: 90 + '%', height: 100 + '%'}}></img>
                                <h4>Linked List</h4>

                            </div>
                    </Link>


                    </div>
                    <div className="card">
                        <Link to={`/binary-search-tree`}>
                            <div className="col-xs-10">
                                <img src="/images/bst.png" alt="Avatar" style={{ width: 90 + '%', height: 100 + '%' }}></img>
                                <h4>Binary Search Tree</h4>
                            </div>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to={`/queue`}>
                            <div className="col-xs-10">
                                <img src="/images/queue.png" alt="Avatar" style={{ width: 90 + '%', height: 100 + '%' }}></img>
                                <h4>Queue</h4>
                            </div>
                        </Link>

                    </div>
                    <div className="card">
                        <Link to={`/stack`}>
                            <div className="col-xs-10">
                                <img src="/images/stack.png" alt="Avatar" style={{ width: 90 + '%', height: 100 + '%'}}></img>
                                <h4>Stack</h4>

                            </div>
                    </Link>

                </div>
            </div>

        )
    }
}
