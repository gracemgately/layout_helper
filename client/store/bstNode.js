'use strict';
import history from '../history'
import { arrayifyBst, removeEmptyChildren } from '../utils'
import { breadthFirstForEach, drawBSTNode2 } from '../components'

const GET_BSTNODE = 'GET_BSTNODE'
const ADD_SINGLE_BST_NODE = 'ADD_SINGLE_BST_NODE'
const REMOVE_SINGLE_BST_NODE = 'REMOVE_SINGLE_BST_NODE'
const ARRAYIFY_CLASS_BST = 'ARRAYIFY_CLASS_BST'
const TRAVERSE_TREE = 'TRAVERSE_TREE'

export const getBSTNode = node => ({ type: GET_BSTNODE, node })
export const addSingleBSTNode = value => ({ type: ADD_SINGLE_BST_NODE, value })
export const removeSingleBSTNode = node => ({ type: REMOVE_SINGLE_BST_NODE, node })
export const arrayifyClassBST = bst => ({ type: ARRAYIFY_CLASS_BST, bst })
export const traverseTree = BSTtype => ({
    type: TRAVERSE_TREE, BSTtype

})

class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.magnitude = 1;
        this.left = null;
        this.right = null;
    }
    insert(node) {
        if (typeof node !== 'object') {
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

            // drawBSTNode2(this, fill);
            // console.log('this node', this);
            //idea is that once the node is processed, the drawBSTNode function will be triggered with a fill setting andthe node will be redrawn with yellow fill, much like in the peek functions of stack and queue....


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


const initialTree = new BinarySearchTree();
const bstDemo = new BinarySearchTree();
bstDemo.insert(8);
bstDemo.insert(4);
bstDemo.insert(12);
bstDemo.insert(2);
bstDemo.insert(6);
bstDemo.insert(10);
bstDemo.insert(14);
// bstDemo.insert(1);
// bstDemo.insert(3);
// bstDemo.insert(5);
// bstDemo.insert(7);
// bstDemo.insert(9);
// bstDemo.insert(11);
// bstDemo.insert(13);
// bstDemo.insert(15);
// const step = 0;
// const JSXArr = {};

export default function (state = { initialTree, bstDemo }, action) {

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

        case TRAVERSE_TREE:
            // console.log('state', state);
            // const newJSX = JSXArr.slice(0);
            // console.log('newJSX', newJSX);
            // const utilFn = findJSXVal(newJSX);
            bstDemo.depthFirstForEach(action.BSTtype.BSTtype);
            // return newJSX;
            return Object.assign({}, bstDemo);

        default:
            return state
    }
}

