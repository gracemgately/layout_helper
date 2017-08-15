import history from '../history'

const WRITE_NODE = 'WRITE_NODE';
const WRITE_INDEX = "WRITE_INDEX";

export const writeNode = node => ({ type: WRITE_NODE, node })
export const writeIndex = node => ({ type: WRITE_INDEX, node })

const initialState = {newNode: '', index: ''};

export default function (state = initialState, action) {
  switch (action.type) {
    case WRITE_NODE:
      return Object.assign({}, state, { newNode: action.node })
    case WRITE_INDEX:
      return Object.assign({}, state, { index: action.node })
    default:
      return state
  }
}




