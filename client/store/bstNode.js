'use strict';
import history from '../history'
import { breadthFirstForEach } from '../components'

const GET_BSTNODE = 'GET_BSTNODE'
const ADD_SINGLE_BST_NODE = 'ADD_SINGLE_BST_NODE'
const REMOVE_SINGLE_BST_NODE = 'REMOVE_SINGLE_BST_NODE'

export const getBSTNode = node => ({ type: GET_BSTNODE, node })
export const addSingleBSTNode = value => ({ type: ADD_SINGLE_BST_NODE, value })
export const removeSingleBSTNode = node => ({ type: REMOVE_SINGLE_BST_NODE, node })

class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.magnitude = 1;
        this.left = null;
        this.right = null;
    }
    insert(node) {
        if (typeof node !== 'object'){
            node = new BinarySearchTree(node);
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
        const deleteRef = this.contains(value);
        if (!deleteRef) return false;
        deleteRef.die();
    }
  
    die() {
        if ((!this.parent) && (this.left.value !==null && this.right.value !== null)) {
            console.log("THIS1", this)
            // var currNode = this; //10
            // var currLeft = this.left; //5
            // var currRight = this.right; //20

            // currRight.insert(currLeft); //inserting 5 to left of 20
            // currNode = currRight //currNode = 20
            // currLeft = null;

            this.right.insert(this.left);
            // this.left.value = this.right.left.value;
            this.value = null;
            return;
        }
        console.log("THIS", this)
        var direction = (this.parent.right && (this.value === this.parent.right.value)) ? 'right' : 'left';

        var otherDirection = direction === 'right' ? 'left' : 'right';
        this.parent[direction] = null;
        if (this[direction] && this[otherDirection]){
            this.parent.insert(this.right);
            this.parent.insert(this.left);
        } else if ( this[direction] ) {this.parent.insert(this[direction])}
    }
}


const initialTree = new BinarySearchTree();

export default function (state = initialTree, action) {
    switch (action.type) {
        case ADD_SINGLE_BST_NODE:
            initialTree.insert(action.value);
            return Object.assign({}, initialTree);

        case REMOVE_SINGLE_BST_NODE:
            initialTree.remove(action.node)
            return Object.assign({}, initialTree);
        default:
            return state
    }
}

