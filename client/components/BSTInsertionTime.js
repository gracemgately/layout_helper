//LIBRARIES
import React from 'react'
import { connect } from 'react-redux'
import history from '../history'

//UTILS & STORE
import { node } from '../store'
import { BSTMoveCount } from '../utils'

const BSTInsertionTime = (props) => {
    const { nodes, bstCount }  = props;
    const bstArr = props.bstArr || [];
    const bstArrLength = bstArr.length;
    const moves = BSTMoveCount(bstArr)[0];
    const bigO = BSTMoveCount(bstArr)[1];

    return (
    <div>
        <h3 className="runtime">Operation took <span className="runtimeInline">{bstArrLength}</span> moves. Expected <span className="runtimeInline">{moves}</span> number of moves based on <span className="runtimeInline">{bigO}</span> time complexity. </h3>
    </div>
  )
}

const mapState = (state) => {
    return {
      nodes: state.nodes,
      bstArr: state.bstNode.array,
    }
  }


  export default connect(mapState, null)(BSTInsertionTime);
