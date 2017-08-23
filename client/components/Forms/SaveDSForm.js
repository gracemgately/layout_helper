//LIBRARIES
import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

//UTILS & STORE
import { breadthFirstForEach_, arrayifyBst, removeEmptyChildren } from '../../utils';

class SaveDSForm extends Component {

  constructor(props) {
    super(props);
    const { content, userId } = props;

    this.state = {
      name: name,
      content: content,
      userId,
      saveStatus: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const name = evt.target.value;
    this.setState({name, content: this.props.content})
  }

  handleSubmit(evt) {
    evt.preventDefault();

    axios.post('/api/binarysearchtrees', {
      name: this.state.name,
      content: this.state.content,
      userId: this.state.userId

    })
      .then(res => {
        console.log(res);
        if (res.status === 200){
          this.setState({saveStatus: true})
        };
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <div>
      <div>
      </div>
      <form id="form-group-left">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="name.."
          />
        <br />
          <button className="buttonstyle" type="click" onClick={(evt) => this.handleSubmit(evt)} >Save</button>
          { this.state.saveStatus ? <div className="saved-ds"> {this.state.name} has been saved! </div> : null }
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


