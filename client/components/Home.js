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
                                        <img className='img-size' src="/images/llbig.png"></img>
                                        <h4>Linked List</h4>
                            </div>
                    </Link>

                            
                    <Link to={`/binary-search-tree`}>
                            <div className="card">
                                
                                        <img className='img-size' src="/images/bstbig.png"></img>
                                        <h4>Binary Search Tree</h4>
                                
                            </div>
                    </Link>
                    <Link to={`/queue`}>
                            <div className="card">
                                        <img className='img-size' src="/images/queuebig.png"></img>
                                        <h4>Queue</h4>
                             </div>
                    </Link>
                    <Link to={`/stack`}>
                            <div className="card">
                                
                                        <img className='img-size' src="/images/stackbig.png"></img>
                                        <h4>Stack</h4>
                        </div>
                    </Link>
                </div>
            </div>
           
        )
    }
}
