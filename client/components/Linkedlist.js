import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {RightArrow, createNode} from '../components'


/**
 * COMPONENT
 */
const Linkedlist = (props) => {

  const { nodes } = props
  console.log(nodes);

  return ( 
    <div>
    <form>
      <input type="submit" value="Submit" />
    </form>

    <div className="container">
      {
        (nodes.map((node, idx) => {
            return (
              <div className="basicnode" key={idx} id={idx}>
                {createNode(node)}
                {(idx !== nodes.length-1) ?
                RightArrow(node) : null}
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


  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

/**
 * CONTAINER
 */
const mapState = (state) => {
  //console.log('state', state)
  return {
    nodes: state.node
  }
}

const mapDispatch = (state) => {
  //console.log('here is state', state)
  return {
    values: state
  }
}

export default connect(mapState, null)(Linkedlist);
