import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {

  const { children, handleClick, isLoggedIn } = props;


  return (
    <div>
      <div className="navtop-container" >
        <div className="logo" >
          <h1 className="logo">  N O D E  &nbsp;&nbsp; L E G O</h1>
        </div>
        {/* <div className="navtop-container-2" >
          <div className="log-in" >
            <Link to="/login">Log in</Link>
          </div> /
          <div className="sign-up">
            <Link to="/signup">Sign up</Link>
          </div>
        </div> */}
      </div>
      <nav>
        {
          isLoggedIn ?
            <div className="nav-tools">
              {/* The navbar will show these links after you log in */}
              <div className="nav-menu">
                <Link to="/">Home  </Link>
                <Link to="/linked-list">Linked List</Link>
                <Link to="/binary-search-tree">Binary Search Tree</Link>
                <Link to="/queue">Queue</Link>
                <Link to="/stack">Stack</Link>
                <Link to="/my-data-structures">My Data Structures</Link>
                <Link to="/bstDemo">BST Types</Link>
              </div>
              <div className="navtop-container-2" >
                <div >
                  <a href="#" onClick={handleClick}>Logout </a>
                </div>
              </div>
            </div> :
            <div className=" nav-tools">
              {/* The navbar will show these links before you log in */}

              <div className="nav-menu">
                <Link to="/">Home </Link>
                <Link to="/linked-list">Linked List</Link>
                <Link to="/binary-search-tree">Binary Search Tree</Link>
                <Link to="/queue">Queue</Link>
                <Link to="/stack">Stack</Link>
                <Link to="/bstDemo">BST Types</Link>
                <br />
              </div>

              <div className="navtop-container-2" >
                <div className="log-in" >
                  <Link to="/login">Log in</Link>
                </div> /
                <div className="sign-up">
                  <Link to="/signup">Sign up</Link>
                </div>
              </div>
            </div>
        }
      </nav>
      <hr />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
