import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

/**
 * COMPONENT
 */
const AllUserDS = (props) => {

    return(
        <div>user DS here</div>
    )
}

/*
 * CONTAINER
 */

const mapState = (state) => {
  console.log('state', state)
  return {
    user: state.user
  }
}


// const mapDispatch = (dispatch) => {

// return {
//   values: state
// }
// }

export default connect(mapState, null)(AllUserDS);
