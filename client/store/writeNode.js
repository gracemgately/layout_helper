import history from '../history'

const WRITE_NODE = 'WRITE_NODE';

export const writeNode = node => ({ type: WRITE_NODE, node })

const initialState = {newNode: ''};

export default function (state = initialState, action) {
  switch (action.type) {
    case WRITE_NODE:
      return  Object.assign({}, state, {newNode: action.node})
    default:
      return state
  }
}
