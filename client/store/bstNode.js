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
//     breadthFirstForEach (iterator, queue) {
//         console.log('this', this);
//         queue = queue || [this];
//         if (!queue.length) return;
//         var tree = queue.shift();
//         if (tree.left) queue.push(tree.left);
//         if (tree.right) queue.push(tree.right);
//         console.log('tree', tree)
//         tree.breadthFirstForEach(iterator, queue);
//         console.log('queue', queue);
//         return iterator(tree);
//   };

    //   delete (value) {
    //       if (contains(value) === true) {

    //       } else {
    //           return false;
    //       }

    //   }

    size(value) {
        return this.magnitude; 
    }
}

var initialTree = new BinarySearchTree(5);
initialTree.insert(2);
initialTree.insert(50);
initialTree.insert(40);
initialTree.insert(100);
initialTree.insert(37);
initialTree.insert(46);




export default function (state = initialTree, action) {

    switch (action.type) {
        case FIRST_BST_NODE:
            return Object.assign({}, state)
        
        // case GET_BSTNODE:
        //     return action.node
        
        case ADD_SINGLE_BST_NODE:
        
        var rootNode = state.initialTree;
        rootNode.insert(action.value);

        return Object.assign({}, state, {
            initialTree: rootNode, 
            BSTNodeCount: rootNode.magnitude
        });

        case REMOVE_SINGLE_BST_NODE:
            bstList.remove(action.node.value);
            var newState = bstList;
            return newState;

        default:
            return state
    }
}


