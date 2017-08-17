import history from '../history'

//ACTION TYPES
const GET_ALL_USER_BSTS = 'GET_USER_BST'



//ACTION CREATORS
const getAllUserBsts = userId => ({ type: GET_ALL_USER_BSTS, userId })


//THUNKS

export const BSTS = userId => 
    dispatch =>
        axios.get(`/api/userds/${userId}?type=BinarySearchTree`)
        .then(res => res.data)
        .then()


//REDUCER