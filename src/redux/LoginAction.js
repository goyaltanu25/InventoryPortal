import promise from 'es6-promise'
import { LOGIN_PENDING ,LOGIN_SUCCESS,LOGIN_ERROR } from './LoginTypes'
function setLoginPending(isLoginPending){
    return {
        type:LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess,loginData){
    return {
        type:LOGIN_SUCCESS,
        payload :{isLoginSuccess,loginData}
    };
}

function setLoginError(isLoginError){
    return {
        type:LOGIN_ERROR,
        isLoginError
    };
}
export  function login(username, password) {
    return dispatch => {
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(false,null));
        dispatch(setLoginError(null));
    
        sendLoginRequest(username, password)
        .then(success => {
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true),{username, password});            
        })
        .catch(err => {
            dispatch(setLoginPending(false));
            dispatch(setLoginError(err)); 
        })
    };    
}
function sendLoginRequest(username, password) {
    return new promise((resolve, reject) => {
          if (username === 'user0109' && password === 'happyworld') {
                return resolve(true);
            } else {
             return reject(new Error("Invalid Username & Password"));
            }
                 
    });
}