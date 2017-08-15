import history from '../history'

const WRITE_STACK_ITEM = 'WRITE STACK ITEM'
const PUSH_TO_STACK = 'PUSH_TO_STACK'
//pop from stack
//peek stack

export const pushToStack = number => ({ type: PUSH_TO_STACK, number })

export default function (state = {}, action) {
  switch (action.type) {
    case pushToStack:
        var newState = state.concat(action.number)
        return Object.assign({}, state, { stack: newState })
    default:
      return state;
  }
}