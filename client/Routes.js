import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, UserHome, Home, NewLL, BinarySearchTree, Queue, Stack, AllUserDS} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {

  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {

    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        {/*<Main>*/}
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/linked-list" component={NewLL} />
            <Route path="/binary-search-tree" component={BinarySearchTree} />
            <Route path="/queue" component={Queue} />
            <Route path="/stack" component={Stack} />
            {
              isLoggedIn ?
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route exact path="/" component={Main} />
                  <Route path="/home" component={Main} />
                  <Route exact path="/linked-list" component={NewLL} />
                  <Route path="/binary-search-tree" component={BinarySearchTree} />
                  <Route path="/queue" component={Queue} />
                  <Route path="/stack" component={Stack} />
                  <Route path="/my-data-structures" component={AllUserDS}/>
                </Switch> : null
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Main} />
          </Switch>
        {/*</Main>*/}
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
