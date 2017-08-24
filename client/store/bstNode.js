'use strict';
import history from '../history'
import { arrayifyBst, removeEmptyChildren, getRandomNumbersArr, BinarySearchTreeClass } from '../utils'


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




let initialTree = new BinarySearchTreeClass();
const bstDemo = new BinarySearchTreeClass();
bstDemo.insert(16);
bstDemo.insert(12);
bstDemo.insert(8);
bstDemo.insert(14)
bstDemo.insert(20);
bstDemo.insert(18);
bstDemo.insert(22);

const toggledBSTStatus = false;

const step = 0;
const JSXArr = {};
const randomBST = new BinarySearchTreeClass();

export default function (state = { initialTree, bstDemo, step, JSXArr, toggledBSTStatus }, action) {
    switch (action.type) {
        case ADD_SINGLE_BST_NODE:
            initialTree.insert(action.value);
            return Object.assign({}, initialTree);

        case REMOVE_SINGLE_BST_NODE:
            initialTree.remove(action.node)
            return Object.assign({}, initialTree);

        case ARRAYIFY_CLASS_BST:
            let arrayBST = arrayifyBst(state)
            let arrayBST2 = removeEmptyChildren(arrayBST);
            return Object.assign({}, state, { array: arrayBST2 });

        case TRAVERSE_TREE:
            bstDemo.depthFirstForEach(action.BSTtype.BSTtype);
            // return newJSX;
            return Object.assign({}, bstDemo);

        case CLEAN_BST_STATE:
            initialTree = new BinarySearchTreeClass();
            return Object.assign({}, initialTree, {array: []});

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

