'use strict';
import history from '../history'
import { arrayifyBst, removeEmptyChildren, getRandomNumbersArr } from '../utils'
import { breadthFirstForEach, drawBSTNode2 } from '../components'

const GET_BSTNODE = 'GET_BSTNODE'
const ADD_SINGLE_BST_NODE = 'ADD_SINGLE_BST_NODE'
const REMOVE_SINGLE_BST_NODE = 'REMOVE_SINGLE_BST_NODE'
const ARRAYIFY_CLASS_BST = 'ARRAYIFY_CLASS_BST'
const TRAVERSE_TREE = 'TRAVERSE_TREE'
const GET_ARRAY = 'GET_ARRAY'
const CLEAN_BST_STATE = 'CLEAN_BST_STATE'
const GET_RANDOM_BST = 'GET_RANDOM_BST'

export const getBSTNode = node => ({ type: GET_BSTNODE, node })
export const addSingleBSTNode = value => ({ type: ADD_SINGLE_BST_NODE, value })
export const removeSingleBSTNode = node => ({ type: REMOVE_SINGLE_BST_NODE, node })
export const arrayifyClassBST = bst => ({ type: ARRAYIFY_CLASS_BST, bst })

export const toggleBSTColor = flip => ({ type: TOGGLE_BST_COLOR, flip })
export const traverseTree = BSTtype => ({ type: TRAVERSE_TREE, BSTtype })
export const getArray = array => ({ type: GET_ARRAY, array })
export const cleanBSTState = () => ({ type: CLEAN_BST_STATE })
export const getRandomBst = () => ({ type: GET_RANDOM_BST })

class BinarySearchTree {
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
bstDemo.insert(16);
bstDemo.insert(12);
bstDemo.insert(8);
bstDemo.insert(14)
bstDemo.insert(20);
bstDemo.insert(18);
bstDemo.insert(22);
// bstDemo.insert(1);
// bstDemo.insert(3);
// bstDemo.insert(5);
// bstDemo.insert(7);
// bstDemo.insert(9);
// bstDemo.insert(11);
// bstDemo.insert(13);
// bstDemo.insert(15);
const toggledBSTStatus = false;

const step = 0;
const JSXArr = {};
const randomBST = new BinarySearchTree();

export default function (state = { initialTree, bstDemo, step, JSXArr, toggledBSTStatus }, action) {
    switch (action.type) {
        case ADD_SINGLE_BST_NODE:
            initialTree.insert(action.value);
            return Object.assign({}, initialTree);
        case REMOVE_SINGLE_BST_NODE:
            initialTree.remove(action.node)
            return Object.assign({}, initialTree);

        // case GET_ARRAY:
        //     return Object.assign({}, action.JSXArr )

        case ARRAYIFY_CLASS_BST:
            let arrayBST = arrayifyBst(state)
            let arrayBST2 = removeEmptyChildren(arrayBST);
            return Object.assign({}, state, { array: arrayBST2 });

        case TRAVERSE_TREE:
            bstDemo.depthFirstForEach(action.BSTtype.BSTtype);
            // return newJSX;
            return Object.assign({}, bstDemo);
        // case HIGHLIGHT_BST_NODE_AT_INDEX:
        //     //console.log('here', action.index)
        //     return Object.assign({}, state, { highlightIdx: action.index })
        //   case TOGGLE_BST_COLOR:
        //     console.log('flip reducer', action.flip)
        //     console.log('this.state reducer', toggledBSTStatus, state)

        //     return Object.assign({}, state, { toggledBSTStatus: action.flip } )

        case CLEAN_BST_STATE:
            return Object.assign({}, {});

        case GET_RANDOM_BST:
            let arr = getRandomNumbersArr();

            for (let i = 0; i < arr.length; i++){
                randomBST.insert(arr[i]);
            }
            return Object.assign({}, randomBST);

        default:
            return state
    }
}

