import React from 'react'
import { connect } from 'react-redux'
import { node } from '../store'
import history from '../history'
import { BSTMoveCount, breadthFirstForEach } from '../utils'

const BSTInsertionTime = (props) => {
    // const { nodes, bstCount }  = props;
    // const bstArr = (breadthFirstForEach(nodes));
    // const bstArrLength = (breadthFirstForEach(nodes)).length;
    // const moves = BSTMoveCount(bstArr)[0];
    // const bigO = BSTMoveCount(bstArr)[1];
    // console.log("PROPS BST", props);
    // console.log("BSTNODECOUNT", bstCount);
    // console.log("MOVES", moves);
    // console.log("NODES", nodes);
    // console.log("bstArr", bstArr);

    return (
    <div>
        {/*<h3 className="runtime">Operation took <span className="runtimeInline">{bstArrLength}</span> moves. Expected <span className="runtimeInline">{moves}</span> number of moves based on <span className="runtimeInline">{bigO}</span> time complexity. </h3>*/}
    </div>
  )
}

const mapState = (state) => {
    return {
      nodes: state.nodes,
      // bstCount: state.node.bstCount,
    }
  }


  export default connect(mapState, null)(BSTInsertionTime);
