import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export default class SaveDSForm extends Component {

  constructor(props) {
    super(props);
    // const { userId, category, content } = props;
    const userId = 1;
    const category = "Linked List";
    // const content = props.content;
    const name = "Me";

    this.state = {
      name: name,
      content: props.content,
      category: category,
      userId: userId
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

    console.log('obj', obj);

    axios.post('/api/datastructures', obj)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

  render() {

    console.log('this.state ', this.state);
    return (
      <div>
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
