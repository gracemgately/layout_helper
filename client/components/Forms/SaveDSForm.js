import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { breadthFirstForEach_ } from '../../utils';

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


