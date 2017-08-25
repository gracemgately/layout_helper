//LIBRARIES
import React from 'react'
import { connect } from 'react-redux'
import history from '../history'

//UTILS & STORE
import { nodeArray_, moveCount } from '../utils'
import { node } from '../store'

const InsertionTime = (props) => {
    const { nodes, nodeCount }  = props;
    const nodeArr = (nodeArray_(nodes));
    const nodeArrLength = (nodeArray_(nodes)).length;
    const moves = moveCount(nodeArr)[0];
    const bigO = moveCount(nodeArr)[1];

    return (
    <div>
        <h3 className="runtime">Operation took <span className="runtimeInline">{nodeArrLength}</span> moves. Expected <span className="runtimeInline">{moves}</span> moves based on <span className="runtimeInline">{bigO}</span> upper-bound time complexity. </h3>
    </div>
  )
}

const mapState = (state) => {
    return {
      nodes: state.node,
      nodeCount: state.node.nodeCount
    }
  }


  export default connect(mapState, null)(InsertionTime);
