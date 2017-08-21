import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { breadthFirstForEach_, arrayifyBst, removeEmptyChildren } from '../../utils';

class SaveDSForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: name
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.SaveDS = this.SaveDS.bind(this);
  }

  handleChange(evt) {
    const name = evt.target.value;
    this.setState({name, content: this.props.content})
  }

  handleSubmit(evt) {
    evt.preventDefault();

    axios.post('/api/binarysearchtrees', {
      name: this.state.name,
      content: this.state.content
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  // SaveDS() {

  // //  // convert bst to heap array
  // //   let content = arrayifyBst(obj);
  // //   content = removeEmptyChildren(content);
  //   // console.log('this.state.content ', this.state.content)

  //   axios.post('/api/binarysearchtrees', {
  //     name: this.state.name,
  //     content: this.state.content
  //   })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))

  // }

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

const mapState = (state) => {
  return {
    content: state.bstNode.array
  }
}

export default connect(mapState, null)(SaveDSForm);


