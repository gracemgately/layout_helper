import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export default class SaveDSForm extends Component {

  constructor(props) {
    super(props);
    // const { userId, category, content } = props;
    //const userId = 1;
    //const category = "Linked List";
    // const content = props.content;
    //const name = "Me";

    this.state = {
      // name: name,
      // content: null,
      // category: category,
      // userId: userId
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.SaveDS = this.SaveDS.bind(this);
  }

  handleChange(evt) {
    const name = evt.target.value;
    this.setState({name})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.SaveDS(this.state);
  }

  SaveDS(obj) {

    //console.log('tree', util.inspect(this.state.content, { showHidden: true, depth: null }));
    //const saveObj = JSON.stringify(util.inspect(obj, { showHidden: true, depth: null }));
    // axios.post('/api/datastructures', obj)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))

  }

  render() {


    return (
      <div>
      <div>
      { breadthFirstForEach_(this.props.content)}
      </div>
      <form id="form-group"  >
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="add name for your data structure"
          />
        </div>
        <br />
        <div className="input-group-btn">
          <button type="click" onClick={(evt) => this.handleSubmit(evt)} >Save</button>

        </div>
      </form>
    </div>
    )
  }


}

const breadthFirstForEach_ = (BST) => {
  var collection = [];
  var queue = [BST];
  var tree;
  var left = 0;
  var right = 0;
  var parent = null;

  while (queue.length) {
    tree = queue.shift();
    console.log("tree", tree);

    left*=2 + 1;
    right*=2 + 2;

    collection.push({
      value: tree.value,
      left: left,
      right: right,
      //each left and right index for that node increments by two 
      parent: parentFinder(collection, tree)
    });

    left*=2 + 1;
    right*=2 + 2;

    tree.left ? queue.push(tree.left) : queue.push({
      value: null,
      left: left,
      right: right,
      //each left and right index for that node increments by two 
      parent: tree.value
    });

    left*=2 + 1;
    right*=2 + 2;

    tree.right ? queue.push(tree.right) : queue.push({
      value: null,
      left: left,
      right: right,
      //each left and right index for that node increments by two 
      parent: tree.value
    });
        console.log('collection', collection);
  }
    return collection;
}

//find the object/node in the collection whose value is the same 
//as the passed-in node's parent's value, return the index
function parentFinder(coll, node) {
  for (let i = 0; i < coll.length; i++){
    if (coll[i].value === node.parent.value){
      return i;
    }
  }
  return null;
}