import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { logout } from '../store'

const Node = (props) => {


  return (
    <div className="container">
      {createNode()}
      {createRightArrow()}
    </div>

  )


}

const createNode = (data) => {
  return (

    <svg height="100px" width="100">
        <circle className="circle1" cx="25" cy="25" r="25">Hello </circle>

      </svg>

 );
}

const createRightArrow = (data) => {
  return (
  <p className="arrowsize">
    {'\u27f6'}
  </p>

  )
}

export default Node;
