import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import node from './node'
import writeNode from './writeNode'
import bstNode from './bstNode'
import singleuserds from './singleuserds'


const reducer = combineReducers({user, node, writeNode, bstNode, singleuserds})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware);

export default store
export * from './user'
export * from './node'
export * from './writeNode'
export * from './bstNode'
export * from './singleuserds'



