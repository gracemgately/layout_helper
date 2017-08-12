import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { RightArrow, createNode } from '../components'
import AddNodeForm from './AddNodeForm';

//COMPONENT
const Linkedlist = (props) => {


  // now arr holds [{node: 2}, {node: 47}]...
  var arr = Object.values(props.nodes);

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
                {createNode(el.node)}
                {console.log('el.node ', el.node)}
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
