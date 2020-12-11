//import { login } from "../actions";
// set default states {} null object
//action.type reprsents actions creation in index
const loginReducer = (state = {}, action ) => {
    switch(action.type){
        case 'LOGIN': 
            return action.payload;
        default:
            return state;
    }

}

export default loginReducer;


//create acionTypes.js
//export const LOGIN = 'LOGIN';
//export const LOGOUT = 'LOGOUT';

//import {LOGIN } from "../actions/actionTypes"
