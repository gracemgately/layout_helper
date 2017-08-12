import history from '../history'

const GET_NODE = 'GET_NODE'
const ADD_SINGLE_LL_NODE = 'ADD_SINGLE_LL_NODE'

const getNode = node => ({ type: GET_NODE, node })
const addSingleLLNode = node => ({ type: ADD_SINGLE_LL_NODE, value })


//ES6 class declaration to create a node object which can have the following
//properties (or they can be null). Based on which properties are not null,
//we can determine what data structure and arrows??? should be rendered
class Node {
  constructor(value, next, previous, parent, child){
    this.value = value;
    this.next = next;
    this.previous = previous;
    this.parent = parent;
    this.child = child;
  }
}

//creating a headNode for the LL and setting it in the initial
//state -- we will have to change this somehow for other DS 
//that don't start with a head node
const headNode = new Node('head', null, null, null, null);

const initialState = [headNode];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NODE:
      return action.node
    case ADD_SINGLE_LL_NODE:
      //find last node in the array and create a new node with the value
      //sent in from the add form on the front
      var oldLastNode = state[state.length - 1];
      var newLastNode = new Node(action.value, null, null, null, null)

      //setting the pointer on the last node in the array to the new node, 
      //and then storing both the last node and the new node in the array
      oldLastNode.next = newLastNode;

      //make a copy of the current state and replace the second-to-last
      //element with the edited lastNode and the last element with the 
      //new node -- this should also work with the head node (don't)
      //know how to do this with the spread operator :( )
      var newState = state
      newState[newState.length - 2] = oldLastNode;
      newState[newState.length - 1] = newLastNode;

      return newState;

    default:
      return state
  }
}

