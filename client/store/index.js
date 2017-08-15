import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import node from './node'
import writeNode from './writeNode'
//import removeNode from './removeNode'
import bstNode from './bstNode'


const reducer = combineReducers({user, node, writeNode, bstNode})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware);

export default store
export * from './user'
export * from './node'
export * from './writeNode'
//export * from './removeNode'
export * from './bstNode'



