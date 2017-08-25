//LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'

//UTILS & STORE
import store, { writeNode, addNodeToTail, deleteNodeFromTail, toggleColor, highlightNodeAtIndex } from '../../store'

class StackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dirty: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleTailSubmit = this.handleTailSubmit.bind(this);
    }

    handleChange(evt) {
        store.dispatch(writeNode(Number(evt.target.value)));
        this.setState({
            dirty: true
        })
    }

    handleTailSubmit(evt, nodeValue) {
        evt.preventDefault();
        store.dispatch(addNodeToTail({ value: +nodeValue }))
        store.dispatch(writeNode(''))
        this.setState({
            dirty: false
        })
    }

    render() {
        const numerified = Number(this.props.newNode);
        console.log(numerified);
        const noNumbers = /^[0-9]+$/;
        console.log(noNumbers.test('yes'));
        const nodeArr = this.props.nodeArr;

        return (
            <div>
                <form id="form-group"  >
                    <div>
                        {(Number.isNaN(numerified) || numerified === 0) && this.state.dirty ? <div className="alert alert-warning">Please enter a number</div> : null
                        }
                        <input
                            type="text"
                            onChange={this.handleChange}
                            placeholder="add a node"
                            name="node"
                            size="12"
                        />

                        <br />
                        <button
                            className="buttonstyle" type="click"
                            disabled={numerified === 0 || Number.isNaN(numerified)} onClick={(evt) => this.props.handleTailSubmit(evt, this.props.newNode)}
                            onClick={(evt) => this.handleTailSubmit(evt, this.props.newNode)} >Add Item
                        </button>
                        <button className="buttonstyle" type="click" name="tail" onClick={(evt) => this.props.handlePopSubmit(evt, nodeArr[nodeArr.length - 1])} > Pop Item</button>
                        <button className="buttonstyle" type="click" onClick={(evt) => this.props.handlePeek(evt, !this.props.toggled, nodeArr)}> PEEK </button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapState = (state) => {
    return {
        nodes: state.node,
        newNode: state.writeNode.newNode,
        highlightIndex: state.node.highlightIdx,
        toggled: state.node.toggledStatus

    }
}

const mapDispatch = (dispatch) => {
    return {
        handlePopSubmit(evt, lastNode) {
            evt.preventDefault();
            dispatch(deleteNodeFromTail());

        },
        handlePeek(evt, flip, nodeArr) {
            evt.preventDefault();
            dispatch(toggleColor(flip));
            dispatch(highlightNodeAtIndex(nodeArr.length - 1))
        }
    }
}

export default connect(mapState, mapDispatch)(StackForm);

