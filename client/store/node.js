import history from '../history'
import { LinkedListClass } from '../utils'

const GET_NODE = 'GET_NODE'
const ADD_NODE_TO_TAIL = 'ADD_NODE_TO_TAIL'
const ADD_NODE_TO_HEAD = 'ADD_NODE_TO_HEAD'
const SEARCH_NODE = 'SEARCH_NODE'
const DELETE_NODE_FROM_TAIL = 'DELETE_NODE_FROM_TAIL'
const DELETE_NODE_FROM_HEAD = 'DELETE_NODE_FROM_HEAD'
const DELETE_AT_INDEX = 'DELETE_AT_INDEX'
const HIGHLIGHT_NODE_AT_INDEX = 'HIGHLIGHT_NODE_AT_INDEX'
const TOGGLE_COLOR = 'TOGGLE_COLOR'
const CLEAN_STATE = 'CLEAN_STATE'


export const getNode = node => ({ type: GET_NODE, node })
export const addNodeToTail = node => ({ type: ADD_NODE_TO_TAIL, node })
export const addNodeToHead = node => ({ type: ADD_NODE_TO_HEAD, node })
export const searchNode = node => ({ type: SEARCH_NODE, node })
export const deleteNodeFromTail = () => ({ type: DELETE_NODE_FROM_TAIL })
export const deleteNodeFromHead = () => ({ type: DELETE_NODE_FROM_HEAD })
export const deleteAtIndex = node => ({ type: DELETE_AT_INDEX, node })
export const highlightNodeAtIndex = index => ({ type: HIGHLIGHT_NODE_AT_INDEX, index })
export const toggleColor = flip => ({ type: TOGGLE_COLOR, flip })
export const cleanState = () => ({ type: CLEAN_STATE })


// create a new linkedlist class, which will hold all the nodes
var list = new LinkedListClass();


export default function (state = list, action) {
  switch (action.type) {
    case GET_NODE:
      return action.node
    case ADD_NODE_TO_TAIL:
      list.addToTail(action.node.value);
      // do not pass by reference!  use Object.assign{} to return new object and signal that state is updated
      return Object.assign({}, list);
    case ADD_NODE_TO_HEAD:
      list.addToHead(action.node.value);
      // do not pass by reference!  use Object.assign{} to return new object and signal that state is updated
      return Object.assign({}, list);
    case DELETE_NODE_FROM_TAIL:
      list.removeTail();
      return Object.assign({}, list);
    case DELETE_NODE_FROM_HEAD:
      list.removeHead();
      return Object.assign({}, list);
    case SEARCH_NODE:
      list.addAtIndex(action.node.value, action.node.index);
      return Object.assign({}, list);
    case DELETE_AT_INDEX:
      list.removeAtIndex(action.node.index);
      return Object.assign({}, list);
    case HIGHLIGHT_NODE_AT_INDEX:
      return Object.assign({}, state, { highlightIdx: action.index })
    case TOGGLE_COLOR:
      return Object.assign({}, state, { toggledStatus: action.flip } )
    case CLEAN_STATE:
      list = new LinkedListClass();
      return Object.assign({}, list)
    default:
      return state
  }
}
