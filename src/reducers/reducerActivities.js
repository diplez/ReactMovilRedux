import {FETCHING,SUCCESS,ERROR,STOP_ACTIVITY} from './../constants/app'

let defaultState = {
    data:[],
    loading:false,
    error: '',
}

function reducerActivities(state = defaultState, action){	    
    if(FETCHING==action.type){
      return {                
        data: [],
        loading: action.loading,
        error:''
      }
    }
    if(SUCCESS==action.type){
      return {                
        data: action.data,
        loading: action.loading,
        error:'',                
      }
    }
    if(ERROR==action.type){
      return {                                
          error: action.data,
          loading: action.loading
      }
    }
    if(STOP_ACTIVITY==action.type){
      return {     
          data:[],
          error: '',
          loading: false,
      }
    }
    return state;
}

export default reducerActivities;