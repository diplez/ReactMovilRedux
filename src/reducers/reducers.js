import {FETCHING,SUCCESS,ERROR} from './../constants/app'

let defaultState = {
    data:[],
    loading:false,
    error: ''
}

function reducers(state = defaultState, action){	    
    switch (action.type) {
        case FETCHING:
            return {                
                data: [],
                loading: action.loading,
                error:''
            }        
        case SUCCESS:
            return {                
                data: action.data,
                loading: action.loading,
                error:''
            }
        case ERROR:
            return {
                error: action.data,
                loading: action.loading
            }            
        default: return state;
    }
}

export default reducers;
