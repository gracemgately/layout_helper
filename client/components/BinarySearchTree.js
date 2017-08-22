import React, {Component} from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach, drawBSTnodes } from '../components'
import {breadthFirstForEach_, arrayifyBst, groupBstNodes} from '../utils'
import AddBSTNodeForm from './Forms/AddBSTNodeForm';
import DeleteBSTNodeForm from './Forms/DeleteBSTNodeForm';
import bstNode from '../store';
import SaveDSForm from './Forms/SaveDSForm';
import { CSSTransitionGroup } from 'react-transition-group';
import UploadCSV from './Forms/UploadCSV';
import BSTInsertionTime from './BSTInsertionTime';



/**
 * COMPONENT
 */
const BinarySearchTree = (props) => {

  const { BST, user } = props;
  //console.log("QUERY", props.location.query);
  // bstArr.sort((a, b) => {
  //   return a.level - b.level;
  // })

  let groups = []; // initialize array
  // [[node],[node, node],[node, node]] // each index is level

  // const bstArr = props.location.query ? props.location.query : breadthFirstForEach(BST);

  //NOTE: we will rewrite this once we determine the mathematical pattern
  //if (props.location.query) {
  //   groups[1] = [];
  //   groups[2] = [];
  //   groups[3] = [];
  //   props.location.query.map((node) => {
  //     if (node.parent === null) {
  //       groups[0] = [];
  //       groups[0].push(node);
  //     } else if (node.parent === 0) {
  //       groups[1].push(node);
  //     } else if (node.parent === 1 || node.parent === 2) {
  //       groups[2].push(node);
  //     } else if (node.parent === 3 || node.parent === 2 || (node.parent === 1 || node.parent === 2))


  //     if (!groups[level]) groups[level] = [];
  //     groups[level].push(node);
  //   })
  // } else {
  const bstArr = breadthFirstForEach(BST);

  bstArr.map(([node, level]) => {
    if (!groups[level]) groups[level] = [];
    groups[level].push(node);
  })
  // }



  return (

    <div>


        <h2> Binary Search Tree </h2>
        {//only render forms to edit DS if it is not a previously-saved one
        props.location.query ?
        <h2>Name: {props.location.query.name}</h2>
        :

        <div className='formDisplay' >
          <AddBSTNodeForm />
          <DeleteBSTNodeForm />
          <UploadCSV DSType={'binarysearchtree'}/>
          <SaveDSForm content={BST} userId={props.user.id}/>
        </div>
        }
        <div className="container">
    

                <CSSTransitionGroup
                  transitionName="fade"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500} >

                  {
                    groups.map((ele, index) => {
                      return (
                        <div className={'bstlevel' + index} key={index}>
                          {
                            ele.map((node, idx) => {
                              return (
                              <div key={idx}>
                                {node}
                              </div>)
                            })
                          }

                        </div>)
                    })
                  }
                </CSSTransitionGroup>

      </div>
      <BSTInsertionTime />
</div>
  )
class BinarySearchTree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      array: props.array,
      BST: props.BST,
      groups: []
    }
    this.asyncCalls = this.asyncCalls.bind(this);

    console.log('props ', props);
  }



  // // send arrayified bst nodes, get drawings and parentIdx values back
  // let bstDivs = drawBSTnodes(cleanBST);

  // // group the bstDivs by parentIdx groups
  // let groups = groupBstNodes(bstDivs);
  componentDidMount() {
    this.asyncCalls();
    console.log('component mounted');

  }

  componentWillReceiveProps(nextProps) {

    console.log('nextProps ', nextProps);
    if (nextProps.BST !== this.state.BST) {
      console.log('next props...');
      this.setState({ BST: nextProps.BST, array: nextProps.array });
      this.asyncCalls(nextProps.array);
    }
  }


  asyncCalls(arr) {
        // send arrayified bst nodes, get drawings and parentIdx values back
    const bstDivs = drawBSTnodes(arr);

        // group the bstDivs by parentIdx groups

    let groups = groupBstNodes(bstDivs);

    console.log('groups ', groups);

    this.setState({ groups: groups });
  }


  render() {

    console.log('this.props.array.... ', this.props.array);

    console.log('this.state.array.... ', this.state.array);

      return (

        <div>

          <h1> Binary Search Tree </h1>
          <div className='formDisplay' >
            <AddBSTNodeForm />
            <DeleteBSTNodeForm />
            <SaveDSForm content={this.props.array} userId={this.props.user.id}/>

          </div>
          <div className="container">
            {
              this.state.groups.map((ele, index) => {
                return (
                  <div className={'bstlevel' + index} key={index}>
                    {
                      ele.map((node, idx) => {
                        return (<div key={idx}>{node}</div>)
                      })
                    }
                  </div>)
              })
            }
          </div>
        </div>
      )
    }
}



  const mapState = (state) => {
    return {
      user: state.user,
      BST: state.bstNode,
      array: state.bstNode.array
    }

  }


export default connect(mapState, null)(BinarySearchTree);
