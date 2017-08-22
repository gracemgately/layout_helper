import history from '../history'

const GET_NODE = 'GET_NODE'
const ADD_NODE_TO_TAIL = 'ADD_NODE_TO_TAIL'
const ADD_NODE_TO_HEAD = 'ADD_NODE_TO_HEAD'
const SEARCH_NODE = 'SEARCH_NODE'
const DELETE_NODE_FROM_TAIL = 'DELETE_NODE_FROM_TAIL'
const DELETE_NODE_FROM_HEAD = 'DELETE_NODE_FROM_HEAD'
const DELETE_AT_INDEX = 'DELETE_AT_INDEX'
const HIGHLIGHT_NODE_AT_INDEX = 'HIGHLIGHT_NODE_AT_INDEX'
const TOGGLE_COLOR = 'TOGGLE_COLOR'
const CLEAN_STATE = 'CLEAN_STATE'


export const getNode = node => ({ type: GET_NODE, node })
export const addNodeToTail = node => ({ type: ADD_NODE_TO_TAIL, node })
export const addNodeToHead = node => ({ type: ADD_NODE_TO_HEAD, node })
export const searchNode = node => ({ type: SEARCH_NODE, node })
export const deleteNodeFromTail = () => ({ type: DELETE_NODE_FROM_TAIL })
export const deleteNodeFromHead = () => ({ type: DELETE_NODE_FROM_HEAD })
export const deleteAtIndex = node => ({ type: DELETE_AT_INDEX, node })
export const highlightNodeAtIndex = index => ({ type: HIGHLIGHT_NODE_AT_INDEX, index })
export const toggleColor = flip => ({ type: TOGGLE_COLOR, flip })
export const cleanState = () => ({ type: CLEAN_STATE })


//ES6 class declaration to create a node object which can have the following
//properties (or they can be null). Based on which properties are not null,S
//we can determine what data structure and arrows??? should be rendered
class Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.toggledStatus = false;
  }

  addToHead(v) {

    const newNode = new Node(v);
    const formerHead = this.head;

    this.head = newNode;

    if (formerHead) {
      formerHead.previous = newNode;
      newNode.next = formerHead;
    }

    if (!this.tail) this.tail = newNode;

  }

  addToTail(item) {
    const newNode = new Node(item);
    const oldTail = this.tail;

    this.tail = newNode;

    if (!this.head) {
      this.head = this.tail;
    }

    if (oldTail) {
      oldTail.next = newNode;
      newNode.previous = oldTail;
    }
  }


    // PREV -- 'NEW'(insertion)  -- CURR

  addAtIndex(value, index) {

    let newNode = new Node(value);
    let currentNode = search(index);

    let prev = currentNode.previous;
    prev.next = newNode;
    newNode.next = currentNode;
    currentNode.previous = newNode;
    newNode.previous = prev;

  }

  removeHead() {
    const oldHead = this.head;

    if (!oldHead) return;

    if (oldHead.next) {
      this.head = oldHead.next;
      this.head.previous = null;
    } else { // if there is no item == no head
      this.head = null;
      this.tail = null;
    }

    return oldHead.value;
  }

  removeTail() {
    const oldTail = this.tail;

    if (!oldTail) return;

    if (oldTail.previous) {
      this.tail = oldTail.previous;
      this.tail.next = null;
    } else { // if there is no item == no head
      this.head = null;
      this.tail = null;
    }

    return oldTail.value;
  }

  removeAtIndex(index) {
    let deletedNode = search(index);
    console.log('deleted node', deletedNode)
    let prevNode = deletedNode.previous;
    prevNode.next = deletedNode.next;
    deletedNode.previous = prevNode;
  }

}

// create a new linkedlist class, which will hold all the nodes
var list = new LinkedList();
// // initialize list
// list.addToTail(1);
// list.addToTail(4);
// list.addToTail(16);
// list.addToTail(34);

// external search function converts LinkedList class to an ordered array and search at specific index
const search = (index) => {

  // {this.head = 1: { next:4 { next: 16 { next:34 }}}}
  // keep looking at next node until next node === idx

  let currentNode = Object.assign({}, list.head);
  let counter = 0;
  // loop while there is next node and counter is <= idx -1
  while (currentNode.next !== null && counter <= (index - 1)) {
    currentNode = currentNode.next;
    counter++;
  }
  console.log('found node at index ', currentNode);
  return currentNode;

}


export default function (state = list, action) {
  switch (action.type) {
    case GET_NODE:
      return action.node
    case ADD_NODE_TO_TAIL:
      list.addToTail(action.node.value);
      // do not pass by reference!  use Object.assign{} to return new object and signal that state is updated
      return Object.assign({}, list);
    case ADD_NODE_TO_HEAD:
      list.addToHead(action.node.value);
      // do not pass by reference!  use Object.assign{} to return new object and signal that state is updated
      return Object.assign({}, list);
    case DELETE_NODE_FROM_TAIL:
      list.removeTail();
      return Object.assign({}, list);
    case DELETE_NODE_FROM_HEAD:
      list.removeHead();
      return Object.assign({}, list);
    case SEARCH_NODE:
      list.addAtIndex(action.node.value, action.node.index);
      return Object.assign({}, list);
    case DELETE_AT_INDEX:
      list.removeAtIndex(action.node.index);
      return Object.assign({}, list);
    case HIGHLIGHT_NODE_AT_INDEX:
      //console.log('here', action.index)
      return Object.assign({}, state, { highlightIdx: action.index })
    case TOGGLE_COLOR:
      return Object.assign({}, state, { toggledStatus: action.flip } )
    case CLEAN_STATE:
      list = new LinkedList();
      return Object.assign({}, list)
    default:
      return state
  }
}
