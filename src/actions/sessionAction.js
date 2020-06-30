import {loginUser} from './../services/service'
import {FETCHING_SESION,SUCCESS_SESION,ERROR_SESION,CLOSE_SESSION,ROL_USER} from './../constants/app'

function userloginAutenticate(user){
	return (dispatch)=>{
		dispatch(loginFetching(true)) 
		return loginUser(user)
			.then(response=>{
				dispatch(
					loginSuccess(response.data,false)
				)
			})
			.catch(function (error) {												
				dispatch(
					loginError(error,false)				
				)
			})
	}
}

function loginFetching(loading){	
   return {
	       type: FETCHING_SESION,	       
	       loading: loading
 	}
}

function loginSuccess(result,loading){		
   return {
	       type: SUCCESS_SESION,
	       data: result,
	       loading: loading
 	}
}

function loginError(result,loading){	
   return {
	       type: ERROR_SESION,
	       data: result,
	       loading: loading
 	}
}

function loginClose(){	
   return {
	       type: CLOSE_SESSION
 	}
}

function selectRolUser(rol){
	return {
	       type: ROL_USER,
	       rol:rol
 	}	
}


export {userloginAutenticate,loginClose,selectRolUser}
