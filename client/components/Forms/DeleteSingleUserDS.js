//LIBRARIES
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios'

//UTILS & STORE
import { DeleteUserDS } from '../../store'


/**
 * COMPONENT
 */
const DeleteSingleUserDS = (props) => {
    return (
        <button onClick ={(evt) => props.deleteDS(evt, props.DSType, props.DSId)}>X</button>
    )
}

 /*
 * CONTAINER
 */

 const mapDispatch = (dispatch) => {
    return   {
        deleteDS: (evt, DSType, DSId) => {
        evt.preventDefault();
        dispatch(DeleteUserDS(DSType, DSId));
        }
    }        
}


export default connect(null, mapDispatch)(DeleteSingleUserDS);