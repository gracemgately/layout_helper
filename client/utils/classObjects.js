
import { breadthFirstForEach, drawBSTNode2 } from '../components'

/*

NodeClass
LinkedListClass
BinarySearchTreeClass

*/

export class NodeClass {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

//-------------------------------

export class LinkedListClass {

  constructor() {
    this.head = null;
    this.tail = null;
    this.nodeCount = 0;
    this.toggledStatus = false;
  }

  addToHead(v) {

    const newNode = new NodeClass(v);
    const formerHead = this.head;
    this.nodeCount++;

    this.head = newNode;

    if (formerHead) {
      formerHead.previous = newNode;
      newNode.next = formerHead;
    }

    if (!this.tail) this.tail = newNode;

  }

  addToTail(item) {
    const newNode = new NodeClass(item);
    const oldTail = this.tail;
    this.nodeCount++;

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

  addAtIndex(value, index, list) {

    let newNode = new NodeClass(value);
    let currentNode = search(index, list);
    this.nodeCount++;

    let prev = currentNode.previous;
    prev.next = newNode;
    newNode.next = currentNode;
    currentNode.previous = newNode;
    newNode.previous = prev;

  }

  removeHead() {
    const oldHead = this.head;
    this.nodeCount--;

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
    this.nodeCount--;

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

  removeAtIndex(index, list) {
    this.nodeCount--;
    let deletedNode = search(index, list);
    let prevNode = deletedNode.previous;
    prevNode.next = deletedNode.next;
    deletedNode.previous = prevNode;
  }

}

// external search function converts LinkedListClass class to an ordered array and search at specific index
const search = (index, list) => {

    // {this.head = 1: { next:4 { next: 16 { next:34 }}}}
    // keep looking at next node until next node === idx
    // let nodeCount = this.nodeCount;
    let currentNode = Object.assign({}, list.head);
    let counter = 0;
    // loop while there is next node and counter is <= idx -1
    while (currentNode.next !== null && counter <= (index - 1)) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;

  }

//-------------------------------

export class BinarySearchTreeClass {
  constructor(value) {
      this.value = value;
      this.magnitude = 1;
      this.left = null;
      this.right = null;
      this.colored = false;
      this.bstCount = 0;
  }
  insert(node) {
      this.bstCount++;
      if (typeof node !== 'object') {
          node = new BinarySearchTreeClass(node);
      }
      this.magnitude++;
      if (this.value === undefined) {
          this.value = node.value;
          return;
      }
      var direction = node.value < this.value ? 'left' : 'right';
      node.parent = this;
      if (!this[direction]) this[direction] = node;
      else this[direction].insert(node);
  }
  contains(value) {
      if (this.value === value) return this;
      var direction = value < this.value ? 'left' : 'right';
      if (this[direction]) return this[direction].contains(value);
      else return false;
  }


  remove(value) {
      this.bstCount--;
      const deleteRef = this.contains(value);
      if (!deleteRef) return false;
      deleteRef.die();
  }

  die() {
      if ((!this.parent) && (!this.left) && (!this.right)) {
          this.value = undefined;
          return;
      }
      if ((!this.parent && this.left) || (!this.parent && this.right)) {
          var side = this.left ? 'left' : 'right';
          this.value = this[side].value
          this[side].parent = null;
          this[side] = null;
          return;
      }

      var direction = (this.parent.right && (this.value === this.parent.right.value)) ? 'right' : 'left';

      var otherDirection = direction === 'right' ? 'left' : 'right';
      this.parent[direction] = null;
      if (this[direction] && this[otherDirection]) {
          this.parent.insert(this.right);
          this.parent.insert(this.left);
      } else if (this[direction]) { this.parent.insert(this[direction]) }
  }

  depthFirstForEach(type) {
      const fill = 'yellow';

      if (type === 'Depth First: In-order') {

          if (this.left) this.left.depthFirstForEach(type);
          drawBSTNode2(this, fill);

          //idea is that once the node is processed, the drawBSTNode
          //function will be triggered with a fill setting andthe node will
          //be redrawn with yellow fill, much like in the peek functions of stack and queue....


          if (this.right) this.right.depthFirstForEach(type);
      }
      if (type === 'Depth First: Pre-order') {
          this.colored = true;

          drawBSTNode2(this, fill)

          if (this.left) { this.left.depthFirstForEach(type); }
          if (this.right) { this.right.depthFirstForEach(type); }
      }

      if (type === 'Depth First: Post-order') {
          if (this.left) { this.left.depthFirstForEach(type); }
          if (this.right) { this.right.depthFirstForEach(type); }

          drawBSTNode2(this, fill)
      }
  }
}
