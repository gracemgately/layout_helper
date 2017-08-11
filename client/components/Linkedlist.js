import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { logout } from '../store'
import {RightArrow} from '../components'

const Linkedlist = (props) => {

  const deleteItem = 43;
  const arr = [1, 2, 43, 23, 67, 78, 79];
  console.log('rightarrow ', RightArrow());

  return (
    <div>
    <form>
      <label>

        <input type="number" />
      </label>
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

const createNode = (data) => {
  return (

    <svg>
      <circle className="circle1" cx="25" cy="25" r="25"> </circle>

      <text x="50%" y="50%" textAnchor="middle" stroke="#51c5cf " strokeWidth="2px" dy=".3em">{data}</text>

      </svg>

 );
}

// const createRightArrow = (data) => {
//   return (
//     <p className="arrowsize">
//       {'\u27f6'}
//     </p>
//   )
// }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

export default Linkedlist;
