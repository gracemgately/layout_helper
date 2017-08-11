import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {RightArrow, createNode} from '../components'


//COMPONENT
const Linkedlist = (props) => {

  var arr = props.nodes;

  return ( 
    <div>
    <form>
      <input type="submit" value="Submit" />
    </form>

    <div className="container">
      {
        (arr.map(( el, idx) => {
            return (
              <div className="basicnode" key={idx} id={idx}>
                {createNode(el)}
                {(idx !== arr.length-1) ?
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


  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    nodes: state.node
  }
}

const mapDispatch = (state) => {
  console.log('here is state', state)
  return {
    values: state.user.email
  }
}

export default connect(mapState, null)(Linkedlist);
