import {get} from './../services/service'
import {FETCHING,SUCCESS,ERROR} from './../constants/app'

function genericAction(url, data){
	return (dispatch)=>{
		dispatch(fetching(true)) 
		return get(url,data)
			.then(response=>{				
				dispatch(
					success(response.data,false)
				)
			})
			.catch(function (error) {														
				dispatch(
					errorMessage(error,false)
				)
			})
	}
}

function fetching(loading){	
   return {
	       type: FETCHING,	       
	       loading: loading
 	}
}

function success(result,loading){		
   return {
	       type: SUCCESS,
	       data: result,
	       loading: loading
 	}
}

function errorMessage(result,loading){	
   return {
	       type: ERROR,
	       data: result,
	       loading: loading
 	}
}

function stop_loading(type){	
   return {
		type: type
   }
}


export {genericAction,stop_loading}
