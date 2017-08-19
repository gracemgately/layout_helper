import history from '../history'
import axios from 'axios'

import { deleteFromArray } from '../utils'


//ACTION TYPES
// const GET_ALL_USER_DS = 'GET_ALL_USER_DS'
const GET_USER_BST = 'GET_USER_BST'
const GET_USER_LL = 'GET_USER_LL'
const GET_USER_STACK = 'GET_USER_STACK'
const GET_USER_QUEUE = 'GET_USER_QUEUE'

const DELETE_USER_LL = 'DELETE_USER_LL'
const DELETE_USER_QUEUE = 'DELETE_USER_QUEUE'

// INITIAL STATE
const defaultState = {
    BinarySearchTrees: [],
    LinkedLists: [],
    Stacks: [],
    Queues: []
};

// const defaultState = {user: []} ;

//ACTION CREATORS
// const getAllUserDS = userId => ({ type: GET_ALL_USER_DS, userId });
const getUserBST = binarysearchtrees => ({ type: GET_USER_BST, binarysearchtrees });
const getUserLL = linkedlists => ({ type: GET_USER_LL, linkedlists });
const getUserStack = stacks => ({ type: GET_USER_STACK, stacks});
const getUserQueue = queues => ({ type: GET_USER_QUEUE, queues });

const deleteUserLL = linkedListID => ({ type: DELETE_USER_LL, linkedListID });
const deleteUserQueue = queueID => ({ type: DELETE_USER_QUEUE, queueID });




//THUNKS

export const FetchUserDS = userId => 
    dispatch =>
        axios.get(`/api/users/${userId}/data-structures`)
        .then(res => {
            dispatch(getUserBST(res.data.binarysearchtrees))
            dispatch(getUserLL(res.data.linkedlists))
            dispatch(getUserQueue(res.data.queues))
            dispatch(getUserStack(res.data.stacks))
        })
        .catch(err => console.error())


export const DeleteUserDS = (DSType, DSId) =>
    dispatch =>
        axios.delete(`/api/${DSType}/delete/${DSId}`)
        .then(res => {
            console.log(res.data);
            // dispatch(deleteUserBST);
            if (DSType === 'linkedlists') dispatch(deleteUserLL(DSId));
            if (DSType === 'queues') dispatch(deleteUserQueue(DSId));
            // dispatch(deleteUserStack);
            history.push('/my-data-structures');
        })
        .catch(err => console.error())

//REDUCER
export default function (state = defaultState, action) {
    switch (action.type) {
        case GET_USER_BST:
            return Object.assign({}, state, {BinarySearchTrees: action.binarysearchtrees});
        case GET_USER_LL:
            return Object.assign({}, state, {LinkedLists: action.linkedlists});
        case GET_USER_QUEUE:
            return Object.assign({}, state, {Queues: action.queues});
        case GET_USER_STACK:
            return Object.assign({}, state, {Stacks: action.stacks});
        case DELETE_USER_LL:
            const allUserLL = state.LinkedLists;
            const newLLArray = deleteFromArray(allUserLL, action.linkedListID)
            return Object.assign({}, state, {LinkedLists: newLLArray});
        case DELETE_USER_QUEUE:
            const allUserQueue = state.Queues;
            const newQueueArray = deleteFromArray(allUserQueue, action.queueID)
            return Object.assign({}, state, {Queues: newQueueArray});
        default:
            return defaultState;
    }
}

