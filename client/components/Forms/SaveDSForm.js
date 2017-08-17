import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export default class SaveDSForm extends Component {

  constructor(props) {
    super(props);
    const { content } = props;
    //const userId = 1;
    //const category = "Linked List";
    // const content = props.content;
    //const name = "Me";

    this.state = {
      name: name,
      content: content
      // category: category,
      // userId: userId
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.SaveDS = this.SaveDS.bind(this);
  }

  ComponentDidMount(){
  }

  handleChange(evt) {
    const name = evt.target.value;
    this.setState({name})
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.SaveDS(this.state.content);
  }

  SaveDS(obj) {

   // convert bst to heap array
    let content = breadthFirstForEach_(obj);

    axios.post('/api/binarysearchtrees', {
      name: this.state.name,
      content
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

  render() {


    return (
      <div>
      <div>
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

  let queue = [BST];
  let collection = [];
  let counter = 0;
  while (counter < 40) {

    let current = queue.shift();
    (current.left) ?  queue.push(current.left) : queue.push("empty");
    (current.right) ? queue.push(current.right) : queue.push("empty");

    collection.push({
      value: current.value,
      left: childrenIdx(counter)[0],
      right: childrenIdx(counter)[1],
      parent: parentIdx(counter)
    });
    counter++;
  }
  console.log('collection ', collection);
  return collection;

}



function parentIdx(childIdx) {
  if (childIdx === 0) return null;
  return Math.floor( (childIdx-1) / 2)
}


function childrenIdx(parentIdx) {
  return [parentIdx * 2 + 1, (parentIdx + 1) * 2]
}
