'use strict';
import history from '../history'

const GET_BSTNODE = 'GET_BSTNODE'
const ADD_SINGLE_BST_NODE = 'ADD_SINGLE_BST_NODE'
const REMOVE_SINGLE_BST_NODE = 'REMOVE_SINGLE_BST_NODE'
const FIRST_BST_NODE = 'FIRST_BST_NODE';

export const getBSTNode = node => ({ type: GET_BSTNODE, node })
export const addSingleBSTNode = value => ({ type: ADD_SINGLE_BST_NODE, value })
export const removeSingleBSTNode = node => ({ type: REMOVE_SINGLE_BST_NODE, node })
export const firstBSTNode = value => ({ type: FIRST_BST_NODE, value })


class BinarySearchTree {
    constructor(value, parent) {
        this.value = value;
        this.magnitude = 1;
        this.left = null;
        this.right = null;
        this.parent = parent;
    }
    insert(value) {
        this.magnitude++;
        if (this.value === undefined) return this.value = value;
        var direction = value < this.value ? 'left' : 'right';
        if (!this[direction]) this[direction] = new BinarySearchTree(value, this);
        else this[direction].insert(value);
    }
    contains(value) {
        if (this.value === value) return true;
        var direction = value < this.value ? 'left' : 'right';
        if (this[direction]) return this[direction].contains(value);
        else return false;
    }

    size(value) {
        return this.magnitude; 
    }
}

const initialTree = new BinarySearchTree();




export default function (state = initialTree, action) {

    switch (action.type) {
        case FIRST_BST_NODE:
            return Object.assign({}, state)
        
        case ADD_SINGLE_BST_NODE:
        
        var rootNode = state;
        rootNode.insert(action.value);

        return Object.assign(state, {
            initialTree: rootNode, 
            BSTNodeCount: rootNode.magnitude
        });

        default:
            return state
    }
}


