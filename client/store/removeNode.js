import history from '../history'

const REMOVE_NODE = 'REMOVE_NODE';

export const removeNode = node => ({ type: REMOVE_NODE, node })

const initialState = { newState: '' };

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case REMOVE_NODE:
//       const nodeToDelete = action.node;
//       return state.node.filter(node => node.value !== nodeToDelete);
//     default:
//       return state
//   }
// }


export default function (state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {

    case REMOVE_NODE:
      const nodeToDelete = action.node;
      return {
        newState: state.node.filter(node =>
          node.value !== nodeToDelete.value)
      }


    default:
      return newState;
  }
  // return newState;

};