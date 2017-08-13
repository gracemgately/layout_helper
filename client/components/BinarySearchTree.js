import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { drawNode } from '../components'
import AddNodeForm from './AddNodeForm';
import DeleteNodeForm from './DeleteNodeForm';
/**
 * COMPONENT
 */
const BinarySearchTree = (props) => {
  return (
    <div>
     this will be a binary search tree
    </div>
  )
}
/*
 * CONTAINER
 */
export default connect(null)(BinarySearchTree);


