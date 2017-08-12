import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { RightArrow, createNode } from '../components'
import AddNodeForm from './AddNodeForm';

//COMPONENT
const Linkedlist = (props) => {

  var arr = props.nodes;

  return (
    <div>
      <div>
      <AddNodeForm />
      </div>
      <div className="container">
        {
          (arr.map((el, idx) => {
            return (
              <div className="basicnode" key={idx} id={idx}>
                {createNode(el)}
                {(idx !== arr.length - 1) ?
                  RightArrow(el) : null}
              </div>
            )
          }))

        }
      </div>
    </div>
  )


}

// const deleteNode = (num) => {
//   return ()
// }

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    nodes: state.node,
  }
}


export default connect(mapState)(Linkedlist);
