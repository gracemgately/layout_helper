'use strict';
import history from '../history'
import { breadthFirstForEach } from '../components'
import { arrayifyBst, removeEmptyChildren } from '../utils'

const GET_BSTNODE = 'GET_BSTNODE'
const ADD_SINGLE_BST_NODE = 'ADD_SINGLE_BST_NODE'
const REMOVE_SINGLE_BST_NODE = 'REMOVE_SINGLE_BST_NODE'
const ARRAYIFY_CLASS_BST = 'ARRAYIFY_CLASS_BST'

export const getBSTNode = node => ({ type: GET_BSTNODE, node })
export const addSingleBSTNode = value => ({ type: ADD_SINGLE_BST_NODE, value })
export const removeSingleBSTNode = node => ({ type: REMOVE_SINGLE_BST_NODE, node })
export const arrayifyClassBST = bst => ({ type: ARRAYIFY_CLASS_BST, bst })

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
        if ((!this.parent) && (!this.left) && (!this.right)){
            this.value = undefined;
            return;
        }
        if ((!this.parent && this.left)  || (!this.parent && this.right) ){
            var side = this.left ? 'left' : 'right';
            this.value = this[side].value
            this[side].parent = null;
            this[side] = null;
            return;
        }

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

        case ARRAYIFY_CLASS_BST:
            let arrayBST = arrayifyBst(state)
            console.log('state in ARRAYIFY_CLASS_BST', state);

            console.log('arrayBST in ARRAYIFY_CLASS_BST', arrayBST);
            let arrayBST2 = removeEmptyChildren(arrayBST);
            console.log('arrayBST2 in ARRAYIFY_CLASS_BST', arrayBST2);
            return Object.assign({}, state, { array: arrayBST2 });

        default:
            return state
    }
}

