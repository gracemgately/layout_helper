//LIBRARIES
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

//UTILS & STORE
import { logout } from '../store'

export const RightArrow = (data) => {
  return (
    <p className="arrowsize">
      {'\u27f6'}
    </p>
  )
}

export const LeftArrow = (data) => {
  return (
    <p className="arrowsize">
      {'\u27f5'}
    </p>
  )
}

export const UpArrow = (data) => {
  return (
    <p className="arrowsize">
      {'\u2191'}
    </p>
  )
}

export const DownArrow = (data) => {
  return (
    <p className="arrowsize">
      {'\u2193'}
    </p>
  )
}

export const SouthEastArrow = (data) => {
  return (
    <p className="arrowsize arrowRotateRight">
      {'\u2199'}
    </p>
  )
}

export const SouthWestArrow = (data) => {
  return (
    <p className="arrowsize arrowRotateLeft">
      {'\u2199'}
    </p>
  )
}

export const BidirectionalLeftRightArrow = (data) => {
  return (
    <p className="arrowsize">
      {'\u27f7'}
    </p>
  )
}

export const BidirectionalUpDownArrow = (data) => {
  return (
    <p className="arrowsize">
      {'\u2195'}
    </p>
  )
}

export const doubleLeftRightArrow = (data) => {
  return (
    <p className="arrowsize">
      {'\u21c4'}
    </p>
  )
}


