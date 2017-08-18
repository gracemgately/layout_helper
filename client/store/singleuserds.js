import history from '../history'
import axios from 'axios'


//ACTION TYPES
// const GET_ALL_USER_DS = 'GET_ALL_USER_DS'
const GET_USER_BST = 'GET_USER_BST'
const GET_USER_LL = 'GET_USER_LL'
// const GET_USER_STACK = 'GET_USER_STACK'
// const GET_USER_QUEUE = 'GET_USER_QUEUE'

// INITIAL STATE
const defaultState = {
    BinarySearchTrees: [],
    LinkedLists: [],
    // Stacks: [],
    // Queues: []
};

// const defaultState = {user: []} ;

//ACTION CREATORS
// const getAllUserDS = userId => ({ type: GET_ALL_USER_DS, userId });
const getUserBST = binarysearchtrees => ({ type: GET_USER_BST, binarysearchtrees });
const getUserLL = linkedlists => ({ type: GET_USER_LL, linkedlists });
// const getUserStack = userId => ({ type: GET_USER_Stack, userId });
// const getUserQueue = userId => ({ type: GET_USER_Queue, userId });



//THUNKS

// export const BSTS = userId => 
//     dispatch =>
//         axios.get(`/api/userds/${userId}?type=binarysearchtree`)
//         // .then(res => res.data)
//         .then(res => dispatch(getUserBST(res.data)));

export const FetchUserDS = userId => 
    dispatch =>
        axios.get(`/api/users/${userId}/data-structures`)
        .then(res => {
            dispatch(getUserBST(res.data.binarysearchtrees))
            dispatch(getUserLL(res.data.linkedlists))
        })


//REDUCER
export default function (state = defaultState, action) {
    switch (action.type) {
        case GET_USER_BST:
            return Object.assign({}, state, {BinarySearchTrees: action.binarysearchtrees});
        case GET_USER_LL:
            return Object.assign({}, state, {LinkedLists: action.linkedlists});
        default:
            return defaultState;
    }
}

