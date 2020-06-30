
import {URL_LOGIN} from './../constants/app'
import axios from "axios";

/**
* 	Configuraciones para utilizacion de API con axios
*/
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout= 20000;

/**
* METODO AUTH
**/
function loginUser(user){	
    return axios({
        method: 'POST',
        url: URL_LOGIN,
        data: JSON.stringify(user)
    })
}

/**
* METODO GET
**/
function get(url,data){	    
    return axios({
        method: 'GET',
        url: url,
        data: JSON.stringify(data)
    })
}

/**
* METODO POST
**/
function post(url,data){     
    return axios({
        method: 'POST',
        url: url,
        data: JSON.stringify(data)
    })
}

export {loginUser,get,post}
