import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import store, { getAllUserDS } from '../store'
import { FetchUserDS } from '../store'
import DeleteSingleUserDS from './Forms/DeleteSingleUserDS'

import { _Time } from '../utils'

/**
 * COMPONENT
 */
class SingleUserDS extends Component {

  componentDidMount() {
    store.dispatch(FetchUserDS(this.props.user.id));

    var canvas = this.refs.myCanvas;
    var c = canvas.getContext("2d");

    //create the container that will hold the boincing balls.
    var container = {
      x: 0,
      y: 0,
      width: 400,
      height: 200
    };
    //create the array of circles that will be animated
    var circles = [{
      x: 50,
      y: 100,
      r: 5,
      vx: 5,
      vy: 5,
      color: 173
    }, {
      x: 150,
      y: 80,
      r: 10,
      vx: 5,
      vy: 8,
      color: 173
    }, {
      x: 90,
      y: 150,
      r: 5,
      vx: 5,
      vy: 5,
      color: 173
    }, {
      x: 100,
      y: 50,
      r: 2,
      vx: 8,
      vy: 5,
      color: 173
    }, {
      x: 100,
      y: 50,
      r: 2,
      vx: 8,
      vy: 5,
      color: 173
    },{
      x: 100,
      y: 50,
      r: 2,
      vx: 8,
      vy: 5,
      color: 173
    }, {
      x: 100,
      y: 50,
      r: 2,
      vx: 8,
      vy: 5,
      color: 173
    }];

    function animate() {
      //draw the container
      c.fillStyle = "#EDEAE5";
      c.fillRect(container.x, container.y, container.width, container.height);

      //loop throughj the circles array
      for (var i = 0; i < circles.length; i++) {
        //draw the circles
        c.fillStyle = 'hsl(' + circles[i].color++ + ', 57%, 47%)';
        c.beginPath();
        c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
        c.fill()

        //time to animate our circles ladies and gentlemen.
        if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
          circles[i].vx = -circles[i].vx;
        }

        if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
          circles[i].vy = -circles[i].vy;
        }

        circles[i].x += circles[i].vx
        circles[i].y += circles[i].vy
      }

      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

  }

  render() {

    const { user, userBST, userLL, userQueues, userStacks } = this.props;

    return (
      <div>
        <div id="userDScontainer-left">
          <div id="userDSitem">
            <div id="DSTitle"> My Binary Search Trees </div>
            <div>{
              userBST.map((el, idx) => {
                return (
                  <div id="singleDS" key={idx}>
                    <DeleteSingleUserDS DSId={el.id} DSType={'binarysearchtrees'} />
                    <Link to={{ pathname: '/binary-search-tree', query: el }}>{el.name} Date Created: {_Time(el.createdAt)}</Link>
                  </div>
                )
              })
            }
            </div>
          </div>
          <div id="userDSitem">
            <div id="DSTitle"> My Linked Lists </div>
            <div>{
              userLL.map((el, idx) => {
                return (
                  <div id="singleDS" key={idx}>
                    <DeleteSingleUserDS DSId={el.id} DSType={'linkedlists'} />
                    <Link to={{ pathname: '/linked-list', query: el }}>{el.name} Date Created: {_Time(el.createdAt)}</Link>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
        <div id="userDScontainer-right">
          <div id="userDSitem">
            <div id="DSTitle"> My Queues </div>
            <div>{
              userQueues.map((el, idx) => {
                return (
                  <div id="singleDS" key={idx}>
                    <DeleteSingleUserDS DSId={el.id} DSType={'queues'} />
                    <Link to={{ pathname: '/queue', query: el }}>{el.name} Date Created: {_Time(el.createdAt)}</Link>
                  </div>
                )
              })
            }
            </div>
          </div>
          <div id="userDSitem">
            <div id="DSTitle"> My Stacks </div>
            <div>{
              userStacks.map((el, idx) => {
                return (
                  <div id="singleDS" key={idx}>
                    <DeleteSingleUserDS DSId={el.id} DSType={'stacks'} />
                    <Link to={{ pathname: '/stack', query: el }}>{el.name} Date Created: {_Time(el.createdAt)}</Link>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
        <canvas ref="myCanvas" className="bounce-canvas"></canvas>
      </div>
    )
  }
}


/*
 * CONTAINER
 */

const mapState = (state) => {
  return {
    user: state.user,
    userBST: state.singleuserds.BinarySearchTrees,
    userLL: state.singleuserds.LinkedLists,
    userQueues: state.singleuserds.Queues,
    userStacks: state.singleuserds.Stacks
  }
}

export default connect(mapState, null)(SingleUserDS);

