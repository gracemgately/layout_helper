import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'


const Stack = (props) => {
    return (
    <div>       
        <h1> Stack </h1>
    <div>

      </div>
    </div>
    )
}

const mapState = (state) => {
  //console.log('state', state);
  return {
    state
  }
}

const mapDispatch = (dispatch) => {
    return {
        empty: 'empty'
    }
}

export default connect(mapState, mapDispatch)(Stack);

