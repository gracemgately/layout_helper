import history from '../history'

const GET_NODE = 'GET_NODE'
const ADD_NODE_TO_TAIL = 'ADD_NODE_TO_TAIL'
const ADD_NODE_TO_HEAD = 'ADD_NODE_TO_HEAD'
// const REMOVE_SINGLE_LL_NODE = 'REMOVE_SINGLE_LL_NODE'


export const getNode = node => ({ type: GET_NODE, node })
export const addNodeToTail = node => ({ type: ADD_NODE_TO_TAIL, node })
export const addNodeToHead = node => ({ type: ADD_NODE_TO_HEAD, node })
// export const removeSingleLLNode = node => ({ type: REMOVE_SINGLE_LL_NODE, node })


//ES6 class declaration to create a node object which can have the following
//properties (or they can be null). Based on which properties are not null,
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

  removeOne() {
    const oldTail = this.tail;
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      var previous = this.head;
      var current = previous.next;
      while (current) {
        if (current.data === val) {
          previous.next = current.next;
          current = current.next;
          break;
        } else {
          previous = current;
          current = current.next;
        }
      }
    }
  }
}


// create a new linkedlist class, which will hold all the nodes
const list = new LinkedList();
// initialize list
list.addToTail(1);
list.addToTail(4);
list.addToTail(16);
list.addToTail(34);


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

    // case REMOVE_SINGLE_LL_NODE:

    //   list.removeOne(action.node.value);
    //   // newState = list;

    //   return newState;

    default:
      return state
  }
}

