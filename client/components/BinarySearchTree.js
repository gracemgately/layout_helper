import React, {Component} from 'react'
import { connect } from 'react-redux'
import { breadthFirstForEach, drawBSTnodes } from '../components'
import {breadthFirstForEach_, arrayifyBst, groupBstNodes} from '../utils'
import AddBSTNodeForm from './Forms/AddBSTNodeForm';
import DeleteBSTNodeForm from './Forms/DeleteBSTNodeForm';
import bstNode, { cleanBSTState } from '../store';
import SaveDSForm from './Forms/SaveDSForm';
import { CSSTransitionGroup } from 'react-transition-group';
import UploadCSV from './Forms/UploadCSV'



/**
 * COMPONENT
 */
class BinarySearchTree extends Component {

  componentWillUnmount(){
    // this.props.cleanStateValues();
  }

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


    let arr = this.state.array;
    if (this.props.location.query) arr = this.props.location.query.content;
    this.asyncCalls(arr);

  }

  componentWillReceiveProps(nextProps) {

    console.log('nextProps ', nextProps);
    let arr = nextProps.array;
    if (nextProps.BST !== this.state.BST) {
      console.log('next props...');
      if (this.props.location.query) arr = this.props.location.query.content;
      this.setState({ BST: nextProps.BST, array: arr });
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

    console.log('this.props.location.query in bst', this.props.location.query);


      return (

        <div>

          <h1> Binary Search Tree </h1>

          {//only render forms to edit DS if it is not a previously-saved one
            this.props.location.query ?
              <h2>Name: {this.props.location.query.name}</h2>
              :


              <div className='formDisplay' >
                <AddBSTNodeForm />
                <DeleteBSTNodeForm />
                <SaveDSForm content={this.props.array} userId={this.props.user.id} />

              </div>

          }
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

  const mapDispatch = (dispatch) => {
    return {
      cleanStateValues(){
        dispatch(cleanBSTState())
      }
    }
  }


export default connect(mapState, mapDispatch)(BinarySearchTree);
