import history from '../history'

const GET_NODE = 'GET_NODE'
const ADD_NODE = 'ADD_NODE'


const getNode = node => ({ type: GET_NODE, node })
export const addNode = node => ({ type: ADD_NODE, node })

const initialState = [1, 2, 43, 23, 67, 78, 79];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NODE:
      return action.node
    case ADD_NODE:
      return [...state, action.node]
    default:
      return state
  }
}
