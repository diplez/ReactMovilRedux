import {FETCHING_SESION,SUCCESS_SESION,ERROR_SESION,CLOSE_SESSION,ROL_USER} from './../constants/app'
import {AsyncStorage} from 'react-native';
import { PURGE, REHYDRATE } from 'redux-persist';

let defaultState = {
    data:[],
    loading:false,
    error: '',
    isLogged: false,
    rol:''
}

function reducerSession(state = defaultState, action){	    
    switch (action.type) {
        case FETCHING_SESION:
            return {                
                data: [],
                loading: action.loading,
                error:''
            }        

        case SUCCESS_SESION:            
            //AsyncStorage.setItem('sessionData', JSON.stringify(action.data));
            return {                
                data: action.data,
                loading: action.loading,
                error:'',                
            }
        case ERROR_SESION:
            return {
                error: action.data,
                loading: action.loading
            }
        case CLOSE_SESSION:
            return {
                isLogged: false,
                data: [],
                loading: false,
                error:'',                
                rol:''
            }
        case ROL_USER:
            return {
                ...state,
                isLogged: true,
                rol:action.rol,
            }
        default: return state;
    }
}

export default reducerSession;
