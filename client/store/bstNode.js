import history from '../history'

const GET_BSTNODE = 'GET_BSTNODE'
const ADD_SINGLE_BST_NODE = 'ADD_SINGLE_BST_NODE'
const REMOVE_SINGLE_BST_NODE = 'REMOVE_SINGLE_BST_NODE'
const FIRST_BST_NODE = 'FIRST_BST_NODE';

export const getBSTNode = node => ({ type: GET_BSTNODE, node })
export const addSingleBSTNode = node => ({ type: ADD_SINGLE_BST_NODE, node })
export const removeSingleBSTNode = node => ({ type: REMOVE_SINGLE_BST_NODE, node })
export const firstBSTNode = node => ({ type: FIRST_BST_NODE, node })

'use strict';

class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.magnitude = 1;
        this.left = null;
        this.right = null;
    }
    insert(value) {
        this.magnitude++;
        var direction = value < this.value ? 'left' : 'right';
        if (!this[direction]) this[direction] = new BinarySearchTree(value);
        else this[direction].insert(value);
    }
    contains(value) {
        if (this.value === value) return true;
        var direction = value < this.value ? 'left' : 'right';
        if (this[direction]) return this[direction].contains(value);
        else return false;
    }
    //   delete (value) {
    //       if (contains(value) === true) {

    //       } else {
    //           return false;
    //       }

    //   }

    size(value) {
        return this.magnitude; // O(1) time
        // // alternative by walking the tree in O(n) time
        // var size = 0;

        // if (this) { size++ }
        // size += this.left && this.left.size()
        // size += this.right && this.right.size()

        // return size;
    }
}




// create a new Binary Search Tree class, which will hold all the nodes
var bstList = new BinarySearchTree();

export default function (state = {}, action) {

    switch (action.type) {
        case FIRST_BST_NODE:
            var firstNode = new BinarySearchTree(value);
            return Object.assign({}, state, { initialTree: firstNode })
        case GET_BSTNODE:
            return action.node
        case ADD_SINGLE_BST_NODE:
            bstList.insert(action.node.value);
            var newState = bstList;
            return newState;

        case REMOVE_SINGLE_BST_NODE:
            bstList.remove(action.node.value);
            var newState = bstList;
            return newState;

        default:
            return state
    }
}


