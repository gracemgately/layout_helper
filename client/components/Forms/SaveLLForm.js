import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

export default class SaveLLForm extends Component {

  constructor(props) {
    super(props);

    const userId = 1;

    this.state = {
      name: name,
      content: LLNodeArray(props.content),
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

    //console.log('tree', util.inspect(this.state.content, { showHidden: true, depth: null }));
    //const saveObj = JSON.stringify(util.inspect(obj, { showHidden: true, depth: null }));
    // axios.post('/api/datastructures', obj)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))

  }

  render() {
    console.log('state content', this.state.content)

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
