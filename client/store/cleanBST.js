import history from '../history'
import { arrayifyBst, removeEmptyChildren } from '../utils'

const GET_CLEAN_BST = 'GET_CLEAN_BST'

// INITIAL STATE
const initialState = {
  arrayBST: []
};


const getCleanBST = bst => ({ type: GET_CLEAN_BST, bst });


// export const cleanBST = bst =>
//   dispatch => {
//     return arrayifyBst(bst)
//       .then(arrayBST => {
//         removeEmptyChildren(arrayBST)
//       })
//       .then(cleanArray => {
//         getCleanBST(cleanArray)
//       })
//       .then(result => {
//         dispatch(result)
//       })
//   }


//   export const cleanBST = bst =>
//   dispatch => {
//     dispatch(
//       getCleanBST(
//         removeEmptyChildren(arrayifyBst(bst))
//       )
//     )
//   }



// export const cleanBST = bst =>
//   dispatch => {
//     let arrayBST = arrayifyBst(bst);
//     arrayBST = removeEmptyChildren(arrayBST);
//     dispatch(getCleanBST(arrayBST));
//   }

  export const cleanBST = bst =>
    dispatch => {
      dispatch(getCleanBST(bst));
  }


export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CLEAN_BST:
      console.log('action.bst ', action.bst);
        return Object.assign({}, { arrayBST: action.bst });

      default:
          return state
  }
}
