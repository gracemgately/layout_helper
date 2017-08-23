import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import ReactFileReader from 'react-file-reader';

import { addNodeToTail, addSingleBSTNode, arrayifyClassBST } from '../../store'

class UploadCSV extends Component {

    constructor(props){
        super(props);
        //DSType is passed down from the component which holds the UploadCSV
        //component: we want to know which kind of DS to create and render
        this.state = {
            DSType: props.DSType
        }
        this.handleFiles = this.handleFiles.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFiles = files => {
        const reader = new FileReader();
    
        reader.onload = (e) => {
            //file values come in as a string, split into an array and
            //map to number values
            const fileValues = reader.result.split('\n').map(stringVal => {
                return parseInt(stringVal);
            });
            //setting these number values on the local state
            this.setState({arrToRender: fileValues})
        }
        reader.readAsText(files[0])
    }

    handleSubmit(evt){
        evt.preventDefault();
        if (this.state.DSType === 'linkedlist' || 
            this.state.DSType === 'queue' ||
            this.state.DSType === 'stack') {
        //for each value, dispatch the adding functionality 
        //passed down from mapToDispatch
            this.state.arrToRender.forEach(value => {
                this.props.handleTailSubmit(evt, value);
            });
        }
        else if (this.state.DSType === 'binarysearchtree'){
            this.state.arrToRender.forEach(value => {
                this.props.addSingleBSTNode(value);
                this.props.callArrayfyBST(this.props.bstNode);
            });
        }
    }

    render(){
        // console.log('state', this.state);
        // console.log('props', this.props);
        return(
            <div>
            {/*tell the user their file has been uploaded and display the submit button only
            if the state has received the values (from the file) to render*/}
                <ReactFileReader handleFiles={this.handleFiles}>
                        Upload a CSV:<button className='btn'>Upload</button>
                </ReactFileReader>
            {this.state.arrToRender ? 
                    <div>
                    File Uploaded!
                    <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                : null}
            </div>
        )
    }
}


const mapState = (state) => {
    return {
        bstNode: state.bstNode,
    }

}

const mapDispatch = (dispatch) => {
    return {
        handleTailSubmit(evt, nodeValue){
        evt.preventDefault();
        dispatch(addNodeToTail({ value: +nodeValue }))
        }, 
        addSingleBSTNode: (value) => dispatch(addSingleBSTNode(value)),
        callArrayfyBST: (BST) => dispatch(arrayifyClassBST(BST))
    }            
}




export default connect(null, mapDispatch)(UploadCSV);