import { LOGIN_PENDING ,LOGIN_SUCCESS,LOGIN_ERROR } from './LoginTypes'
export default function reducer (state = {
    isLoginPending: false,
    isLoginSuccess: false,
    loginData:      null,
    isLoginError: null
    
}, action) {
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoginSuccess: action.payload.isLoginSuccess,
                loginData: action.payload.loginData  
              
            };

        case LOGIN_PENDING:
            return{
                ...state,
                isLoginPending: action.isLoginPending
            };

        case LOGIN_ERROR:
            return{
                ...state,
                isLoginError: action.isLoginError
            };        

        default:
            return state;    
    }
}



