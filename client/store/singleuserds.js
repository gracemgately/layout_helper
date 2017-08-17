import history from '../history'
import axios from 'axios'


//ACTION TYPES
// const GET_ALL_USER_BSTS = 'GET_USER_BST'
const GET_ALL_USER_DS = 'GET_ALL_USER_DS'
// const GET_USER_BST = 'GET_USER_BST'
// const GET_USER_LL = 'GET_USER_LL'
// const GET_USER_STACK = 'GET_USER_STACK'
// const GET_USER_QUEUE = 'GET_USER_QUEUE'

//INITIAL STATE
// const defaultState = {
//     BinarySearchTrees: [],
//     LinkedLists: [],
//     Stacks: [],
//     Queues: []
// };

const defaultState = {user: []} ;

//ACTION CREATORS
// const getAllUserBsts = userId => ({ type: GET_ALL_USER_BSTS, userId })
const getAllUserDS = userId => ({ type: GET_ALL_USER_DS, userId });
// const getUserBST = userId => ({ type: GET_USER_BST, userId });
// const getUserLL = userId => ({ type: GET_USER_LL, userId });
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
        axios.get(`/api/users/${userId}`)
        // .then(res => res.data)
        .then(res => dispatch(getAllUserDS(res.data)));


//REDUCER
export default function (state = defaultState, action) {
    console.log("STATE", state);
    switch (action.type) {
        case GET_ALL_USER_DS:
            console.log("RES.DATA", res.data)
            return Object.assign({}, state, {user: res.data});
        default:
            return defaultState;
    }
}

// //INITIAL STATE
// const initialState = {
//     user: {},
//     userBST: {},
//     userLL: {},
//     userQueue: {},
//     userStack: {}
// }