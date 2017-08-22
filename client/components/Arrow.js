import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { logout } from '../store'

// export const Arrow = (props) => {


//   return (
//     <div> arrow tests
//     <div>{RightArrow()}</div>
//     <div>{LeftArrow()}</div>
//     <div>{UpArrow()}</div>
//     <div>{DownArrow()}</div>
//     <div>{SouthEastArrow()}</div>
//     <div>{SouthWestArrow()}</div>
//     <div>{BidirectionalLeftRightArrow()}</div>
//     <div>{BidirectionalUpDownArrow()}</div>
//     <div>{doubleLeftRightArrow()}</div>
//     </div>
//   )

// }

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
    <p className="arrowsizeSE">
      {'\u2199'}
    </p>
  )
}

export const SouthWestArrow = (data) => {
  return (
    <p className="arrowsize">
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


