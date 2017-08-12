import history from '../history'

const GET_NODE = 'GET_NODE'
const ADD_SINGLE_LL_NODE = 'ADD_SINGLE_LL_NODE'


export const getNode = node => ({ type: GET_NODE, node })
export const addSingleLLNode = node => ({ type: ADD_SINGLE_LL_NODE, node })


//ES6 class declaration to create a node object which can have the following
//properties (or they can be null). Based on which properties are not null,
//we can determine what data structure and arrows??? should be rendered
class Node {
  constructor(value, next=null, previous=null, parent=null, child=null){
    this.value = value;
    this.next = next;
    this.previous = previous;
    this.parent = parent;
    this.child = child;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(item) {
    const newNode = new Node(item);
    const oldHead = this.head;

    this.head = newNode;

    if (!this.tail) this.tail = this.head;

    if (oldHead) {
      oldHead.previous = newNode;
      newNode.next = oldHead;
    }

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
    case ADD_SINGLE_LL_NODE:
      list.addToTail(action.node.value);
      // console.log('list ', list);

      const newState = list;

      return newState;

    default:
      return state
  }
}

