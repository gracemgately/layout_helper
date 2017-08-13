import history from '../history'

const GET_BSTNODE = 'GET_BSTNODE'
const ADD_SINGLE_BST_NODE = 'ADD_SINGLE_BST_NODE'
const REMOVE_SINGLE_BST_NODE = 'REMOVE_SINGLE_BST_NODE'


export const getBSTNode = node => ({ type: GET_BSTNODE, node })
export const addSingleBSTNode = node => ({ type: ADD_SINGLE_BST_NODE, node })
export const removeSingleBSTNode = node => ({ type: REMOVE_SINGLE_BST_NODE, node })




function BST() {
    this.root = null;
    this.size = 0;
}


//Node constructor
class BinarySearchTree {
    constructor(ele) {
        this.element = ele;
        this.left = null;
        this.right = null;
    }

    //Insert new element ele
    insert(ele) {
        if (this.root == null)
            this.root = this.createNewNode(ele); // Create a new root
        else {
            // Find the parent node
            var parent = null;
            var current = this.root;
            while (current != null)
                if (item < current.element) {
                    parent = current;
                    current = current.left;
                }
                else if (ele > current.element) {
                    parent = current;
                    current = current.right;
                }
                else
                    return false; // Will not insert a duplicate node

            // Create new node and attach it to the parent node
            if (ele < parent.element) {
                parent.left = this.createNewNode(ele);
            }
            else {
                parent.right = this.createNewNode(ele);
            }
        }
    }

    //delete an element
    //return true if successfully deleted
    //return false if element is not in the tree
    remove(ele) {
        // Locate the node to be deleted and also locate its parent node
        var parent = null;
        var current = this.root;
        while (current != null) {
            if (ele < current.element) {
                parent = current;
                current = current.left;
            }
            else if (ele > current.element) {
                parent = current;
                current = current.right;
            }
            else
                break;
        }

        if (current == null)
            return false; // Element is not in the tree

        // If the current element has no left children
        if (current.left == null) {
            // Connect the parent with the right child of the current node
            if (parent == null) {
                root = current.right;
            }
            else {
                if (ele < parent.element)
                    parent.left = current.right;
                else
                    parent.right = current.right;
            }
        }
        else {
            // If the current node has a left child
            // Find the rightmost node in the left subtree of
            // the current node and its parent
            var parentOfRightMost = current;
            var rightMost = current.left;

            while (rightMost.right != null) {
                parentOfRightMost = rightMost;
                rightMost = rightMost.right; // Continue traversing to the right
            }

            // Replace the element in current by the element in rightMost
            current.element = rightMost.element;

            // Eliminate rightmost node
            if (parentOfRightMost.right == rightMost)
                parentOfRightMost.right = rightMost.left;
            else
                // If the parentOfRightMost == current
                parentOfRightMost.left = rightMost.left;
        }

        this.size--;
        return true; // Element inserted
    }
    isEmpty() {
        return this.root == null; //return true if the tree is empty
    }

    getSize() {
        return this.size;
    }
}



// create a new Binary Search Tree class, which will hold all the nodes
const bstList = new BinarySearchTree();

export default function (state = {}, action) {
  switch (action.type) {
    case GET_BSTNODE:
      return action.node
    case ADD_SINGLE_BST_NODE:

      list.insert(action.node.value);
      const newState = bstList;

      return newState;

    case REMOVE_SINGLE_BST_NODE:

      bstList.remove(action.node.value);

      return newState;

        default:
      return state
  }
}


