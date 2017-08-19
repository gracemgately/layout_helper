import history from '../history'
import { arrayifyBst, removeEmptyChildren } from '../utils'

const GET_CLEAN_BST = 'GET_CLEAN_BST'

// INITIAL STATE
const initialState = {
  arrayBST: []
};


const getCleanBST = bst => ({ type: GET_CLEAN_BST, bst });


export const cleanBST = bst =>
  dispatch => {
    let arrayBST = arrayifyBst(bst);
    arrayBST = removeEmptyChildren(arrayBST);
    dispatch(getCleanBST(arrayBST));
}


export default function (state = initialState, action) {
  switch (action.type) {
      case GET_CLEAN_BST:
        return Object.assign({}, state, { arrayBST: action.bst });

      default:
          return state
  }
}
