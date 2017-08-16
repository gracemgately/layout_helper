import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export default class SaveLLForm extends Component {

  constructor(props) {
    super(props);


    this.state = {
      name: name,
      content: LLNodeArray(props.content),
      userId: props.user.id
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

    axios.post('/api/linkedlists', obj)
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
            placeholder="add name for your linked list"
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

const LLNodeArray = (nodeArray) => {
    nodeArray.map((node, index) => {
        if (index === nodeArray.length - 1){
            node.next = null;
            node.previous = index-1;
        }
        else if (index === 0){
            node.next = index+1;
            node.previous = null;
        }
        else {
            node.next = index+1;
            node.previous = index-1;
        }
    })
    return nodeArray;
}
