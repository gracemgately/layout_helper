import React from 'react'
import { connect } from 'react-redux'
import { writeNode, addNodeToTail, deleteNodeFromTail, highlightNodeAtIndex } from '../../store'

const StackForm = (props) => {
    const nodeArr = props.nodeArr;

    return (
        <div>
            <form id="form-group"  >
                <div>
                    <input
                        type="text"
                        onChange={props.handleChange}
                        placeholder="add item to stack"
                        name="node"
                    />
                <br />
                    <button type="click" name="head" onClick={(evt) => props.handleTailSubmit(evt, props.newNode)} >Add Item</button>
                    <button type="click" name="tail" onClick={(evt) => props.handlePopSubmit(evt, nodeArr[nodeArr.length - 1])} > Pop Item</button>
                    <button type="click" onClick={(evt) => props.handlePeek(evt, nodeArr.length - 1)} > PEEK </button>
                </div>
            </form>
        </div>
    )
}


const mapState = (state) => {
    return {
        nodes: state.node,
        newNode: state.writeNode.newNode,
        highlightIndex: state.node.highlightIdx
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleChange(evt) {
            dispatch(writeNode(Number(evt.target.value)));
        },
        handleTailSubmit(evt, nodeValue) {
            evt.preventDefault();
            dispatch(addNodeToTail({ value: +nodeValue }))
            dispatch(writeNode(''))
        },
        handlePopSubmit(evt, lastNode) {
            evt.preventDefault();
            dispatch(deleteNodeFromTail());

        },
        handlePeek(evt, index) {
            evt.preventDefault();
            console.log(index);
            dispatch(highlightNodeAtIndex(index));
        }
    }
}

export default connect(mapState, mapDispatch)(StackForm);

